// Declaração do pacote onde a classe UserManager está localizada
package com.example.JWT_OAuth2Demo.Service;

// Importações necessárias para manipulação de mensagens, valores opcionais e funcionalidades de segurança
import java.text.MessageFormat; // Para formatar mensagens (ex: mensagens de exceção)
import java.util.Optional; // Utilizado para trabalhar com valores opcionais (valores que podem estar presentes ou ausentes)

// Importações do Spring para injeção de dependências e gerenciamento de usuários
import org.springframework.beans.factory.annotation.Autowired; // Para injeção automática de dependências
import org.springframework.security.core.userdetails.UserDetails; // Interface que representa os detalhes do usuário
import org.springframework.security.core.userdetails.UsernameNotFoundException; // Exceção lançada quando um usuário não é encontrado
import org.springframework.security.crypto.password.PasswordEncoder; // Interface para codificação de senhas
import org.springframework.security.provisioning.UserDetailsManager; // Interface que gerencia CRUD de usuários
import org.springframework.stereotype.Service; // Marca esta classe como um serviço Spring (bean gerenciado)

// Importações do projeto
import com.example.JWT_OAuth2Demo.repository.UserRepository; // Interface de repositório que acessa dados dos usuários no banco
import com.example.JWT_OAuth2Demo.userDocument.User; // Classe que representa o documento de usuário no banco de dados

// Anotação para marcar esta classe como um serviço Spring, permitindo que seja gerenciada automaticamente pelo framework
@Service
public class UserManager implements UserDetailsManager {
    // Injeta automaticamente o repositório de usuários, que lida com as operações de CRUD no banco de dados
    @Autowired
    UserRepository userRepository;

    // Injeta automaticamente o codificador de senhas, que será usado para codificar as senhas dos usuários
    @Autowired
    PasswordEncoder passwordEncoder;

    // Método que cria um novo usuário
    @Override
    public void createUser(UserDetails user) {
        // Converte o objeto UserDetails em um objeto User e codifica sua senha antes de salvar
        ((User) user).setPassword(passwordEncoder.encode(user.getPassword()));
        // Salva o usuário no banco de dados por meio do repositório
        userRepository.save((User) user);
    }

    // Método que atualiza os dados de um usuário (não implementado)
    @Override
    public void updateUser(UserDetails user) {
        // O método está vazio porque, neste código, a lógica de atualização de usuário não foi implementada
    }

    // Método que exclui um usuário pelo nome de usuário (não implementado)
    @Override
    public void deleteUser(String username) {
        // O método está vazio porque, neste código, a lógica de exclusão de usuário não foi implementada
    }

    // Método que altera a senha do usuário (não implementado)
    @Override
    public void changePassword(String oldPassword, String newPassword) {
        // O método está vazio porque, neste código, a lógica de mudança de senha não foi implementada
    }

    // Método que verifica se um usuário com um determinado nome de usuário já existe no banco de dados
    @Override
    public boolean userExists(String username) {
        // Retorna false por padrão, pois a lógica para verificar se um usuário existe não foi implementada
        return false;
    }

    // Método que carrega um usuário pelo nome de usuário, necessário para autenticação
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Tenta encontrar um usuário no banco de dados pelo nome de usuário
        Optional<User> userOptional = userRepository.findByUserName(username);

        // Se o usuário não for encontrado, lança uma exceção UsernameNotFoundException com uma mensagem formatada
        if (userOptional.isEmpty()) {
            throw new UsernameNotFoundException(MessageFormat.format("User with username {0} not found", username));
        }

        // Retorna o usuário encontrado. Como Optional.get() é chamado, o usuário deve estar presente
        return userOptional.get();
    }
}