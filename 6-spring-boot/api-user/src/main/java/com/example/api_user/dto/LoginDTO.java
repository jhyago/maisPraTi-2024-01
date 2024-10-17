// Define o pacote onde esta classe reside
package com.example.api_user.dto;

// Importações do Lombok para gerar automaticamente código repetitivo, como construtores e métodos comuns
import lombok.AllArgsConstructor; // Gera automaticamente um construtor que aceita argumentos para todos os campos da classe.
import lombok.Data; // Gera automaticamente getters, setters, equals, hashCode, toString e outros métodos úteis.
import lombok.NoArgsConstructor; // Gera automaticamente um construtor vazio (sem parâmetros).

// Anotação @AllArgsConstructor:
// - Esta anotação faz parte da biblioteca Lombok e gera automaticamente um **construtor** que aceita valores para todos os campos da classe.
// - O construtor gerado incluirá parâmetros para cada um dos campos definidos na classe (`username` e `password`).
@AllArgsConstructor

// Anotação @NoArgsConstructor:
// - Gera automaticamente um **construtor vazio** (sem parâmetros) para a classe.
// - Isso é útil em muitos cenários, como ao trabalhar com frameworks como o Spring ou JPA, que exigem um construtor sem parâmetros para criar instâncias de objetos.
@NoArgsConstructor

// Anotação @Data:
// - A anotação @Data do Lombok combina várias funcionalidades em uma única anotação.
// - Ela gera automaticamente os seguintes métodos:
// - **Getters e Setters** para todos os campos da classe (`username` e `password`).
// - **toString()**: Um método para retornar uma representação de string do objeto.
// - **equals() e hashCode()**: Métodos para comparar objetos com base em seus atributos.
// - **RequiredArgsConstructor**: Construtor que inclui os campos obrigatórios (embora já seja substituído pelo @AllArgsConstructor e @NoArgsConstructor).
@Data
public class LoginDTO {
    // Campos que serão utilizados para login
    private String username; // Nome de usuário (identificador usado no processo de login)
    private String password; // Senha do usuário (usada para autenticação)
}