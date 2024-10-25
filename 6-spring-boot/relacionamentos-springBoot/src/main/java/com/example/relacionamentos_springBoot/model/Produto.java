package com.example.relacionamentos_springBoot.model; // Define o pacote onde a classe Produto está localizada

import jakarta.persistence.*; // Importa as anotações para mapeamento JPA
import lombok.Data; // Importa a anotação @Data da biblioteca Lombok para gerar automaticamente getters, setters, equals, hashCode e toString

@Entity // Indica que a classe Produto é uma entidade JPA
@Data // Gera automaticamente métodos básicos como getters, setters, equals, hashCode e toString
public class Produto { // Declara a classe Produto

    @Id // Define o campo 'id' como chave primária da entidade
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Define que o 'id' será gerado automaticamente pelo banco de dados
    private Long id; // Campo de identificação única para cada produto

    private String nome; // Campo para armazenar o nome do produto
    private Double preco; // Campo para armazenar o preço do produto

    @ManyToOne // Define um relacionamento muitos-para-um com a entidade Pedido
    @JoinColumn(name = "pedido_id") // Especifica a coluna de junção "pedido_id" na tabela de Produto, usada para mapear o relacionamento com Pedido
    private Pedido pedido; // Campo que representa o pedido associado ao produto
}
