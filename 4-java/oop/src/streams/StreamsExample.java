package streams; // Define o pacote onde a classe está localizada.

import java.util.Arrays; // Importa a classe Arrays, que fornece métodos utilitários para trabalhar com arrays.
import java.util.List; // Importa a interface List, que representa uma lista ordenada.
import java.util.stream.Collectors; // Importa a classe Collectors, que contém implementações de coletores usados em streams.

public class StreamsExample { // Declaração da classe pública StreamsExample.
    public static void main(String[] args) { // Método principal que serve como ponto de entrada do programa.
        // Cria uma lista de inteiros contendo os números de 1 a 10.
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // Cria uma stream a partir da lista de números, filtra apenas os números pares,
        // multiplica cada número par por 2, e coleta o resultado em uma nova lista.
        List<Integer> evenNumbers = numbers.stream()
                .filter(n -> n % 2 == 0) // Filtra apenas os números que são divisíveis por 2 (números pares).
                .map(n -> n * 2) // Multiplica cada número par por 2.
                .toList(); // Coleta os resultados em uma lista.

        // Imprime a lista de números pares multiplicados por 2.
        System.out.println(evenNumbers);

        // Cria uma lista de strings com vários nomes.
        List<String> names = Arrays.asList("Sherlock", "Tony", "Bruce", "Murdock", "Aang", "Logan", "Bilbo");

        // Usa a stream para somar todos os números da lista.
        int sum = numbers.stream().reduce(0, Integer::sum); // O método reduce acumula os valores da stream, começando em 0, somando cada número.

        // Imprime a soma de todos os números da lista.
        System.out.println("Soma: " + sum);

        // Cria uma stream a partir da lista de nomes, converte cada nome para letras maiúsculas,
        // e imprime cada nome em maiúsculas.
        names.stream().map(String::toUpperCase).forEach(System.out::println); // O método forEach aplica a operação de imprimir (System.out::println) em cada nome.
    }
}