package threads; // Define o pacote onde a classe está localizada.

public class MyThread extends Thread { // Declaração da classe MyThread que estende a classe Thread.

    @Override // Sobrescreve o método run() da classe Thread.
    public void run() {
        // Método que será executado quando a thread for iniciada.
        System.out.println("Thread em Execução!"); // Imprime uma mensagem indicando que a thread está em execução.
    }

    public static void main(String[] args) { // Método principal que serve como ponto de entrada do programa.
        // Cria uma nova instância de MyThread.
        MyThread t1 = new MyThread();
        // Inicia a execução da thread. Isso chama o método run() da instância MyThread.
        t1.start();
    }
}