package encapsulationII; // Define o pacote onde a classe está localizada.

public final class Rectangle extends Shape { // A classe Rectangle é final, o que significa que não pode ser estendida. Ela herda da classe Shape.
    private final double width, height; // Declaração de dois atributos privados e finais para armazenar a largura e a altura do retângulo.

    public Rectangle(double width, double height) { // Construtor público que inicializa a largura e a altura do retângulo.
        this.width = width; // Inicializa o atributo width com o valor fornecido.
        this.height = height; // Inicializa o atributo height com o valor fornecido.
    }

    public double area(){ // Método público que calcula a área do retângulo.
        return width * height; // Retorna o produto da largura pela altura, que é a área do retângulo.
    }
}