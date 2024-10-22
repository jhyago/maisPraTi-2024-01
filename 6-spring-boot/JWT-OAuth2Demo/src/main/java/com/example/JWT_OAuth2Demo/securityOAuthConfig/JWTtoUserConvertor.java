// Declaração do pacote onde o conversor de JWT para User está localizado
package com.example.JWT_OAuth2Demo.securityOAuthConfig;

// Importação da classe utilitária Collections, usada para criar coleções imutáveis
import java.util.Collections;

// Importa a classe User, que representa o documento de usuário no banco de dados
import com.example.JWT_OAuth2Demo.userDocument.User;

// Importa a interface Converter, do Spring, que converte um tipo de objeto em outro
import org.springframework.core.convert.converter.Converter;

// Importa a classe UsernamePasswordAuthenticationToken, que é usada para representar a autenticação baseada em nome de usuário e senha
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

// Importa a classe Jwt, que representa o token JWT em si (JSON Web Token)
import org.springframework.security.oauth2.jwt.Jwt;

// Indica que esta classe é um componente Spring, o que permite que ela seja gerenciada e injetada automaticamente em outros componentes
import org.springframework.stereotype.Component;

// Define a classe JWTtoUserConvertor como um conversor de objetos do tipo Jwt para UsernamePasswordAuthenticationToken
@Component
public class JWTtoUserConvertor implements Converter<Jwt, UsernamePasswordAuthenticationToken> {

    // Método sobreposto da interface Converter que converte um objeto Jwt para UsernamePasswordAuthenticationToken
    @Override
    public UsernamePasswordAuthenticationToken convert(Jwt source) {
        // Cria um novo objeto User que representará o usuário autenticado
        User user = new User();

        // Seta o ID do usuário com base no subject (sub) do JWT, que geralmente representa o identificador único do usuário
        user.setId(source.getSubject());

        // Retorna um novo objeto UsernamePasswordAuthenticationToken, passando o usuário, o token JWT original (source),
        // e uma lista vazia de permissões (authorities), já que nesse ponto elas não estão sendo gerenciadas explicitamente
        return new UsernamePasswordAuthenticationToken(user, source, Collections.EMPTY_LIST);
    }
}