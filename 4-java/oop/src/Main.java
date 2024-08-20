import abstraction.ContaBancaria;

public class Main {
    public static void main(String[] args) {
        try{
            ContaBancaria contaJose = new ContaBancaria("12345", "José da Silva", 1000.0);
            ContaBancaria contaJoao = new ContaBancaria("56789", "João Pereira", 2000.0);

            contaJose.depositar(1000);
            contaJose.sacar(800);

            contaJose.transferir(100.0, contaJoao);

            contaJose.exibirExtrato();
            contaJoao.exibirExtrato();
        } catch (Exception error){
            System.out.println(error.getMessage());
        }

    }
}