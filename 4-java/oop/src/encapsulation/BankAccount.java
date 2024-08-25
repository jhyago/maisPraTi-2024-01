package encapsulation; // Define o pacote onde a classe está localizada.

public class BankAccount { // Declara a classe BankAccount que representa uma conta bancária.
    private String accountNumber; // Variável privada que armazena o número da conta bancária.
    private double balance; // Variável privada que armazena o saldo da conta bancária.

    public BankAccount(String accountNumber, double initialBalance){ // Construtor público que inicializa a conta com um número e um saldo inicial.
        this.accountNumber = accountNumber; // Atribui o número da conta recebido ao atributo privado.
        this.balance = initialBalance; // Atribui o saldo inicial recebido ao atributo privado.
    }

    public String getAccountNumber() { // Método público para obter o número da conta bancária.
        return accountNumber; // Retorna o número da conta.
    }

    public double getBalance() { // Método público para obter o saldo atual da conta bancária.
        return balance; // Retorna o saldo atual.
    }

    public void deposit(double amount){ // Método público para depositar uma quantia na conta.
        if(amount > 0){ // Verifica se a quantia a ser depositada é positiva.
            this.balance += amount; // Adiciona a quantia ao saldo atual.
        } else {
            throw new IllegalArgumentException("O valor do depósito deve ser positivo."); // Lança uma exceção se a quantia for negativa ou zero.
        }
    }

    public void withdraw(double amount){ // Método público para sacar uma quantia da conta.
        if(amount > 0 && amount <= this.balance){ // Verifica se a quantia é positiva e se há saldo suficiente na conta.
            this.balance -= amount; // Subtrai a quantia do saldo atual.
        } else {
            throw new IllegalArgumentException("O valor do saque deve ser positivo."); // Lança uma exceção se a quantia for inválida.
        }
    }
}