package com.example.relacionamentos_springBoot.model; // Define o pacote onde a classe Conta está localizada

import jakarta.persistence.*; // Importa as anotações para mapeamento JPA
import lombok.Data; // Importa a anotação @Data da biblioteca Lombok para gerar automaticamente getters, setters, equals, hashCode e toString

@Entity // Indica que a classe Conta é uma entidade JPA
@Data // Gera automaticamente métodos básicos como getters, setters, equals, hashCode e toString
public class Conta { // Declara a classe Conta

    @Id // Define o campo 'id' como chave primária da entidade
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Define que o 'id' será gerado automaticamente pelo banco de dados
    private Long id; // Campo de identificação única para cada conta

    private String numero; // Campo para armazenar o número da conta
}