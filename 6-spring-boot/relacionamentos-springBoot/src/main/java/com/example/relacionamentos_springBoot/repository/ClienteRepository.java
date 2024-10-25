package com.example.relacionamentos_springBoot.repository; // Define o pacote onde a interface ClienteRepository está localizada

import com.example.relacionamentos_springBoot.model.Cliente; // Importa a classe Cliente do pacote model
import org.springframework.data.jpa.repository.JpaRepository; // Importa a interface JpaRepository para uso com Cliente

public interface ClienteRepository extends JpaRepository<Cliente, Long> { } // Define uma interface ClienteRepository que herda de JpaRepository para realizar operações CRUD na entidade Cliente
