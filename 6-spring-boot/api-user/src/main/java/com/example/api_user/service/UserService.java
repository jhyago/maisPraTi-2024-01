// Define o pacote onde esta classe reside
package com.example.api_user.service;

// Importações necessárias para a interação com o banco de dados e segurança
import com.example.api_user.repository.UserRepository; // Repositório que permite a comunicação com o banco de dados para a entidade User.
import org.apache.catalina.authenticator.BasicAuthenticator; // Importação desnecessária para este contexto (não está sendo utilizada).
import org.springframework.beans.factory.annotation.Autowired; // Injeta automaticamente dependências (beans) gerenciadas pelo Spring.
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; // Classe usada para criptografar senhas com o algoritmo BCrypt.
import org.springframework.stereotype.Service; // Marca a classe como um serviço Spring.

import com.example.api_user.dto.UserDTO; // Data Transfer Object (DTO) que encapsula os dados do usuário.
import com.example.api_user.model.User; // Classe modelo que representa a entidade User no banco de dados.

import java.util.List; // Interface da coleção List usada para armazenar múltiplos objetos.
import java.util.Optional; // Classe que pode ou não conter um valor, usada para evitar null pointers.
import java.util.stream.Collectors; // Coletor do pacote Stream usado para transformar fluxos de dados em coleções.

// Anotação @Service:
// - Indica que esta classe é um **serviço** Spring, que contém a lógica de negócios.
// - Serviços são componentes do Spring usados para encapsular a lógica central da aplicação e podem ser reutilizados e injetados em outras partes.
// - A anotação `@Service` faz com que esta classe seja registrada automaticamente como um bean gerenciado pelo Spring.
@Service
public class UserService {

    // Anotação @Autowired:
    // - Injeta automaticamente a dependência `UserRepository`, que permite realizar operações de banco de dados relacionadas à entidade `User`.
    // - O Spring gerencia a instância de `UserRepository` e a injeta automaticamente nesta classe.
    @Autowired
    private UserRepository userRepository;

    // Método para obter todos os usuários
    // - Este método retorna uma lista de todos os usuários do banco de dados, convertidos em objetos `UserDTO`.
    public List<UserDTO> getAllUsers() {
        return userRepository
                .findAll() // Recupera todos os usuários do banco de dados como uma lista de objetos `User`.
                .stream() // Converte a lista em um fluxo (stream), que permite aplicar transformações nos dados.
                .map(this::convertToDTO) // Converte cada objeto `User` para um `UserDTO` chamando o método `convertToDTO`.
                .collect(Collectors.toList()); // Coleta os resultados e os transforma de volta em uma lista de objetos `UserDTO`.
    }

    // Método para obter um usuário por ID
    // - Busca o usuário no banco de dados pelo ID. Se o usuário for encontrado, ele é convertido para `UserDTO`, caso contrário, retorna null.
    public UserDTO getUserById(int id) {
        Optional<User> user = userRepository.findById(id); // Usa `Optional` para evitar null pointers.
        return user.map(this::convertToDTO).orElse(null); // Se o usuário estiver presente, converte para `UserDTO`, caso contrário, retorna null.
    }

    // Método para criar um novo usuário
    // - Recebe um `UserDTO` como entrada, converte-o em um objeto `User` e o salva no banco de dados. A senha é criptografada antes de salvar.
    public UserDTO createUser(UserDTO userDTO) {
        // Cria um novo objeto `User` e define seus atributos com base nos dados do `UserDTO`.
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setRole(userDTO.getRole());

        // Criptografa a senha do usuário usando o BCryptPasswordEncoder.
        user.setPassword(new BCryptPasswordEncoder().encode(userDTO.getPassword()));

        // Salva o novo usuário no banco de dados.
        userRepository.save(user);

        // Converte o objeto `User` salvo para `UserDTO` e o retorna.
        return convertToDTO(user);
    }

    // Método para atualizar um usuário existente
    // - Recebe o ID do usuário e os dados atualizados em um `UserDTO`. Atualiza o usuário no banco de dados se ele for encontrado.
    public UserDTO updateUser(int id, UserDTO userDTO) {
        // Busca o usuário pelo ID.
        Optional<User> userOptional = userRepository.findById(id);

        // Se o usuário for encontrado, atualiza seus dados e os salva no banco de dados.
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setUsername(userDTO.getUsername());
            user.setEmail(userDTO.getEmail());
            user.setRole(userDTO.getRole());

            // Atualiza a senha do usuário, criptografando-a novamente.
            user.setPassword(new BCryptPasswordEncoder().encode(userDTO.getPassword()));

            // Salva o usuário atualizado no banco de dados.
            userRepository.save(user);

            // Converte o objeto `User` atualizado para `UserDTO` e o retorna.
            return convertToDTO(user);
        }

        // Se o usuário não for encontrado, retorna null.
        return null;
    }

    // Método para deletar um usuário pelo ID
    // - Recebe o ID do usuário a ser deletado e o remove do banco de dados.
    public void deleteUser(int id) {
        userRepository.deleteById(id); // Remove o usuário do banco de dados usando seu ID.
    }

    // Método privado para converter um objeto `User` para `UserDTO`
    // - Este método é utilizado para transformar um objeto `User` em um objeto `UserDTO`, que é mais adequado para ser retornado em respostas de APIs.
    private UserDTO convertToDTO(User user) {
        UserDTO userDTO = new UserDTO(); // Cria uma nova instância de `UserDTO`.
        userDTO.setId(user.getId()); // Define o ID do usuário.
        userDTO.setUsername(user.getUsername()); // Define o nome de usuário.
        userDTO.setEmail(user.getEmail()); // Define o email.
        userDTO.setRole(user.getRole()); // Define o papel (role) do usuário.

        // Retorna o objeto `UserDTO` preenchido.
        return userDTO;
    }
}