package com.example.toDoApp.controller;  // Define o pacote para a classe TaskController

import com.example.toDoApp.model.Task;  // Importa o modelo Task para uso no controlador
import com.example.toDoApp.respository.TaskRepository;  // Importa o repositório TaskRepository para interagir com o banco de dados
import org.springframework.beans.factory.annotation.Autowired;  // Importa a anotação Autowired para injeção de dependência
import org.springframework.http.ResponseEntity;  // Importa ResponseEntity para retorno de respostas HTTP
import org.springframework.web.bind.annotation.*;  // Importa anotações do Spring para definir endpoints RESTful

import java.util.List;  // Importa a classe List para trabalhar com listas de tarefas
import java.util.Optional;  // Importa a classe Optional para lidar com a possibilidade de não encontrar uma tarefa

@RestController  // Indica que a classe é um controlador REST e que os métodos retornarão dados no formato JSON
@RequestMapping("/api/tasks")  // Define a rota base "/api/tasks" para todos os endpoints deste controlador
public class TaskController {
    @Autowired  // Injeta automaticamente uma instância de TaskRepository
    private TaskRepository taskRepository;

    @GetMapping  // Define um endpoint GET para listar todas as tarefas
    public List<Task> getAllTasks() {
        return taskRepository.findAll();  // Retorna todas as tarefas do banco de dados
    }

    @PostMapping  // Define um endpoint POST para criar uma nova tarefa
    public Task createTask(@RequestBody Task task){
        return taskRepository.save(task);  // Salva a nova tarefa no banco de dados e a retorna
    }

    @PutMapping("/{id}")  // Define um endpoint PUT para atualizar uma tarefa existente com base no ID
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task taskDetails){
        Optional<Task> taskOptional = taskRepository.findById(id);  // Busca a tarefa pelo ID, retornando um Optional
        if(taskOptional.isPresent()){  // Verifica se a tarefa foi encontrada
            Task task = taskOptional.get();  // Obtém a tarefa do Optional
            task.setTitle(taskDetails.getTitle());  // Atualiza o título da tarefa com os novos dados
            task.setCompleted(taskDetails.isCompleted());  // Atualiza o status de conclusão da tarefa
            taskRepository.save(task);  // Salva a tarefa atualizada no banco de dados
            return ResponseEntity.ok(task);  // Retorna a tarefa atualizada com o status HTTP 200 (OK)
        }

        return ResponseEntity.notFound().build();  // Retorna um status HTTP 404 (Not Found) se a tarefa não for encontrada
    }

    @DeleteMapping("/{id}")  // Define um endpoint DELETE para excluir uma tarefa com base no ID
    public ResponseEntity<Void> deleteTask(@PathVariable Long id){
        if(taskRepository.existsById(id)){  // Verifica se a tarefa com o ID fornecido existe
            taskRepository.deleteById(id);  // Exclui a tarefa do banco de dados
            return ResponseEntity.ok().build();  // Retorna um status HTTP 200 (OK) se a exclusão for bem-sucedida
        }

        return ResponseEntity.notFound().build();  // Retorna um status HTTP 404 (Not Found) se a tarefa não for encontrada
    }
}