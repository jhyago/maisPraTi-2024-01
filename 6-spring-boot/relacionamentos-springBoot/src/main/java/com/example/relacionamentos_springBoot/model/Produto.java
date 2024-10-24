package com.example.relacionamentos_springBoot.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.boot.web.reactive.context.GenericReactiveWebApplicationContext;

@Entity
@Data
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private Double preco;

    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;
}
