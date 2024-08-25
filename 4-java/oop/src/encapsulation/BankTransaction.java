package encapsulation; // Define o pacote onde a classe está localizada.

public class BankTransaction implements Transaction{ // Declara a classe BankTransaction que implementa a interface Transaction.

    private final BankAccount account; // Variável final que referencia a conta bancária associada à transação.
    private final double amount; // Variável final que armazena o valor da transação.
    private final TransactionType type; // Variável final que armazena o tipo da transação (depósito ou saque).

    public enum TransactionType { // Declara um enum interno que define os tipos de transações possíveis.
        DEPOSIT, // Constante que representa um depósito.
        WITHDRAWAL // Constante que representa um saque.
    }

    public BankTransaction(BankAccount account, double amount, TransactionType type) { // Construtor que inicializa uma transação com a conta, valor e tipo.
        this.account = account; // Atribui a conta bancária à variável final account.
        this.amount = amount; // Atribui o valor da transação à variável final amount.
        this.type = type; // Atribui o tipo de transação à variável final type.
    }

    @Override
    public void execute() { // Método que executa a transação, sobrescrevendo o método da interface Transaction.
        switch(type){ // Utiliza uma estrutura switch para determinar o tipo de transação.
            case DEPOSIT -> this.account.deposit(amount); // Se for um depósito, chama o método deposit da conta bancária.
            case WITHDRAWAL -> this.account.withdraw(amount); // Se for um saque, chama o método withdraw da conta bancária.
        }
    }

    @Override
    public String getDetails() { // Método que retorna os detalhes da transação, sobrescrevendo o método da interface Transaction.
        return String.format("Transação do tipo %s com valor de %.2f na conta %s", this.type, this.amount, this.account.getAccountNumber());
        // Retorna uma string formatada que descreve o tipo da transação, o valor e o número da conta.
    }
}