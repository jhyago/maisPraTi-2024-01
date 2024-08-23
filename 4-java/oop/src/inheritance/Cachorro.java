package inheritance;

// A classe Cachorro herda da classe abstrata Animal
public class Cachorro extends Animal {

    // Construtor da classe Cachorro, que chama o construtor da classe base Animal
    public Cachorro(String nome) {
        // O método super(nome) chama o construtor da classe base Animal, passando o nome do cachorro
        super(nome);
    }

    // Implementação do método abstrato emitirSom(), obrigatório devido à herança da classe Animal
    @Override
    public void emitirSom() {
        // Exibe uma mensagem que indica que o cachorro está latindo
        System.out.println(this.nome + " faz au au!");
    }
}