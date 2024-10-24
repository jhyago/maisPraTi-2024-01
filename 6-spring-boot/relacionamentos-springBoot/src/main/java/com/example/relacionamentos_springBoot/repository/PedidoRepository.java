package com.example.relacionamentos_springBoot.repository;

import com.example.relacionamentos_springBoot.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
