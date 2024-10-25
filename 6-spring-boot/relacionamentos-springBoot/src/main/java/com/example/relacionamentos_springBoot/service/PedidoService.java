package com.example.relacionamentos_springBoot.service; // Define o pacote onde a classe PedidoService está localizada

import com.example.relacionamentos_springBoot.model.Pedido; // Importa a classe Pedido do pacote model
import com.example.relacionamentos_springBoot.repository.PedidoRepository; // Importa a interface PedidoRepository para operações de persistência
import org.springframework.beans.factory.annotation.Autowired; // Importa a anotação @Autowired para injeção de dependências
import org.springframework.stereotype.Service; // Importa a anotação @Service para definir a classe como um serviço do Spring

import java.util.List; // Importa a classe List para retornar uma lista de pedidos

@Service // Indica que esta classe é um serviço e permite que o Spring gerencie a injeção de dependência
public class PedidoService { // Declara a classe PedidoService

    @Autowired // Injeta automaticamente uma instância de PedidoRepository
    private PedidoRepository pedidoRepository; // Declara uma variável de PedidoRepository para acessar os métodos de persistência

    public Pedido salvarPedidoComProdutos(Pedido pedido) { // Método para salvar um pedido junto com os produtos associados
        return pedidoRepository.save(pedido); // Salva o pedido no banco de dados e retorna o pedido salvo
    }

    public List<Pedido> listarPedidos(){ // Método para listar todos os pedidos
        return pedidoRepository.findAll(); // Retorna uma lista de todos os pedidos do banco de dados
    }

    public Pedido buscarPedido(Long id) { // Método para buscar um pedido pelo ID
        return pedidoRepository.findById(id).orElse(null); // Busca o pedido pelo ID e retorna nulo se não for encontrado
    }
}