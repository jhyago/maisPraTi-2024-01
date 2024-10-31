// Define o pacote onde o controlador está localizado
package com.example.toDoAPI.controller;

// Importa as classes necessárias
import com.example.toDoAPI.model.TodoItem;
import com.example.toDoAPI.service.TodoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Define a classe como um controlador REST
@RestController
// Define o caminho base para as requisições desse controlador
@RequestMapping("/api/todos")
public class TodoController {
    
    // Injeta o serviço TodoService para manipular operações de tarefas
    @Autowired
    private TodoService todoService;

    // Define um endpoint GET para retornar todas as tarefas
    @Operation(summary = "Obter todas as tarefas", description = "Retorna todas as tarefas")
    @ApiResponse(responseCode = "200", description = "Estou utilizando Swagger")
    @GetMapping
    public List<TodoItem> getAllTodos() {
        // Chama o serviço para obter todas as tarefas e retorná-las
        return todoService.getAllTodos();
    }

    // Define um endpoint POST para criar uma nova tarefa
    @PostMapping
    public TodoItem createTodoItem(
        @Parameter(description = "Objeto que representa a tarefa") 
        @RequestBody TodoItem todoItem) {
        // Chama o serviço para salvar o novo item e retorná-lo
        return todoService.saveTodoItem(todoItem);
    }

    // Define um endpoint PUT para atualizar uma tarefa existente, com base no ID
    @PutMapping("/{id}")
    public ResponseEntity<TodoItem> updateTodoItem(
        @PathVariable Long id, 
        @RequestBody TodoItem todoItem) {
        // Verifica se a tarefa existe pelo ID e a atualiza se presente
        return todoService.getTodoById(id).map(existingTodo -> {
            existingTodo.setTitle(todoItem.getTitle());
            existingTodo.setDescription(todoItem.getDescription());
            existingTodo.setCompleted(todoItem.isCompleted());
            return ResponseEntity.ok(todoService.saveTodoItem(existingTodo));
        }).orElse(ResponseEntity.notFound().build()); // Retorna 404 se a tarefa não for encontrada
    }

    // Define um endpoint DELETE para excluir uma tarefa pelo ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodoItem(@PathVariable Long id) {
        // Verifica se a tarefa existe antes de excluí-la
        if(todoService.getTodoById(id).isPresent()){
            todoService.deleteTodoItem(id);
            return ResponseEntity.noContent().build(); // Retorna 204 se excluída com sucesso
        }
        return ResponseEntity.notFound().build(); // Retorna 404 se a tarefa não for encontrada
    }
}