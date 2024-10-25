package com.example.relacionamentos_springBoot.controller; // Define o pacote onde a classe PedidoController está localizada

import com.example.relacionamentos_springBoot.model.Pedido; // Importa a classe Pedido do pacote model
import com.example.relacionamentos_springBoot.service.PedidoService; // Importa a classe PedidoService do pacote service
import org.springframework.beans.factory.annotation.Autowired; // Importa a anotação @Autowired para injeção de dependências
import org.springframework.http.ResponseEntity; // Importa a classe ResponseEntity para manipular respostas HTTP
import org.springframework.web.bind.annotation.*; // Importa anotações de mapeamento de rotas para o controller

import java.util.List; // Importa a classe List para trabalhar com listas de pedidos

@RestController // Indica que esta classe é um controlador REST
@RequestMapping("/pedidos") // Define o endpoint base para as requisições como "/pedidos"
public class PedidoController { // Declara a classe PedidoController

    @Autowired // Injeta uma instância de PedidoService automaticamente
    private PedidoService pedidoService; // Declara uma variável de PedidoService para acessar os métodos de serviço

    @PostMapping // Mapeia requisições POST para o endpoint "/pedidos"
    public ResponseEntity<Pedido> criarPedido(@RequestBody Pedido pedido) { // Método para criar um pedido, recebendo um objeto Pedido no corpo da requisição
        Pedido pedidoSalvo = pedidoService.salvarPedidoComProdutos(pedido); // Chama o serviço para salvar o pedido junto com seus produtos
        return ResponseEntity.ok(pedidoSalvo); // Retorna uma resposta HTTP 200 com o pedido salvo no corpo da resposta
    }

    @GetMapping // Mapeia requisições GET para "/pedidos"
    public ResponseEntity<List<Pedido>> listarPedidos(){ // Método para listar todos os pedidos
        List<Pedido> pedidos = pedidoService.listarPedidos(); // Chama o serviço para obter a lista de pedidos
        return ResponseEntity.ok(pedidos); // Retorna uma resposta HTTP 200 com a lista de pedidos no corpo da resposta
    }

    @GetMapping("/{id}") // Mapeia requisições GET para "/pedidos/{id}"
    public ResponseEntity<Pedido> buscarPedidoPorId(@PathVariable Long id){ // Método para buscar um pedido específico pelo ID
        Pedido pedido = pedidoService.buscarPedido(id); // Chama o serviço para buscar o pedido pelo ID
        if(pedido != null){ // Verifica se o pedido foi encontrado
            return ResponseEntity.ok(pedido); // Retorna uma resposta HTTP 200 com o pedido encontrado no corpo da resposta
        } else {
            return ResponseEntity.notFound().build(); // Retorna uma resposta HTTP 404 se o pedido não for encontrado
        }
    }
}