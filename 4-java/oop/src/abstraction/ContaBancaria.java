package abstraction;

import java.util.ArrayList;
import java.util.Date;

public class ContaBancaria {

    //Desenvolvam classe ContaBancaria com constructor, getters, setters, depositar, sacar, transferir, exibirExtrato, registrarExtrato
    //validações, exceções, arrayList
    private String numeroConta;
    private double saldo;
    private String titular;
    private double limiteSaqueDiario;
    private ArrayList<String> historicoTransacao;

    public ContaBancaria(String numeroConta, String titular, double limiteSaqueDiario){
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = 0.0;
        this.limiteSaqueDiario = limiteSaqueDiario;
        this.historicoTransacao = new ArrayList<>();
    }

    public String getNumeroConta() {
        return numeroConta;
    }

    public void setNumeroConta(String numeroConta) {
        this.numeroConta = numeroConta;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public String getTitular() {
        return titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public double getLimiteSaqueDiario() {
        return limiteSaqueDiario;
    }

    public void setLimiteSaqueDiario(double limiteSaqueDiario) {
        this.limiteSaqueDiario = limiteSaqueDiario;
    }

    public void depositar(double valor){
        if(valor <= 0){
            throw new IllegalArgumentException("O valor depositado deve ser positivo.");
        }

        this.saldo += valor;
        this.registrarTransacao("Depósito de: " + valor);
    }

    public void sacar(double valor) throws Exception {
        if(valor <= 0){
            throw new IllegalArgumentException("O valor sacado deve ser positivo.");
        }

        if(valor > this.saldo){
               throw new Exception("Não há saldo suficiente.");
        }

        if(valor > this.limiteSaqueDiario){
            throw new Exception("O valor excede o limite diário para saques.");
        }

        this.saldo -= valor;
        this.registrarTransacao("Saque de: " + valor);
    }

    public void transferir(double valor, ContaBancaria contaDestino) throws Exception{
        if(valor <= 0){
            throw new IllegalArgumentException("O valor de transferência deve ser positivo.");
        }

        if(valor > this.saldo){
            throw new Exception("Não há saldo suficiente para a transferência.");
        }

        this.saldo -= valor;
        contaDestino.depositar(valor);
        this.registrarTransacao("Transferência de: " + valor + " para a conta " + contaDestino.getNumeroConta());
    }

    public void exibirExtrato(){
        System.out.println("Extrato da conta: " + this.getNumeroConta());

        for(String transacao : historicoTransacao){
            System.out.println(transacao);
        }

        System.out.println("Saldo atual: " + this.getSaldo());
    }

    private void registrarTransacao(String descricao){
        Date data = new Date();
        historicoTransacao.add(data + ": " + descricao);
    }
}