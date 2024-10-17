// Define o pacote onde esta interface reside
package com.example.api_user.repository;

// Importações necessárias para a interação com o banco de dados usando Spring Data JPA
import org.springframework.data.jpa.repository.JpaRepository; // Interface que fornece métodos CRUD e mais para trabalhar com persistência JPA.
import com.example.api_user.model.User; // A classe modelo que representa a entidade User no banco de dados.
import org.springframework.stereotype.Repository; // Anotação que marca esta interface como um repositório, uma especialização de um componente Spring.

import java.util.Optional; // Classe que pode ou não conter um valor, usada para evitar null pointers.

// Anotação @Repository:
// - Marca esta interface como um **repositório** do Spring.
// - O Spring automaticamente cria uma implementação dessa interface em tempo de execução.
// - Repositórios são componentes que fazem a conexão entre a aplicação e o banco de dados.
// - A anotação `@Repository` é uma especialização da anotação `@Component`, e além de registrar o bean no Spring, também transforma exceções específicas do banco de dados em exceções de persistência do Spring (como `DataAccessException`).
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    // Interface JpaRepository:
    // - JpaRepository é uma interface do Spring Data JPA que fornece métodos prontos para realizar operações básicas de CRUD (Create, Read, Update, Delete) e mais.
    // - Ao estender JpaRepository, não precisamos implementar manualmente os métodos para salvar, deletar ou buscar dados no banco de dados. O Spring gera automaticamente a implementação desses métodos em tempo de execução.
    // - Esta interface é genérica e recebe dois parâmetros:
    //   - O tipo da entidade com a qual trabalhará, neste caso, `User`.
    //   - O tipo da chave primária (ID) da entidade, neste caso, `Integer`.

    // Método findByUsername:
    // - Este método personalizado permite que o Spring gere uma query automaticamente para buscar um usuário pelo nome de usuário.
    // - A convenção de nomeação `findByUsername` segue as regras de convenção do Spring Data JPA. Com base no nome do método, o Spring gera uma query SQL do tipo `SELECT * FROM user WHERE username = ?`.
    // - Isso elimina a necessidade de escrever SQL manualmente.
    User findByUsername(String username);
}
