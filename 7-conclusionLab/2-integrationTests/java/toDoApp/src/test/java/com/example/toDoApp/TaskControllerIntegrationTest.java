package com.example.toDoApp;  // Define o pacote onde a classe de teste TaskControllerIntegrationTest está localizada

import com.example.toDoApp.model.Task;  // Importa o modelo Task para criação de instâncias nas requisições de teste
import com.example.toDoApp.respository.TaskRepository;  // Importa o repositório TaskRepository para manipular tarefas diretamente no banco de dados durante os testes
import com.fasterxml.jackson.databind.ObjectMapper;  // Importa o ObjectMapper para converter objetos Java para JSON
import org.junit.jupiter.api.BeforeEach;  // Importa a anotação BeforeEach para definir um método a ser executado antes de cada teste
import org.junit.jupiter.api.Test;  // Importa a anotação Test para definir métodos de teste
import org.springframework.beans.factory.annotation.Autowired;  // Importa a anotação Autowired para injeção de dependência
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;  // Habilita a configuração automática do MockMvc para testes de integração
import org.springframework.boot.test.context.SpringBootTest;  // Define a classe como um teste de integração de contexto Spring Boot
import org.springframework.http.MediaType;  // Importa MediaType para definir o tipo de conteúdo das requisições
import org.springframework.test.web.servlet.MockMvc;  // Importa MockMvc para simular requisições HTTP

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;  // Importa métodos estáticos para verificar resultados de testes
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;  // Importa métodos estáticos para construir requisições HTTP

@SpringBootTest  // Anotação que carrega o contexto completo da aplicação para testes
@AutoConfigureMockMvc  // Anotação que configura o MockMvc automaticamente
public class TaskControllerIntegrationTest {

    @Autowired  // Injeta uma instância do MockMvc para simular requisições HTTP
    private MockMvc mockMvc;

    @Autowired  // Injeta uma instância do TaskRepository para manipular o banco de dados diretamente
    private TaskRepository taskRepository;

    @Autowired  // Injeta uma instância do ObjectMapper para converter objetos Java em JSON
    private ObjectMapper objectMapper;

    @BeforeEach  // Define o método setup para ser executado antes de cada teste
    public void setup(){
        taskRepository.deleteAll();  // Limpa o repositório antes de cada teste, garantindo que cada teste seja independente
    }

    @Test  // Define um teste para verificar se todas as tarefas são retornadas corretamente
    public void deveRetornarTodasAsTarefas() throws Exception {
        Task task = new Task("Test Task", false);  // Cria uma nova tarefa
        taskRepository.save(task);  // Salva a tarefa no banco de dados

        // Simula uma requisição GET para "/api/tasks" e verifica se a resposta tem status 200 (OK)
        // e se o título da primeira tarefa corresponde a "Test Task"
        mockMvc.perform(get("/api/tasks"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value("Test Task"));
    }

    @Test  // Define um teste para verificar a criação de uma nova tarefa
    public void deveCriarUmaNovaTarefa() throws Exception {
        Task task = new Task("New Task", false);  // Cria uma nova tarefa

        // Simula uma requisição POST para "/api/tasks" com o conteúdo JSON da nova tarefa
        // e verifica se a resposta tem status 200 (OK) e se o título corresponde a "New Task"
        mockMvc.perform(post("/api/tasks")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(task)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("New Task"));
    }

    @Test  // Define um teste para verificar a atualização de uma tarefa existente
    public void deveAtualizarUmaTarefaExistente() throws Exception {
        Task task = new Task("Task to Update", false);  // Cria uma tarefa inicial
        Task savedTask = taskRepository.save(task);  // Salva a tarefa inicial no banco de dados

        Task updatedTask = new Task("Updated Task", true);  // Cria uma nova tarefa com os dados atualizados

        // Simula uma requisição PUT para "/api/tasks/{id}" com o conteúdo JSON da tarefa atualizada
        // e verifica se a resposta tem status 200 (OK), se o título foi atualizado e se o status de conclusão é verdadeiro
        mockMvc.perform(put("/api/tasks/" + savedTask.getId())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updatedTask)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Updated Task"))
                .andExpect(jsonPath("$.completed").value(true));
    }

    @Test  // Define um teste para verificar a exclusão de uma tarefa existente
    public void deveDeletarUmaTarefaExistente() throws Exception {
        Task task = new Task("Task to Delete", false);  // Cria uma tarefa para exclusão
        Task savedTask = taskRepository.save(task);  // Salva a tarefa no banco de dados

        // Simula uma requisição DELETE para "/api/tasks/{id}" e verifica se a resposta tem status 200 (OK)
        mockMvc.perform(delete("/api/tasks/" + savedTask.getId()))
                .andExpect(status().isOk());
    }
}