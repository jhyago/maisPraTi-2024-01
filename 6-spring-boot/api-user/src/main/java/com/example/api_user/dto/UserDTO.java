// Define o pacote onde esta classe reside
package com.example.api_user.dto;

// Importação da anotação @Data do Lombok, que gera automaticamente métodos como getters, setters, equals, hashCode, toString, etc.
import lombok.Data;

// Anotação @Data:
// - A anotação @Data faz parte da biblioteca Lombok e é usada para gerar automaticamente vários métodos repetitivos.
// - Ela combina várias funcionalidades do Lombok em uma única anotação, eliminando a necessidade de escrever manualmente métodos como getters, setters, equals, hashCode, e toString.
// - Essa anotação também gera um construtor para os campos obrigatórios da classe.
// - Gera automaticamente:
//    - **Getters e Setters** para todos os campos da classe.
//    - **toString()**: Gera uma string representando os valores dos campos da classe.
//    - **equals() e hashCode()**: Métodos para comparar objetos da classe `UserDTO` com base em seus atributos e gerar o código hash apropriado.
@Data
public class UserDTO {
    // Atributos da classe que representam os dados do usuário transferidos pela API (DTO - Data Transfer Object)
    private int id; // O ID único do usuário, geralmente gerado pelo banco de dados.
    private String username; // Nome de usuário para identificação e login.
    private String email; // Endereço de e-mail do usuário.
    private String role; // O papel (role) do usuário, como "ROLE_USER" ou "ROLE_ADMIN".
    private String password; // Senha do usuário, que será criptografada quando manipulada no sistema.
}