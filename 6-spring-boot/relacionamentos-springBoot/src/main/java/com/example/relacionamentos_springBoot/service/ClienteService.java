package com.example.relacionamentos_springBoot.service; // Define o pacote onde a classe ClienteService está localizada

import com.example.relacionamentos_springBoot.model.Cliente; // Importa a classe Cliente do pacote model
import com.example.relacionamentos_springBoot.repository.ClienteRepository; // Importa a interface ClienteRepository para operações de persistência
import org.springframework.beans.factory.annotation.Autowired; // Importa a anotação @Autowired para injeção de dependências
import org.springframework.stereotype.Service; // Importa a anotação @Service para definir a classe como um serviço do Spring

@Service // Indica que esta classe é um serviço e permite que o Spring gerencie a injeção de dependência
public class ClienteService { // Declara a classe ClienteService

    @Autowired // Injeta automaticamente uma instância de ClienteRepository
    private ClienteRepository clienteRepository; // Declara uma variável de ClienteRepository para acessar os métodos de persistência

    public Cliente salvarClienteComConta(Cliente cliente) { // Método para salvar um cliente junto com a conta associada
        return clienteRepository.save(cliente); // Salva o cliente no banco de dados e retorna o cliente salvo
    }

    public Cliente buscarCliente(Long id) { // Método para buscar um cliente pelo ID
        return clienteRepository.findById(id).orElse(null); // Busca o cliente pelo ID e retorna nulo se não for encontrado
    }
}