package com.example.apiTestes; // Define o pacote onde a classe está localizada, ajudando na organização do projeto.

import com.example.apiTestes.controller.UserController; // Importa o controlador de usuários para ser testado.
import com.example.apiTestes.model.User; // Importa o modelo de usuário que será usado nos testes.
import com.example.apiTestes.service.UserService; // Importa o serviço de usuário, que será simulado no teste.
import org.junit.jupiter.api.Test; // Importa a anotação @Test para definir um método de teste.
import com.fasterxml.jackson.databind.ObjectMapper; // Importa o ObjectMapper para converter objetos em JSON.
import org.junit.jupiter.api.extension.ExtendWith; // Importa a anotação para usar uma extensão do JUnit 5.
import org.mockito.InjectMocks; // Importa a anotação @InjectMocks para injetar mocks no controlador.
import org.springframework.beans.factory.annotation.Autowired; // Importa a anotação @Autowired para injeção de dependência automática.
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest; // Importa a anotação para configurar o teste focado no Web MVC do Spring.
import org.springframework.boot.test.mock.mockito.MockBean; // Importa a anotação @MockBean para simular a camada de serviço.
import org.springframework.test.context.junit.jupiter.SpringExtension; // Importa o SpringExtension para integrar o Spring com o JUnit 5.
import org.springframework.test.web.servlet.MockMvc; // Importa o MockMvc para realizar requisições HTTP simuladas.
import org.springframework.http.MediaType; // Importa o MediaType para definir o tipo de conteúdo esperado nas respostas.

import static org.mockito.Mockito.*; // Importa métodos estáticos do Mockito para criar simulações e verificações.
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*; // Importa métodos estáticos para construir requisições HTTP simuladas.
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*; // Importa métodos estáticos para verificar o resultado das respostas HTTP simuladas.

import java.util.List; // Importa a classe List para manipular listas.

@ExtendWith(SpringExtension.class) // Configura o teste para rodar com o SpringExtension, que integra o Spring com o JUnit 5.
@WebMvcTest(UserController.class) // Configura o teste para focar no UserController, ignorando outras dependências.
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc; // Injeta o MockMvc para realizar requisições simuladas aos endpoints.

    @MockBean
    private UserService userService; // Simula o UserService, permitindo que as dependências do UserController sejam mockadas.

    @InjectMocks
    private UserController userController; // Injeta os mocks criados na instância do UserController para que ele seja testado.

    private final ObjectMapper objectMapper = new ObjectMapper(); // Cria um ObjectMapper para conversões entre objetos Java e JSON.

    @Test
    public void testGetAllUsers() throws Exception {
        // Cria um objeto User com atributos para ser retornado pelo serviço simulado.
        User user = new User();
        user.setId(1L); // Define o ID do usuário para o valor 1.
        user.setName("Seya"); // Define o nome do usuário.
        user.setEmail("seya@teste.com"); // Define o email do usuário.

        // Configura o comportamento simulado do userService, para retornar uma lista contendo o usuário criado.
        when(userService.getAllUsers()).thenReturn(List.of(user));

        // Realiza uma requisição GET ao endpoint "/users" e verifica as respostas:
        mockMvc.perform(get("/users"))
                .andExpect(status().isOk()) // Verifica se o status da resposta é 200 (OK).
                .andExpect(content().contentType(MediaType.APPLICATION_JSON)) // Verifica se o tipo de conteúdo da resposta é JSON.
                .andExpect(jsonPath("$[0].name").value("Seya")) // Verifica se o nome do primeiro usuário na resposta é "Seya".
                .andExpect(jsonPath("$[0].email").value("seya@teste.com")); // Verifica se o email do primeiro usuário na resposta é "seya@teste.com".
    }
}