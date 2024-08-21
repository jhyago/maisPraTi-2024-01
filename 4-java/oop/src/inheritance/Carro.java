package inheritance;

public class Carro extends Veiculo {

    public boolean travaEletrica;
    public String tracao;
    public int nrPortas;
    public String cor;

    public Carro(boolean travaEletrica, String tracao, int nrPortas, String cor){
        super("Honda", "Civic Typer R", "Esportivo", "Sport Touring", "2014", 4, 297, "12345");
        this.travaEletrica = travaEletrica;
        this.tracao = tracao;
        this.nrPortas = nrPortas;
        this.cor = cor;
    }

    public void trocarMarcha(){
        System.out.println("Cambiando");
    }

    public static void main(String[] args) {
        Carro meuCarro = new Carro(true, "4x4", 4, "Azul");
    }
}
