// Define o pacote onde esta classe reside
package com.example.api_user.model;

// Importações necessárias para a manipulação da persistência JPA e Lombok
import jakarta.persistence.*; // Importa todas as anotações necessárias para JPA (Java Persistence API), como @Entity, @Id, @GeneratedValue, etc.
import lombok.Data; // Importa a anotação @Data do Lombok, que gera automaticamente getters, setters, equals, hashCode, toString e outros métodos úteis.

// Anotação @Entity:
// - Marca a classe como uma **entidade JPA**, o que significa que ela será mapeada para uma tabela no banco de dados.
// - O JPA (Java Persistence API) é um padrão para mapeamento objeto-relacional, permitindo que as classes Java sejam persistidas em um banco de dados relacional.
// - Ao usar @Entity, o Spring Data JPA trata esta classe como um objeto persistente, o que permite realizar operações de CRUD automaticamente.
@Entity

// Anotação @Data (Lombok):
// - Faz parte da biblioteca Lombok, que simplifica o código eliminando a necessidade de escrever getters, setters, e outros métodos comuns manualmente.
// - A anotação @Data gera automaticamente os seguintes métodos:
// - **Getters e Setters**: Para todos os campos da classe.
// - **toString()**: Um método que retorna uma string representando o objeto.
// - **equals() e hashCode()**: Para comparar objetos de maneira eficiente.
// - **RequiredArgsConstructor**: Um construtor para os campos obrigatórios.
// - A principal vantagem de usar @Data é manter o código mais limpo, sem ter que escrever explicitamente os métodos de manipulação de atributos.
@Data

// Anotação @Table:
// - Define o nome da tabela no banco de dados que será associada à entidade. Neste caso, a tabela será chamada de `users`.
// - Sem a anotação @Table, o JPA assume que o nome da tabela é o mesmo da classe, mas com a anotação, você pode personalizar o nome da tabela.
@Table(name = "users")
public class User {

    // Anotação @Id:
    // - Marca o campo `id` como a **chave primária** da tabela no banco de dados.
    // - Em um banco de dados relacional, a chave primária é um identificador único para cada registro da tabela.
    @Id

    // Anotação @GeneratedValue:
    // - Especifica que o valor da chave primária será gerado automaticamente pelo banco de dados.
    // - O parâmetro `strategy = GenerationType.IDENTITY` indica que o banco de dados será responsável por gerar o valor único para a chave primária (geralmente usado com colunas AUTO_INCREMENT).
    // - **GenerationType.IDENTITY**: O valor da chave primária é gerado pelo banco de dados (geralmente através de um campo autoincremental). Isso é comum em bancos de dados como MySQL.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id; // Campo que armazena o ID único de cada usuário.

    // Anotação @Column:
    // - Define uma coluna no banco de dados associada ao campo `username`.
    // - O parâmetro `nullable = false` significa que este campo não pode ser nulo no banco de dados, ou seja, é obrigatório.
    @Column(nullable = false)
    private String username; // Nome de usuário, que é obrigatório.

    // Campo `password` mapeado para a coluna "password" no banco de dados.
    // Também é obrigatório, como especificado pelo `nullable = false`.
    @Column(nullable = false)
    private String password; // Senha do usuário, que é obrigatória.

    // Campo `email` mapeado para a coluna "email" no banco de dados.
    // O campo é obrigatório no banco de dados.
    @Column(nullable = false)
    private String email; // Endereço de e-mail do usuário, que é obrigatório.

    // Campo `role` mapeado para a coluna "role" no banco de dados.
    // O campo é obrigatório, indicando o papel (role) do usuário, como "USER" ou "ADMIN".
    @Column(nullable = false)
    private String role; // Papel ou função do usuário na aplicação, como "ROLE_USER" ou "ROLE_ADMIN".
}