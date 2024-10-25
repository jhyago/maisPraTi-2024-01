package com.example.relacionamentos_springBoot.model; // Define o pacote onde a classe Cliente está localizada

import jakarta.persistence.*; // Importa as anotações para mapeamento JPA
import lombok.Data; // Importa a anotação @Data da biblioteca Lombok para gerar automaticamente getters, setters, equals, hashCode e toString

@Entity // Indica que a classe Cliente é uma entidade JPA
@Data // Gera automaticamente métodos básicos como getters, setters, equals, hashCode e toString
public class Cliente { // Declara a classe Cliente

    @Id // Define o campo 'id' como chave primária da entidade
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Define que o 'id' será gerado automaticamente pelo banco de dados
    private Long id; // Campo de identificação única para cada cliente

    private String nome; // Campo para armazenar o nome do cliente

    @OneToOne(cascade = CascadeType.ALL) // Define um relacionamento um-para-um com a entidade Conta, com todas as operações em cascata
    @JoinColumn(name = "conta_id") // Especifica a coluna de junção "conta_id" na tabela de Cliente, usada para mapear o relacionamento com Conta
    private Conta conta; // Campo que representa a conta associada ao cliente
}