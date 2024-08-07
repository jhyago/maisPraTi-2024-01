public class ContaBancaria {
    private double saldo;

    public void depositar(double valor){
        this.saldo += valor;
    }
    public double consultaSaldo(){
        return saldo;
    }
}
