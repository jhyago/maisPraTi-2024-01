import org.example.Calculadora; // Importa a classe Calculadora que será testada.
import org.junit.jupiter.api.Test; // Importa a anotação @Test para definir métodos de teste.

import static org.junit.jupiter.api.Assertions.assertEquals; // Importa o método assertEquals para verificar se o resultado dos testes é o esperado.

public class CalculadoraTest { // Declara a classe de teste CalculadoraTest.

    @Test
    public void testSomar() { // Define um método de teste para o método somar da classe Calculadora.
        Calculadora calculadora = new Calculadora(); // Cria uma instância da Calculadora.
        int resultado = calculadora.somar(2, 3); // Chama o método somar com os valores 2 e 3, armazenando o resultado.
        assertEquals(5, resultado, "A soma entre 2 e 3 deve ser 5"); // Verifica se o resultado é igual a 5, com uma mensagem em caso de falha.
    }

    @Test
    public void testSomarNegativos() { // Define um método de teste para somas envolvendo números negativos.
        Calculadora calculadora = new Calculadora(); // Cria uma nova instância da Calculadora.
        int resultado = calculadora.somar(-1, -1); // Chama o método somar com os valores -1 e -1, armazenando o resultado.
        assertEquals(-2, resultado, "A soma entre -1 e -1 deve ser -2"); // Verifica se o resultado é igual a -2, com uma mensagem em caso de falha.
    }
}