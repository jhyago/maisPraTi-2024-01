// Declaração do pacote onde o controller está localizado
package com.example.JWT_OAuth2Demo.controller;

// Importação de classes necessárias para a lógica de segurança e autenticação
import com.example.JWT_OAuth2Demo.securityOAuthConfig.TokenGenerator; // Classe responsável pela geração de tokens JWT
import com.example.JWT_OAuth2Demo.userDocument.User; // Classe representando o documento do usuário no banco de dados
import com.example.JWT_OAuth2Demo.userModel.Login; // Modelo de dados para login do usuário
import com.example.JWT_OAuth2Demo.userModel.SignUp; // Modelo de dados para cadastro do usuário
import com.example.JWT_OAuth2Demo.userModel.Token; // Modelo que encapsula o token de atualização (refresh token)
import org.springframework.beans.factory.annotation.Autowired; // Anotação para injeção automática de dependências
import org.springframework.beans.factory.annotation.Qualifier; // Qualificador para especificar o bean correto a ser injetado
import org.springframework.http.ResponseEntity; // Classe que encapsula a resposta HTTP
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken; // Classe usada para autenticar com base em nome de usuário e senha
import org.springframework.security.authentication.dao.DaoAuthenticationProvider; // Provedor de autenticação que busca informações de um banco de dados
import org.springframework.security.core.Authentication; // Interface para objetos que representam o processo de autenticação
import org.springframework.security.oauth2.jwt.Jwt; // Representa um JWT (JSON Web Token)
import org.springframework.security.oauth2.server.resource.authentication.BearerTokenAuthenticationToken; // Classe para encapsular tokens de autenticação via Bearer
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationProvider; // Provedor de autenticação para validar tokens JWT
import org.springframework.security.provisioning.UserDetailsManager; // Interface para gerenciar dados de usuário no Spring Security
import org.springframework.web.bind.annotation.PostMapping; // Anotação para mapear um método para uma requisição POST
import org.springframework.web.bind.annotation.RequestBody; // Anotação para indicar que o corpo da requisição será convertido para um objeto
import org.springframework.web.bind.annotation.RequestMapping; // Anotação para definir o endpoint base de um controller
import org.springframework.web.bind.annotation.RestController; // Anotação para definir a classe como um controller REST

// Importação de classes utilitárias de coleções
import java.util.Collections; // Fornece métodos estáticos para criar coleções imutáveis

// Define a classe como um controller REST que responderá a requisições HTTP
@RestController
// Define o caminho base "/api/auth" para todos os endpoints deste controller
@RequestMapping("/api/auth")
public class AuthController {

    // Injeta automaticamente o UserDetailsManager, que gerencia os usuários
    @Autowired
    UserDetailsManager userDetailsManager;

    // Injeta automaticamente a classe TokenGenerator, que será usada para criar tokens JWT
    @Autowired
    TokenGenerator tokenGenerator;

    // Injeta automaticamente o DaoAuthenticationProvider, que será usado para autenticação com banco de dados
    @Autowired
    DaoAuthenticationProvider daoAuthenticationProvider;

    // Injeta automaticamente um JwtAuthenticationProvider específico, qualificado para refresh tokens
    @Autowired
    @Qualifier("jwtRefreshTokenAuthProvider")
    JwtAuthenticationProvider refreshTokenAuthProvider;

    // Método que trata o endpoint de registro de novos usuários
    @PostMapping("/register")
    public ResponseEntity register(@RequestBody SignUp signupDTO) { // Recebe o corpo da requisição como um objeto SignUp
        // Cria um novo objeto User com base nos dados recebidos (username e senha)
        User user = new User(signupDTO.getUsername(), signupDTO.getPassword());

        // Cria o usuário no sistema através do userDetailsManager, persistindo no banco
        userDetailsManager.createUser(user);

        // Autentica o usuário automaticamente após o registro, criando um token de autenticação
        Authentication authentication = UsernamePasswordAuthenticationToken.authenticated(user, signupDTO.getPassword(), Collections.EMPTY_LIST);

        // Retorna uma resposta HTTP 200 (OK) com o token JWT criado para o usuário autenticado
        return ResponseEntity.ok(tokenGenerator.createToken(authentication));
    }

    // Método que trata o endpoint de login de usuários
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Login loginDTO) { // Recebe o corpo da requisição como um objeto Login
        // Autentica o usuário utilizando o provedor de autenticação baseado em DAO, verificando no banco de dados
        Authentication authentication = daoAuthenticationProvider.authenticate(UsernamePasswordAuthenticationToken.unauthenticated(loginDTO.getUsername(), loginDTO.getPassword()));

        // Retorna uma resposta HTTP 200 (OK) com o token JWT criado para o usuário autenticado
        return ResponseEntity.ok(tokenGenerator.createToken(authentication));
    }

    // Método que trata o endpoint para obtenção de novos tokens utilizando refresh tokens
    @PostMapping("/token")
    public ResponseEntity token(@RequestBody Token tokenDTO) { // Recebe o corpo da requisição como um objeto Token contendo o refresh token
        // Autentica o refresh token utilizando o provedor de autenticação JWT para refresh tokens
        Authentication authentication = refreshTokenAuthProvider.authenticate(new BearerTokenAuthenticationToken(tokenDTO.getRefreshToken()));

        // Extrai o JWT autenticado a partir das credenciais da autenticação
        Jwt jwt = (Jwt) authentication.getCredentials();

        // Retorna uma resposta HTTP 200 (OK) com um novo token JWT criado com base no refresh token autenticado
        return ResponseEntity.ok(tokenGenerator.createToken(authentication));
    }
}