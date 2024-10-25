package com.example.relacionamentos_springBoot.repository; // Define o pacote onde a interface ProdutoRepository está localizada

import com.example.relacionamentos_springBoot.model.Produto; // Importa a classe Produto do pacote model
import org.springframework.data.jpa.repository.JpaRepository; // Importa a interface JpaRepository para uso com Produto

public interface ProdutoRepository extends JpaRepository<Produto, Long> {} // Define uma interface ProdutoRepository que herda de JpaRepository para realizar operações CRUD na entidade Produto