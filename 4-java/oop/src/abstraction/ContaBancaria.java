package abstraction;

// Importação das classes necessárias
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Iterator;

// Declaração da classe pública ContaBancaria
public class ContaBancaria {
    // Atributos privados da classe
    private String numeroConta; // Número da conta bancária
    private double saldo; // Saldo disponível na conta
    private String titular; // Nome do titular da conta
    private double limiteSaqueDiario; // Limite máximo de saque por dia
    private List<String> historicoTransacao; // Histórico de transações da conta

    // Construtor da classe, inicializa os atributos com os valores fornecidos
    public ContaBancaria(String numeroConta, String titular, double limiteSaqueDiario) {
        // Validação do número da conta
        if (numeroConta == null || numeroConta.isEmpty()) {
            throw new IllegalArgumentException("Número da conta não pode ser vazio.");
        }
        // Validação do titular
        if (titular == null || titular.isEmpty()) {
            throw new IllegalArgumentException("Titular da conta não pode ser vazio.");
        }
        // Validação do limite de saque diário
        if (limiteSaqueDiario <= 0) {
            throw new IllegalArgumentException("Limite de saque diário deve ser positivo.");
        }
        this.numeroConta = numeroConta; // Inicializa o número da conta
        this.titular = titular; // Inicializa o titular da conta
        this.saldo = 0.0; // Saldo inicial é zero
        this.limiteSaqueDiario = limiteSaqueDiario; // Define o limite diário de saque
        this.historicoTransacao = new ArrayList<>(); // Inicializa o histórico de transações como uma lista vazia
    }

    // Métodos getter para acessar os atributos privados
    public String getNumeroConta() {
        return this.numeroConta;
    }

    public double getSaldo() {
        return this.saldo;
    }

    public String getTitular() {
        return this.titular;
    }

    public double getLimiteSaqueDiario() {
        return this.limiteSaqueDiario;
    }

    // Método para realizar um depósito na conta
    public void depositar(double valor) {
        // Verifica se o valor do depósito é positivo
        if (valor <= 0.0) {
            throw new IllegalArgumentException("O valor depositado deve ser positivo."); // Lança uma exceção se o valor for inválido
        }
        this.saldo += valor; // Adiciona o valor ao saldo atual
        this.registrarTransacao("Depósito de: " + valor); // Registra a transação no histórico
    }

    // Método para realizar um saque da conta
    public void sacar(double valor) throws Exception {
        // Verifica se o valor do saque é positivo
        if (valor <= 0.0) {
            throw new IllegalArgumentException("O valor sacado deve ser positivo."); // Lança uma exceção se o valor for inválido
        }
        // Verifica se há saldo suficiente para o saque
        if (valor > this.saldo) {
            throw new Exception("Não há saldo suficiente."); // Lança uma exceção específica para saldo insuficiente
        }
        // Verifica se o valor excede o limite diário de saque
        if (valor > this.limiteSaqueDiario) {
            throw new Exception("O valor excede o limite diário para saques."); // Lança uma exceção específica para limite diário
        }
        this.saldo -= valor; // Deduz o valor do saque do saldo atual
        this.registrarTransacao("Saque de: " + valor); // Registra a transação no histórico
    }

    // Método para transferir dinheiro para outra conta bancária
    public void transferir(double valor, ContaBancaria contaDestino) throws Exception {
        // Verifica se o valor da transferência é positivo
        if (valor <= 0.0) {
            throw new IllegalArgumentException("O valor de transferência deve ser positivo."); // Lança uma exceção se o valor for inválido
        }
        // Verifica se há saldo suficiente para a transferência
        if (valor > this.saldo) {
            throw new Exception("Não há saldo suficiente para a transferência."); // Lança uma exceção específica para saldo insuficiente
        }
        this.saldo -= valor; // Deduz o valor da transferência do saldo atual
        contaDestino.depositar(valor); // Depósito na conta de destino
        this.registrarTransacao("Transferência de: " + valor + " para a conta " + contaDestino.getNumeroConta()); // Registra a transação no histórico
    }

    // Método para exibir o extrato da conta
    public void exibirExtrato() {
        System.out.println("Extrato da conta: " + this.getNumeroConta()); // Exibe o número da conta
        Iterator<String> iterator = this.historicoTransacao.iterator(); // Cria um iterador para percorrer o histórico de transações

        // Percorre o histórico de transações e exibe cada transação
        while(iterator.hasNext()) {
            String transacao = iterator.next();
            System.out.println(transacao);
        }

        System.out.println("Saldo atual: " + this.getSaldo()); // Exibe o saldo atual
    }

    // Método privado para registrar uma transação no histórico
    private void registrarTransacao(String descricao) {
        Date data = new Date(); // Captura a data e hora atuais
        StringBuilder sb = new StringBuilder(); // Cria um StringBuilder para concatenar as strings
        sb.append(data).append(": ").append(descricao); // Concatena a data e a descrição
        this.historicoTransacao.add(sb.toString()); // Adiciona a descrição da transação ao histórico
    }
}