package lists; // Define o pacote "lists", onde a classe está localizada.
import java.util.Arrays; // Importa a classe Arrays, que será usada no método toString para manipulação de arrays.

public class CustomList { // Define a classe pública "CustomList".
    private int[] elements; // Declara um array privado de inteiros chamado "elements" para armazenar os elementos da lista.
    private int size; // Declara um inteiro privado "size" para acompanhar o número de elementos na lista.

    public CustomList() { // Construtor da classe "CustomList".
        this.elements = new int[10]; // Inicializa o array "elements" com capacidade para 10 elementos.
        this.size = 0; // Inicializa o "size" com 0, indicando que a lista está vazia.
    }

    public void add(int element){ // Método público para adicionar um novo elemento à lista.
        if(this.size == this.elements.length){ // Verifica se o array está cheio.
            this.resize(); // Se estiver cheio, chama o método "resize" para expandir a capacidade do array.
        }
        this.elements[this.size++] = element; // Adiciona o novo elemento à lista e incrementa o "size".
    }

    public int get(int index){ // Método público para acessar um elemento da lista pelo seu índice.
        if(index >= this.size || index < 0){ // Verifica se o índice está fora dos limites válidos da lista.
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido"); // Se o índice for inválido, lança uma exceção.
        }
        return this.elements[index]; // Retorna o elemento no índice especificado.
    }

    public void remove(int index){ // Método público para remover um elemento da lista pelo seu índice.
        if(index >= this.size || index < 0){ // Verifica se o índice está fora dos limites válidos da lista.
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido"); // Se o índice for inválido, lança uma exceção.
        }
        for(int i = index; i < this.size - 1; i++){ // Move os elementos após o índice para a esquerda, sobrescrevendo o elemento removido.
            this.elements[i] = this.elements[i + 1]; // Copia o próximo elemento para a posição atual.
        }
        this.size--; // Decrementa o "size" para refletir a remoção de um elemento.
    }

    @Override // Indica que o método está sobrescrevendo um método da superclasse (Object).
    public String toString(){ // Método para retornar a representação da lista como uma String.
        return Arrays.toString(Arrays.copyOfRange(this.elements, 0, this.size)); // Retorna uma string representando os elementos da lista até o tamanho atual.
    }

    private void resize(){ // Método privado para expandir a capacidade do array quando necessário.
        int[] newElements = new int[this.elements.length * 2]; // Cria um novo array com o dobro da capacidade do array atual.

        for(int i = 0; i < this.elements.length; i++){ // Copia os elementos do array atual para o novo array.
            newElements[i] = this.elements[i];
        }
        this.elements = newElements; // Substitui o array antigo pelo novo array expandido.
    }
}