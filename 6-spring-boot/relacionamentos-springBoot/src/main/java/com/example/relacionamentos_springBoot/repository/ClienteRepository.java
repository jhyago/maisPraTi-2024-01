package com.example.relacionamentos_springBoot.repository;

import com.example.relacionamentos_springBoot.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}

