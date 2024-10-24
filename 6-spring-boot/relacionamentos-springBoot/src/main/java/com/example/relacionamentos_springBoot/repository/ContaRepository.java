package com.example.relacionamentos_springBoot.repository;

import com.example.relacionamentos_springBoot.model.Conta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContaRepository extends JpaRepository<Conta, Long> {
}
