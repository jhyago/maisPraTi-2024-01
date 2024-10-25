package com.example.relacionamentos_springBoot.controller; // Define o pacote onde a classe ClienteController está localizada

import com.example.relacionamentos_springBoot.model.Cliente; // Importa a classe Cliente do pacote model
import com.example.relacionamentos_springBoot.service.ClienteService; // Importa a classe ClienteService do pacote service
import org.springframework.beans.factory.annotation.Autowired; // Importa a anotação @Autowired para injeção de dependências
import org.springframework.http.ResponseEntity; // Importa a classe ResponseEntity para manipular respostas HTTP
import org.springframework.web.bind.annotation.*; // Importa anotações de mapeamento de rotas para o controller

@RestController // Indica que esta classe é um controlador REST
@RequestMapping("/clientes") // Define o endpoint base para as requisições como "/clientes"
public class ClienteController { // Declara a classe ClienteController

    @Autowired // Injeta uma instância de ClienteService automaticamente
    private ClienteService clienteService; // Declara uma variável de ClienteService para acessar os métodos de serviço

    @PostMapping // Mapeia requisições POST para o endpoint "/clientes"
    public ResponseEntity<Cliente> criarCliente(@RequestBody Cliente cliente) { // Método para criar um cliente, recebendo um objeto Cliente no corpo da requisição
        Cliente clienteSalvo = clienteService.salvarClienteComConta(cliente); // Chama o serviço para salvar o cliente com conta associada
        return ResponseEntity.ok(clienteSalvo); // Retorna uma resposta HTTP 200 com o cliente salvo no corpo da resposta
    }

    @GetMapping("/{id}") // Mapeia requisições GET para "/clientes/{id}"
    public ResponseEntity<Cliente> buscarCliente(@PathVariable Long id) { // Método para buscar um cliente pelo ID
        Cliente cliente = clienteService.buscarCliente(id); // Chama o serviço para buscar o cliente pelo ID
        if (cliente != null) { // Verifica se o cliente foi encontrado
            return ResponseEntity.ok(cliente); // Retorna uma resposta HTTP 200 com o cliente encontrado no corpo da resposta
        } else {
            return ResponseEntity.notFound().build(); // Retorna uma resposta HTTP 404 se o cliente não for encontrado
        }
    }
}