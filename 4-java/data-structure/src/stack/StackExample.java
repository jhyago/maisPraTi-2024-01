package stack;

// Classe Node que representa um elemento da pilha.
class Node {
    int data; // Dado armazenado no nó.
    Node next; // Referência ao próximo nó na pilha.

    // Construtor da classe Node que inicializa os dados e a referência ao próximo nó.
    public Node(int data){
        this.data = data;
        this.next = null; // Inicialmente, o próximo nó é nulo.
    }
}

// Classe StackExample que implementa uma pilha usando nós encadeados.
public class StackExample {
    private Node top; // Referência para o topo da pilha.

    // Construtor da classe StackExample que inicializa a pilha vazia.
    public StackExample(){
        this.top = null; // O topo é nulo quando a pilha é criada.
    }

    // Método push para empilhar (adicionar) um novo nó no topo.
    public void push(int data){
        Node newNode = new Node(data); // Cria um novo nó com o dado fornecido.
        newNode.next = this.top; // O próximo do novo nó aponta para o nó atual no topo.
        this.top = newNode; // Atualiza o topo para ser o novo nó.
    }

    // Método pop para desempilhar (remover) o nó do topo e retornar seu dado.
    public int pop(){
        if(isEmpty()){ // Verifica se a pilha está vazia antes de tentar desempilhar.
            throw new RuntimeException("Stack is empty"); // Lança uma exceção se a pilha estiver vazia.
        }

        int poppedData = this.top.data; // Armazena o dado do nó do topo.
        this.top = this.top.next; // Atualiza o topo para o próximo nó na pilha.

        return poppedData; // Retorna o dado do nó desempilhado.
    }

    // Método peek para visualizar o dado do nó do topo sem removê-lo.
    public int peek(){
        if(isEmpty()){ // Verifica se a pilha está vazia antes de tentar visualizar.
            throw new RuntimeException("Stack is empty"); // Lança uma exceção se a pilha estiver vazia.
        }

        return this.top.data; // Retorna o dado do nó no topo.
    }

    // Método isEmpty para verificar se a pilha está vazia.
    public boolean isEmpty(){
        return top == null; // Retorna true se o topo for nulo (pilha vazia).
    }
}