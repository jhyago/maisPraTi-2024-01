package util;
import java.time.LocalDate;
import java.time.LocalTime;

public class DataHora {

    public static void main(String[] args){
        if (args.length < 2) {
            System.out.println("Por favor, forneça dois argumentos.");
            return;
        }

        try {
            int arg1 = Integer.parseInt(args[0]);
            int arg2 = Integer.parseInt(args[1]);

            int soma = arg1 + arg2;

            System.out.println("A soma dos argumentos é: " + soma);
        } catch (NumberFormatException e) {
            System.out.println("Por favor, forneça números válidos.");
        }
    }
}
