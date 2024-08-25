package encapsulationII; // Define o pacote onde a classe está localizada.

public abstract sealed class Shape permits Circle, Rectangle {
    // Define uma classe abstrata e selada chamada Shape.
    // "abstract" significa que a classe não pode ser instanciada diretamente e deve ser estendida por outras classes.
    // "sealed" restringe quais classes podem estender Shape, limitando as subclasses a Circle e Rectangle.

    public abstract double area(); // Método abstrato que deve ser implementado pelas subclasses para calcular a área.

    public static void main(String[] args) { // Método main para executar o código de exemplo e testar as implementações das subclasses.
        Shape circle = new Circle(5.0); // Cria uma instância de Circle com raio 5.0.
        System.out.println("Área do círculo: " + circle.area()); // Imprime a área do círculo chamando o método area().

        Shape rectangle = new Rectangle(4.0, 5.0); // Cria uma instância de Rectangle com largura 4.0 e altura 5.0.
        System.out.println("Área do Retângulo: " + rectangle.area()); // Imprime a área do retângulo chamando o método area().

        Point point = new Point(3, 5); // Cria uma instância de Point com coordenadas (3, 5).
        Point anotherPoint = new Point(5, 8); // Cria outra instância de Point com coordenadas (5, 8).

        System.out.println("X: " + point.x()); // Imprime a coordenada x do primeiro ponto.

        System.out.println("Ponto: " + anotherPoint); // Imprime o segundo ponto usando o método toString() sobrescrito no record Point.

        System.out.println("Os pontos são iguais? " + point.equals(anotherPoint)); // Compara os dois pontos e imprime se são iguais.
    }
}