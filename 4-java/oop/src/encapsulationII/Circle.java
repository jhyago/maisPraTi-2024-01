package encapsulationII; // Define o pacote onde a classe está localizada.

public final class Circle extends Shape { // A classe Circle é final, o que significa que não pode ser estendida. Ela herda da classe Shape.
    public double radius; // Declaração de um atributo público que representa o raio do círculo.

    public Circle(double radius){ // Construtor da classe que recebe o raio do círculo como argumento.
        this.radius = radius; // Inicializa o atributo radius com o valor fornecido.
    }

    @Override
    public double area() { // Sobrescreve o método abstrato area() da classe Shape para fornecer a implementação específica para o círculo.
        return Math.PI * radius * radius; // Calcula e retorna a área do círculo usando a fórmula: π * r².
    }
}