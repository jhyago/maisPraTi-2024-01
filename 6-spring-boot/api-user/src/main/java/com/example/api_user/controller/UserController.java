// Define o pacote ao qual essa classe pertence
package com.example.api_user.controller;

// Importa as anotações e classes necessárias do Spring e outras bibliotecas
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.api_user.service.UserService;
import com.example.api_user.dto.UserDTO;

import java.util.List;

// Anotação @RestController:
// - Combina @Controller e @ResponseBody.
// - Indica que esta classe é um controlador no Spring MVC, que lida com requisições HTTP.
// - Todos os métodos retornam objetos diretamente, que serão serializados para JSON ou XML, dependendo do cabeçalho da requisição.
// - Essencialmente, o Spring converte automaticamente o retorno dos métodos em dados JSON ou XML (geralmente JSON em APIs REST).
@RestController

// Anotação @RequestMapping("/api/users"):
// - Define um caminho base para todas as requisições que esta classe vai manipular.
// - Neste caso, o caminho base é "/api/users", o que significa que todas as URLs que acessam este controlador devem começar com "/api/users".
// - Esse caminho pode ser refinado em cada método.
@RequestMapping("/api/users")
public class UserController {

    // Anotação @Autowired:
    // - Spring gerencia a criação e injeção dessa instância de UserService automaticamente.
    // - O @Autowired indica ao Spring que essa variável (userService) será injetada automaticamente, sem necessidade de instanciá-la manualmente.
    // - O UserService aqui é o responsável por implementar a lógica de negócios, e o controlador só repassa as requisições para ele.
    @Autowired
    private UserService userService;

    // Anotação @GetMapping:
    // - Mapeia requisições HTTP GET para este método.
    // - O caminho associado a este método é o definido por @RequestMapping na classe, ou seja, "/api/users".
    // - A operação GET é usada geralmente para obter dados sem modificá-los.
    @GetMapping
    public List<UserDTO> getAllUsers() {
        // O método `getAllUsers()` no serviço é chamado para obter a lista de todos os usuários.
        // A lista de objetos UserDTO será convertida em JSON pelo Spring e enviada como resposta.
        return userService.getAllUsers();
    }

    // Anotação @GetMapping("/{id}"):
    // - Mapeia uma requisição HTTP GET que inclui um parâmetro dinâmico na URL.
    // - O parâmetro dinâmico "{id}" será extraído da URL e passado como argumento para o método, graças à anotação @PathVariable.
    @GetMapping("/{id}")

    // Anotação @PathVariable:
    // - Associa o valor do parâmetro dinâmico na URL ao argumento `id` do método.
    // - Por exemplo, se a URL for "/api/users/5", o valor `5` será capturado e passado para o parâmetro `id`.
    public ResponseEntity<UserDTO> getUserById(@PathVariable int id) {
        // Busca o usuário pelo ID fornecido, chamando o método `getUserById` no serviço.
        UserDTO userDTO = userService.getUserById(id);

        // O ResponseEntity encapsula a resposta HTTP e nos permite definir o corpo e o código de status.
        // - ResponseEntity.ok(userDTO): Retorna o corpo da resposta com o objeto `userDTO` e o código de status HTTP 200 (OK).
        // - ResponseEntity.notFound().build(): Retorna uma resposta sem corpo e com o código de status 404 (Not Found) se o usuário não for encontrado.
        return userDTO != null ? ResponseEntity.ok(userDTO) : ResponseEntity.notFound().build();
    }

    // Anotação @PostMapping:
    // - Mapeia requisições HTTP POST para este método.
    // - O POST é utilizado para criar novos recursos, neste caso, um novo usuário.
    @PostMapping

    // Anotação @RequestBody:
    // - Indica que o corpo da requisição HTTP deve ser convertido para um objeto Java (UserDTO neste caso).
    // - O Spring faz a conversão automática de JSON para o tipo especificado (UserDTO) com base no corpo da requisição.
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        // Chama o serviço para criar um novo usuário e retorna o objeto UserDTO criado.
        // O Spring converte automaticamente o objeto UserDTO retornado para JSON, que será o corpo da resposta HTTP.
        return userService.createUser(userDTO);
    }

    // Anotação @PutMapping("/{id}"):
    // - Mapeia requisições HTTP PUT para este método.
    // - O PUT é utilizado para atualizar recursos existentes, neste caso, atualizar um usuário pelo ID.
    @PutMapping("/{id}")

    public ResponseEntity<UserDTO> updateUser(@PathVariable int id, @RequestBody UserDTO userDTO) {
        // O método do serviço é chamado para atualizar o usuário com base no ID fornecido.
        UserDTO updateUser = userService.updateUser(id, userDTO);

        // Se a atualização for bem-sucedida (ou seja, se `updateUser` não for nulo), retorna o usuário atualizado com o código de status HTTP 200 (OK).
        // Caso contrário, retorna uma resposta com status HTTP 404 (Not Found) para indicar que o usuário com o ID fornecido não foi encontrado.
        return updateUser != null ? ResponseEntity.ok(updateUser) : ResponseEntity.notFound().build();
    }

    // Anotação @DeleteMapping("/{id}"):
    // - Mapeia requisições HTTP DELETE para este método.
    // - O DELETE é utilizado para excluir um recurso, neste caso, um usuário pelo ID.
    @DeleteMapping("/{id}")

    public ResponseEntity<Void> deleteUser(@PathVariable int id) {
        // Chama o serviço para excluir o usuário com base no ID fornecido.
        userService.deleteUser(id);

        // ResponseEntity.noContent().build():
        // - Retorna uma resposta HTTP sem corpo com o código de status 204 (No Content).
        // - O código 204 indica que a operação foi bem-sucedida, mas que não há dados a serem retornados no corpo da resposta.
        return ResponseEntity.noContent().build();
    }
}
