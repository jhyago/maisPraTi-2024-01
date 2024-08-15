package queue;
import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();

        queue.add(10);
        queue.add(30);
        queue.add(40);

        System.out.println("Elemento da frente da fila: " + queue.peek());

        System.out.println("Elemento removido: " + queue.poll());
    }
}
