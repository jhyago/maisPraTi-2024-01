package tree;

class Node {
    int value;         // Armazena o valor do nó.
    Node left;         // Referência para o nó filho à esquerda.
    Node right;        // Referência para o nó filho à direita.

    // Construtor do nó, inicializa o valor e define os filhos como nulos.
    public Node(int value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

public class BinaryTree {
    Node root; // Referência para o nó raiz da árvore.

    // Construtor da árvore binária, inicializa a raiz como nula.
    public BinaryTree(){
        this.root = null;
    }

    // Método para adicionar um valor à árvore.
    public void add(int value){
        this.root = addRecursive(this.root, value); // Chama o método recursivo para adicionar o valor à árvore.
    }

    // Método recursivo que percorre a árvore e insere o valor na posição correta.
    private Node addRecursive(Node current, int value){
        if(current == null){ // Se o nó atual for nulo, cria um novo nó com o valor.
            return new Node(value);
        }

        if(value < current.value){ // Se o valor for menor que o valor do nó atual, adiciona à subárvore esquerda.
            current.left = addRecursive(current.left, value);
        } else if(value > current.value){ // Se o valor for maior, adiciona à subárvore direita.
            current.right = addRecursive(current.right, value);
        }

        return current; // Retorna o nó atual após a inserção.
    }

    // Método para remover um valor da árvore.
    public void remove(int value){
        this.root = removeRecursive(this.root, value); // Chama o método recursivo para remover o valor da árvore.
    }

    // Método recursivo que percorre a árvore e remove o nó com o valor especificado.
    private Node removeRecursive(Node current, int value){
        if(current == null){ // Se o nó atual for nulo, retorna nulo.
            return null;
        }

        if(value < current.value){ // Se o valor for menor que o valor do nó atual, busca na subárvore esquerda.
            current.left = removeRecursive(current.left, value);
        } else if(value > current.value){ // Se o valor for maior, busca na subárvore direita.
            current.right = removeRecursive(current.right, value);
        } else { // Se o valor for igual ao valor do nó atual, esse é o nó que deve ser removido.
            if(current.left == null && current.right == null){ // Caso o nó não tenha filhos, basta removê-lo.
                return null;
            }

            if(current.left == null){ // Se o nó não tiver filho à esquerda, retorna o filho à direita.
                return current.right;
            }

            if(current.right == null){ // Se o nó não tiver filho à direita, retorna o filho à esquerda.
                return current.left;
            }

            // Se o nó tiver dois filhos, encontra o menor valor na subárvore direita.
            int smallestValue = findSmallestValue(current.right);

            current.value = smallestValue; // Substitui o valor do nó atual pelo menor valor.

            // Remove o menor valor da subárvore direita.
            current.right = removeRecursive(current.right, smallestValue);
        }

        return current; // Retorna o nó atual após a remoção.
    }

    // Método para encontrar o menor valor na subárvore, usado na remoção.
    private int findSmallestValue(Node root){
        return root.left == null ? root.value : findSmallestValue(root.left); // Busca o valor mais à esquerda.
    }

    // Método para imprimir os valores da árvore em ordem crescente.
    public void inOrderPrint(Node current){
        if(current != null){ // Se o nó atual não for nulo, percorre recursivamente.
            inOrderPrint(current.left); // Imprime a subárvore esquerda.
            System.out.println(current.value); // Imprime o valor do nó atual.
            inOrderPrint(current.right); // Imprime a subárvore direita.
        }
    }

    public static void main(String[] args) {
        BinaryTree binaryTree = new BinaryTree(); // Cria uma nova árvore binária.

        binaryTree.add(10); // Adiciona os valores à árvore.
        binaryTree.add(11);
        binaryTree.add(9);
        binaryTree.add(8);
        binaryTree.add(20);
        binaryTree.add(15);
        binaryTree.add(22);

        binaryTree.remove(9); // Remove o valor 9 da árvore.

        binaryTree.inOrderPrint(binaryTree.root); // Imprime os valores da árvore em ordem crescente.
    }
}