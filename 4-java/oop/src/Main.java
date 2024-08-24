import abstraction.ContaBancaria;
import encapsulation.BankAccount;
import encapsulation.BankTransaction;

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("12345", 1000);

        BankTransaction depositTransaction = new BankTransaction(account, 15000, BankTransaction.TransactionType.DEPOSIT);

        depositTransaction.execute();

        System.out.println(depositTransaction.getDetails());
    }
}