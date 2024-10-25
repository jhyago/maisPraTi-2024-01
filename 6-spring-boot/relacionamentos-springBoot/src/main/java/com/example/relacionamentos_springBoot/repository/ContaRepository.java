package com.example.relacionamentos_springBoot.repository; // Define o pacote onde a interface ContaRepository está localizada

import com.example.relacionamentos_springBoot.model.Conta; // Importa a classe Conta do pacote model
import org.springframework.data.jpa.repository.JpaRepository; // Importa a interface JpaRepository para uso com Conta

public interface ContaRepository extends JpaRepository<Conta, Long> {} // Define uma interface ContaRepository que herda de JpaRepository para realizar operações CRUD na entidade Conta