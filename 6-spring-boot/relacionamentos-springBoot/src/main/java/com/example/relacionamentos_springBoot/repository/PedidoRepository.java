package com.example.relacionamentos_springBoot.repository; // Define o pacote onde a interface PedidoRepository está localizada

import com.example.relacionamentos_springBoot.model.Pedido; // Importa a classe Pedido do pacote model
import org.springframework.data.jpa.repository.JpaRepository; // Importa a interface JpaRepository para uso com Pedido

public interface PedidoRepository extends JpaRepository<Pedido, Long> {} // Define uma interface PedidoRepository que herda de JpaRepository para realizar operações CRUD na entidade Pedido