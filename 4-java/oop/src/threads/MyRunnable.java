package threads; // Define o pacote onde a classe está localizada.

public class MyRunnable implements Runnable { // Declaração da classe MyRunnable que implementa a interface Runnable.

    @Override // Sobrescreve o método run() da interface Runnable.
    public void run() {
        // Método que será executado quando a thread for iniciada.
        System.out.println("Thread em execução"); // Imprime uma mensagem indicando que a thread está em execução.
    }

    public static void main(String[] args) { // Método principal que serve como ponto de entrada do programa.
        // Cria uma nova instância de Thread, passando uma instância de MyRunnable como alvo da execução da thread.
        Thread t1 = new Thread(new MyRunnable());
        // Inicia a execução da thread. Isso chama o método run() de MyRunnable.
        t1.start();
    }
}