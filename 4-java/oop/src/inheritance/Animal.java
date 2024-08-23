package inheritance;

// Declaração da classe abstrata Animal, que serve como base para outros tipos de animais
public abstract class Animal {
    // Atributo protegido, acessível pelas subclasses
    protected String nome; // Nome do animal

    // Construtor da classe, inicializa o atributo nome com o valor fornecido
    public Animal(String nome) {
        // Validação do nome para garantir que não seja nulo ou vazio
        if (nome == null || nome.isEmpty()) {
            throw new IllegalArgumentException("O nome não pode ser nulo ou vazio.");
        }
        this.nome = nome; // Inicializa o nome do animal
    }

    // Método abstrato que deve ser implementado por todas as subclasses
    public abstract void emitirSom();

    // Método concreto para simular o animal dormindo
    public void dormir() {
        System.out.println(this.nome + " está dormindo."); // Exibe uma mensagem indicando que o animal está dormindo
    }
}