// Declaração do pacote onde o repositório está localizado
package com.example.JWT_OAuth2Demo.repository;

// Importa a classe User, que representa um documento de usuário no banco de dados
import com.example.JWT_OAuth2Demo.userDocument.User;

// Importa a interface MongoRepository, que fornece métodos prontos para operações em um banco de dados MongoDB
import org.springframework.data.mongodb.repository.MongoRepository;

// Importa a classe Optional, que encapsula um valor que pode ou não estar presente (evita valores nulos)
import java.util.Optional;

// Define a interface UserRepository, que estende MongoRepository
// MongoRepository é um repositório especializado para MongoDB, e ele já fornece métodos prontos para operações CRUD
// O primeiro parâmetro <User> indica que o repositório vai trabalhar com a entidade (ou documento) User
// O segundo parâmetro <String> indica que o tipo do identificador (ID) dos usuários é uma String
public interface UserRepository extends MongoRepository<User, String> {

    // Método personalizado que verifica se um usuário já existe no banco de dados pelo nome de usuário (username)
    // O Spring Data cria automaticamente a implementação deste método com base na convenção de nomenclatura
    // O método retorna um booleano: true se o nome de usuário existe, false caso contrário
    boolean existsByUserName(String username);

    // Método personalizado que busca um usuário pelo nome de usuário (username)
    // Retorna um Optional<User> que pode conter o usuário encontrado ou estar vazio se o usuário não for encontrado
    Optional<User> findByUserName(String username);
}