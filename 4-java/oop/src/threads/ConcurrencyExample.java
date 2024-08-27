package threads; // Define o pacote onde a classe está localizada.

import java.util.concurrent.ExecutorService; // Importa a interface ExecutorService, que gerencia a execução de tarefas assíncronas.
import java.util.concurrent.Executors; // Importa a classe Executors, que contém métodos estáticos para criar pools de threads.

public class ConcurrencyExample { // Declaração da classe pública ConcurrencyExample.
    public static void main(String[] args) { // Método principal que serve como ponto de entrada do programa.
        // Cria um pool de threads fixo com 2 threads usando o ExecutorService.
        ExecutorService executor = Executors.newFixedThreadPool(2);

        // Define a primeira tarefa como uma expressão lambda (Runnable) que imprime números de 1 a 5.
        Runnable task1 = () -> {
            for(int i = 1; i <= 5; i++){ // Loop de 1 a 5.
                System.out.println("Task 1 - Number: " + i); // Imprime o número atual da tarefa 1.
                try {
                    Thread.sleep(1000); // Faz a thread dormir por 1 segundo (1000 milissegundos).
                } catch (InterruptedException error){ // Captura a exceção caso a thread seja interrompida durante o sono.
                    error.printStackTrace(); // Imprime a pilha de erros no console.
                }
            }
        };

        // Define a segunda tarefa como uma expressão lambda (Runnable) que imprime letras de 'A' a 'E'.
        Runnable task2 = () -> {
            for(char c = 'A'; c <= 'E'; c++){ // Loop de 'A' a 'E'.
                System.out.println("Task 2 - Letter: " + c); // Imprime a letra atual da tarefa 2.
                try {
                    Thread.sleep(1000); // Faz a thread dormir por 1 segundo (1000 milissegundos).
                } catch (InterruptedException error){ // Captura a exceção caso a thread seja interrompida durante o sono.
                    error.printStackTrace(); // Imprime a pilha de erros no console.
                }
            }
        };

        // Submete a primeira tarefa (task1) para execução no pool de threads.
        executor.submit(task1);
        // Submete a segunda tarefa (task2) para execução no pool de threads.
        executor.submit(task2);

        // Inicia o processo de desligamento do pool de threads após a conclusão das tarefas submetidas.
        executor.shutdown();
    }
}