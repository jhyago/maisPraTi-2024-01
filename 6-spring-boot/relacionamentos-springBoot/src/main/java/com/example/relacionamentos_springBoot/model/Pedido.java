package com.example.relacionamentos_springBoot.model; // Define o pacote onde a classe Pedido está localizada

import jakarta.persistence.*; // Importa as anotações para mapeamento JPA
import lombok.Data; // Importa a anotação @Data da biblioteca Lombok para gerar automaticamente getters, setters, equals, hashCode e toString

import java.util.List; // Importa a classe List para criar uma lista de produtos

@Entity // Indica que a classe Pedido é uma entidade JPA
@Data // Gera automaticamente métodos básicos como getters, setters, equals, hashCode e toString
public class Pedido { // Declara a classe Pedido

    @Id // Define o campo 'id' como chave primária da entidade
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Define que o 'id' será gerado automaticamente pelo banco de dados
    private Long id; // Campo de identificação única para cada pedido

    private String descricao; // Campo para armazenar a descrição do pedido

    @OneToMany(mappedBy = "pedido", cascade = CascadeType.ALL, orphanRemoval = true) // Define um relacionamento um-para-muitos com a entidade Produto
    private List<Produto> produtos; // Lista de produtos associados ao pedido
}