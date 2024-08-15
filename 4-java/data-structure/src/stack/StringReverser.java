package stack;
import java.util.Stack;

public class StringReverser {

    // Método para inverter uma string usando uma pilha.
    public static String reverseString(String input){
        Stack<Character> stackInversed = new Stack<>();

        // Converte a string em um array de caracteres e empilha cada caractere.
        for(char ch: input.toCharArray()){
            stackInversed.push(ch);
        }

        // Utilizando StringBuilder para construir a string final,
        // que é mais eficiente do que concatenar strings diretamente.
        StringBuilder myString = new StringBuilder();

        // Desempilha todos os caracteres e adiciona ao StringBuilder.
        while(!stackInversed.isEmpty()) {
            myString.append(stackInversed.pop());
        }

        // Converte o StringBuilder em uma string e a retorna.
        return myString.toString();
    }

    public static void main(String[] args) {
        // Testa o método com a palavra "Grêmio".
        System.out.println(reverseString("Grêmio"));
    }
}
