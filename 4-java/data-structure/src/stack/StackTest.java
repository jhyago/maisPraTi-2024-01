package stack;

public class StackTest {
    public static void main(String[] args) {
        StackExample stack = new StackExample();

        stack.push(10);
        stack.push(100);
        stack.push(90);

        System.out.println("Elemento no topo: " + stack.peek());
        System.out.println("Elemento desimpilhado: " + stack.pop());
    }
}
