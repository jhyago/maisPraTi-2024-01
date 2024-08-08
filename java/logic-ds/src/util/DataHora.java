package util;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class DataHora {

    public static void main(String[] args){
        if (args.length < 2) { // Verifica se o número de argumentos fornecidos é menor que 2.
            System.out.println("Por favor, forneça dois argumentos."); // Imprime uma mensagem solicitando dois argumentos.
            return; // Sai do método main se o número de argumentos for menor que 2.
        }

        try { // Inicia um bloco 'try' para capturar exceções.
            int arg1 = Integer.parseInt(args[0]); // Converte o primeiro argumento para um inteiro.
            int arg2 = Integer.parseInt(args[1]); // Converte o segundo argumento para um inteiro.

            int soma = arg1 + arg2; // Calcula a soma dos dois inteiros.

            System.out.println("A soma dos argumentos é: " + soma); // Imprime o resultado da soma.
        } catch (NumberFormatException e) { // Captura a exceção se os argumentos não forem números válidos.
            System.out.println("Por favor, forneça números válidos."); // Imprime uma mensagem de erro.
        }

        // Exemplo de manipulação de data
        LocalDate hoje = LocalDate.now(); // Obtém a data atual
        LocalDate dataEspecifica = LocalDate.of(2023, 8, 8); // Cria uma data específica
        LocalDate dataFutura = hoje.plusDays(10); // Adiciona 10 dias à data atual
        System.out.println("Data de hoje: " + hoje);
        System.out.println("Data específica: " + dataEspecifica);
        System.out.println("Data futura: " + dataFutura);

        // Exemplo de manipulação de hora
        LocalTime agora = LocalTime.now(); // Obtém a hora atual
        LocalTime horaEspecifica = LocalTime.of(14, 30); // Cria uma hora específica
        LocalTime horaFutura = agora.plusHours(2); // Adiciona 2 horas à hora atual
        System.out.println("Hora atual: " + agora);
        System.out.println("Hora específica: " + horaEspecifica);
        System.out.println("Hora futura: " + horaFutura);

        // Formatação de data e hora
        DateTimeFormatter formatterData = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        DateTimeFormatter formatterHora = DateTimeFormatter.ofPattern("HH:mm:ss");
        String dataFormatada = hoje.format(formatterData);
        String horaFormatada = agora.format(formatterHora);
        System.out.println("Data formatada: " + dataFormatada);
        System.out.println("Hora formatada: " + horaFormatada);
    }
}
