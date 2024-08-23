package inheritance;

// A classe Carro estende a classe base Veiculo, herdando seus atributos e métodos
public class Carro extends Veiculo {

    // Atributos específicos da classe Carro
    private boolean travaEletrica; // Indica se o carro possui trava elétrica
    private String tracao; // Tipo de tração do carro (e.g., 4x4, dianteira)
    private int nrPortas; // Número de portas do carro
    private String cor; // Cor do carro

    // Construtor da classe Carro que inicializa os atributos específicos e chama o construtor da classe base Veiculo
    public Carro(String fabricante, String modelo, String tipo, String categoria, String anoFabricacao,
                 int capacidade, double potencia, String nrChassi, boolean travaEletrica,
                 String tracao, int nrPortas, String cor) {
        // A chamada ao construtor da classe base Veiculo
        super(fabricante, modelo, tipo, categoria, anoFabricacao, capacidade, potencia, nrChassi);
        // Inicialização dos atributos específicos da classe Carro
        this.travaEletrica = travaEletrica;
        this.tracao = tracao;
        this.nrPortas = nrPortas;
        this.cor = cor;
    }

    // Métodos getter e setter para os atributos específicos da classe Carro
    public boolean isTravaEletrica() {
        return travaEletrica;
    }

    public void setTravaEletrica(boolean travaEletrica) {
        this.travaEletrica = travaEletrica;
    }

    public String getTracao() {
        return tracao;
    }

    public void setTracao(String tracao) {
        this.tracao = tracao;
    }

    public int getNrPortas() {
        return nrPortas;
    }

    public void setNrPortas(int nrPortas) {
        this.nrPortas = nrPortas;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    // Método específico da classe Carro para simular a troca de marchas
    public void trocarMarcha() {
        System.out.println("Cambiando");
    }

    // Sobrescrevendo o método acelerar() da classe Veiculo para adicionar comportamento específico do carro
    @Override
    public void acelerar() {
        System.out.println("O carro está acelerando.");
    }

    // Método para exibir informações detalhadas do carro
    public void exibirDetalhes() {
        System.out.println("Fabricante: " + this.fabricante);
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Tipo: " + this.tipo);
        System.out.println("Categoria: " + this.categoria);
        System.out.println("Ano de Fabricação: " + this.anoFabricacao);
        System.out.println("Capacidade: " + this.capacidade + " passageiros");
        System.out.println("Potência: " + this.potencia + " HP");
        System.out.println("Número do Chassi: " + this.getNrChassi());
        System.out.println("Trava Elétrica: " + (this.travaEletrica ? "Sim" : "Não"));
        System.out.println("Tração: " + this.tracao);
        System.out.println("Número de Portas: " + this.nrPortas);
        System.out.println("Cor: " + this.cor);
    }

    // Método main para testar a classe Carro
    public static void main(String[] args) {
        // Criação de um objeto Carro com atributos específicos
        Carro meuCarro = new Carro("Honda", "Civic Type R", "Esportivo", "Sport Touring", "2014",
                4, 297, "12345", true, "4x4", 4, "Azul");
        // Exibe os detalhes do carro
        meuCarro.exibirDetalhes();

        // Testa os métodos herdados e específicos
        meuCarro.ligar();
        meuCarro.acelerar();
        meuCarro.trocarMarcha();
    }
}