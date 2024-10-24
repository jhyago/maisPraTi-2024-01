package com.example.relacionamentos_springBoot.repository;

import com.example.relacionamentos_springBoot.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
