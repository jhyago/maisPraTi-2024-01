// Declaração do pacote onde o controller está localizado
package com.example.JWT_OAuth2Demo.controller;

// Importação das classes necessárias para a lógica de autenticação, autorização e respostas HTTP
import org.springframework.beans.factory.annotation.Autowired; // Anotação para injeção automática de dependências
import org.springframework.http.ResponseEntity; // Classe que encapsula a resposta HTTP
import org.springframework.security.access.prepost.PreAuthorize; // Anotação para autorização baseada em expressões SpEL
import org.springframework.security.core.annotation.AuthenticationPrincipal; // Anotação para acessar o usuário autenticado atual
import org.springframework.web.bind.annotation.GetMapping; // Anotação para mapear um método para uma requisição GET
import org.springframework.web.bind.annotation.PathVariable; // Anotação para vincular uma variável de caminho (URL) a um parâmetro do método
import org.springframework.web.bind.annotation.RequestMapping; // Anotação para definir o endpoint base de um controller
import org.springframework.web.bind.annotation.RestController; // Anotação para definir a classe como um controller REST

// Importação das classes do projeto
import com.example.JWT_OAuth2Demo.repository.UserRepository; // Interface de repositório para realizar operações no banco de dados com usuários
import com.example.JWT_OAuth2Demo.userDocument.User; // Classe representando o documento de usuário no banco de dados
import com.example.JWT_OAuth2Demo.userModel.UserDTO; // Classe de transferência de dados (DTO) para representar o usuário de forma mais simplificada

// Define a classe como um controller REST que responderá a requisições HTTP
@RestController
// Define o caminho base "/api/users" para todos os endpoints deste controller
@RequestMapping("/api/users")
public class UserController {

    // Injeta automaticamente o UserRepository, que será usado para buscar usuários no banco de dados
    @Autowired
    UserRepository userRepository;

    // Método que trata o endpoint GET para buscar informações de um usuário específico pelo seu ID
    @GetMapping("/{id}")
    // Anotação que define uma expressão para autorização: permite acesso apenas se o ID do usuário autenticado for igual ao ID passado na URL
    @PreAuthorize("#user.id == #id")
    public ResponseEntity user(@AuthenticationPrincipal User user, @PathVariable String id) { // Recebe o usuário autenticado e o ID da URL como parâmetros
        // Busca o usuário no banco de dados pelo ID. Se não encontrado, lança uma exceção (pode ser uma NoSuchElementException)
        // O método orElseThrow() lança uma exceção se o usuário com o ID não for encontrado
        return ResponseEntity.ok(UserDTO.from(userRepository.findById(id).orElseThrow())); // Converte o objeto User para UserDTO e retorna uma resposta HTTP 200 (OK)
    }
}