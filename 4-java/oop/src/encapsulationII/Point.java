package encapsulationII;

public record Point(int x, int y) {
    public String toString() {
        return String.format("Testando alteração no toString");
    }
}
