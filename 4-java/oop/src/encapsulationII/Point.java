package encapsulationII; // Define o pacote onde o record está localizado.

public record Point(int x, int y) { // Declara um record chamado Point, que é uma classe imutável com dois campos: x e y.

    // O record automaticamente fornece construtor, getters, equals, hashCode e toString, mas você pode sobrescrevê-los.

    @Override
    public String toString() { // Sobrescreve o método toString para personalizar a saída de texto do record.
        return String.format("Testando alteração no toString"); // Retorna uma string personalizada, ignorando os valores de x e y.
    }
}