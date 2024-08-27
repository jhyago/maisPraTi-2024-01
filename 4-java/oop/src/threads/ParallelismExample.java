package threads; // Define o pacote onde a classe está localizada.

import java.util.List; // Importa a interface List, que representa uma lista ordenada.
import java.util.concurrent.ForkJoinPool; // Importa a classe ForkJoinPool, usada para gerenciar tarefas de paralelismo.

public class ParallelismExample { // Declaração da classe pública ParallelismExample.
    public static void main(String[] args) { // Método principal que serve como ponto de entrada do programa.
        // Cria uma lista de inteiros contendo os números de 1 a 5.
        List<Integer> numbers = List.of(1, 2, 3, 4, 5);

        // Cria um pool ForkJoinPool com o número de threads igual ao número de processadores disponíveis no sistema.
        ForkJoinPool forkJoinPool = new ForkJoinPool(Runtime.getRuntime().availableProcessors());

        // Submete uma tarefa ao ForkJoinPool usando uma expressão lambda.
        forkJoinPool.submit(() -> {
            // Cria um parallelStream a partir da lista de números e processa cada número em paralelo.
            numbers.parallelStream().forEach(number -> {
                // Imprime o número sendo processado junto com o nome da thread que está executando a tarefa.
                System.out.println("Número sendo processado: " + number + " - " + Thread.currentThread().getName());
                try {
                    // Faz a thread dormir por 1 segundo (1000 milissegundos).
                    Thread.sleep(1000);
                } catch (InterruptedException error) { // Captura a exceção caso a thread seja interrompida durante o sono.
                    error.printStackTrace(); // Imprime a pilha de erros no console.
                }
            });
        }).join(); // Aguarda a conclusão da tarefa submetida antes de continuar.

        // Inicia o processo de desligamento do ForkJoinPool após a conclusão das tarefas.
        forkJoinPool.shutdown();
    }
}