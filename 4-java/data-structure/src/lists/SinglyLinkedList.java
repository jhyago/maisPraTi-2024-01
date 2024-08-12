package lists; // Define o pacote "lists", onde a classe está localizada.

public class SinglyLinkedList { // Define a classe pública "SinglyLinkedList".
    private Node head; // Declara uma referência privada para o primeiro nó (head) da lista.

    private static class Node { // Classe interna estática que define os nós da lista encadeada.
        int data; // Armazena o valor do nó.
        Node next; // Armazena a referência para o próximo nó na lista.

        public Node(int data){ // Construtor para inicializar o nó com um valor.
            this.data = data; // Define o valor do nó.
            this.next = null; // Inicializa a referência "next" como nula, indicando que este é o último nó.
        }
    }

    public SinglyLinkedList() { // Construtor da classe "SinglyLinkedList".
        this.head = null; // Inicializa a cabeça da lista como nula, indicando que a lista está vazia.
    }

    public void add(int data){ // Método público para adicionar um novo nó ao final da lista.
        Node newNode = new Node(data); // Cria um novo nó com o dado fornecido.
        if(this.head == null){ // Verifica se a lista está vazia.
            this.head = newNode; // Se estiver vazia, o novo nó se torna o primeiro nó (head).
        }
        else { // Se a lista não estiver vazia...
            Node current = this.head; // Começa do primeiro nó.
            while(current.next != null){ // Percorre a lista até encontrar o último nó.
                current = current.next; // Avança para o próximo nó.
            }
            current.next = newNode; // Adiciona o novo nó no final da lista.
        }
    }

    public int get(int index){ // Método público para acessar o valor de um nó em um índice específico.
        Node current = this.head; // Começa do primeiro nó.
        int count = 0; // Inicializa o contador de índices.

        while(current != null){ // Percorre a lista enquanto o nó atual não for nulo.
            if(count == index){ // Verifica se o índice atual corresponde ao índice desejado.
                return current.data; // Retorna o valor do nó no índice especificado.
            }
            count++; // Incrementa o contador de índices.
            current = current.next; // Avança para o próximo nó.
        }

        throw new IndexOutOfBoundsException("Index fora dos limites/inválido"); // Lança uma exceção se o índice estiver fora dos limites da lista.
    }

    public void remove(int index){ // Método público para remover um nó da lista com base em um índice específico.

        Node current = this.head; // Começa do primeiro nó.

        if(this.head == null){ // Verifica se a lista está vazia.
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido"); // Lança uma exceção se a lista estiver vazia.
        }

        if(index == 0){ // Verifica se o índice é 0 (remoção do primeiro nó).
            this.head = this.head.next; // O segundo nó se torna o novo primeiro nó.
            return; // Sai do método.
        }

        int count = 0; // Inicializa o contador de índices.
        Node previous = null; // Declara uma variável para armazenar a referência ao nó anterior.

        while(current != null && count < index){ // Percorre a lista até o índice desejado ou até o final da lista.
            previous = current; // Armazena o nó atual como o nó anterior.
            current = current.next; // Avança para o próximo nó.
            count++; // Incrementa o contador de índices.
        }

        if(current == null){ // Verifica se o nó atual é nulo (indicando que o índice é inválido).
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido"); // Lança uma exceção se o índice estiver fora dos limites da lista.
        }

        previous.next = current.next; // Remove o nó atual, ligando o nó anterior ao próximo nó.
    }

    private int size(){ // Método privado para calcular o número de nós na lista.
        int count = 0; // Inicializa o contador de nós.
        Node current = this.head; // Começa do primeiro nó.

        while(current != null){ // Percorre a lista enquanto o nó atual não for nulo.
            count++; // Incrementa o contador de nós.
            current = current.next; // Avança para o próximo nó.
        }

        return count; // Retorna o número total de nós na lista.
    }

    private boolean isEmpty(){ // Método privado para verificar se a lista está vazia.
        return this.head == null; // Retorna true se o primeiro nó for nulo, indicando que a lista está vazia.
    }
}