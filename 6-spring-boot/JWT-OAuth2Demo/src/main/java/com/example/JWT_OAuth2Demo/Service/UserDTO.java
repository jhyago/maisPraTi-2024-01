// Declaração do pacote onde a classe UserDTO está localizada
package com.example.JWT_OAuth2Demo.Service;

// Importação da classe User, que representa o documento de usuário armazenado no MongoDB
import com.example.JWT_OAuth2Demo.userDocument.User;

// Importações de anotações do Lombok para gerar automaticamente código boilerplate
import lombok.Builder; // Lombok gera automaticamente um padrão de builder para construir objetos de UserDTO
import lombok.Data; // Lombok gera automaticamente os métodos getters, setters, equals, hashCode, e toString

// Anotação Lombok que gera automaticamente os métodos getter, setter, equals, hashCode e toString para a classe
@Data
// Anotação Lombok que gera um padrão de builder para construir instâncias de UserDTO
@Builder
// Declaração da classe UserDTO, que serve como um DTO (Data Transfer Object) para transportar informações de usuário
public class UserDTO {

    // Declaração dos campos que compõem o UserDTO, que são apenas uma versão simplificada do User original
    private String id; // Armazena o ID do usuário
    private String username; // Armazena o nome de usuário

    // Método estático que converte um objeto User em um objeto UserDTO
    public static UserDTO from(User user) {
        // Usa o padrão Builder gerado pelo Lombok para construir uma nova instância de UserDTO
        return UserDTO.builder()
                // Define o campo id do UserDTO com o ID do objeto User original
                .id(user.getId())
                // Define o campo username do UserDTO com o nome de usuário do objeto User original
                .username(user.getUsername())
                // Constrói e retorna a nova instância de UserDTO
                .build();
    }
}