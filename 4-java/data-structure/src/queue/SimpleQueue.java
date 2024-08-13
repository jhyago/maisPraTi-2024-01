package queue;

// Define uma classe pública chamada SimpleQueue.
public class SimpleQueue {

    // Declara dois atributos privados: first e last, ambos do tipo Node.
    private Node first;
    private Node last;

    // Construtor da classe SimpleQueue, inicializa first e last como null.
    public SimpleQueue(){
        this.first = null;
        this.last = null;
    }

    // Classe estática interna Node, usada para criar os nós da fila.
    private static class Node {
        int data; // Atributo que armazena o valor do nó.
        Node next; // Atributo que referencia o próximo nó na fila.

        // Construtor da classe Node que recebe um valor e o armazena em data.
        // Também inicializa next como null.
        public Node(int data){
            this.data = data;
            this.next = null;
        }
    }

    // Método para adicionar um novo elemento à fila (enfileirar).
    public void enqueue(int data){
        // Cria um novo nó com o valor fornecido.
        Node newNode = new Node(data);

        // Verifica se a fila está vazia (last é null).
        if(this.last == null){
            // Se a fila estiver vazia, both first e last apontam para o novo nó.
            this.first = newNode;
            this.last = newNode;
        } else {
            // Se a fila não estiver vazia, o próximo nó do último nó atual
            // é definido como o novo nó, e last é atualizado para o novo nó.
            this.last.next = newNode;
            this.last = newNode;
        }
    }

    // Método para remover e retornar o primeiro elemento da fila (desenfileirar).
    public int dequeue(){
        // Verifica se a fila está vazia.
        if(this.first == null){
            // Se a fila estiver vazia, lança uma exceção.
            throw new IllegalStateException("Fila vazia!");
        }

        // Armazena o valor do primeiro nó para retorno.
        int data = this.first.data;
        // Atualiza first para o próximo nó na fila.
        this.first = this.first.next;

        // Se após a remoção a fila estiver vazia, last também é atualizado para null.
        if (this.first == null) {
            this.last = null;
        }

        // Retorna o valor do nó removido.
        return data;
    }

    // Método para verificar se a fila está vazia.
    public boolean isEmpty(){
        // Retorna true se first for null, indicando que a fila está vazia.
        return this.first == null;
    }
}