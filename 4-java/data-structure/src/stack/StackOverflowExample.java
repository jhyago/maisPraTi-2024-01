package stack;

public class StackOverflowExample {

    // Método que faz chamadas recursivas infinitas.
    public static void recursiveCall(){
        System.out.println("Chamando recursivamente"); // Imprime uma mensagem a cada chamada recursiva.
        recursiveCall(); // Chama o próprio método, gerando recursão infinita.
    }

    public static void main(String[] args) {
        try{
            // Tenta executar a chamada recursiva.
            recursiveCall();
        } catch(StackOverflowError error){
            // Captura o erro de StackOverflow quando o limite da pilha é excedido.
            System.err.println("StackOverflow detectado! " + error);
        }
    }
}
