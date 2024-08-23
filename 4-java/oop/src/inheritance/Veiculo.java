package inheritance;

// Declaração da classe Veiculo, que serve como base para outros tipos de veículos
public class Veiculo {

    // Atributos públicos da classe Veiculo
    public String fabricante; // Nome do fabricante do veículo
    public String modelo; // Modelo do veículo
    public String tipo; // Tipo de veículo (e.g., carro, moto, caminhão)
    public String categoria; // Categoria do veículo (e.g., esportivo, utilitário)
    public String anoFabricacao; // Ano de fabricação do veículo

    public int capacidade; // Capacidade do veículo (e.g., número de passageiros)
    public double potencia; // Potência do veículo (em cavalos de potência)

    // Atributo privado que só pode ser acessado dentro da classe Veiculo
    private String nrChassi; // Número do chassi do veículo, um identificador único

    // Construtor da classe Veiculo, inicializa os atributos com os valores fornecidos
    public Veiculo(String fabricante, String modelo, String tipo, String categoria, String anoFabricacao, int capacidade, double potencia, String nrChassi) {
        this.fabricante = fabricante; // Inicializa o fabricante do veículo
        this.modelo = modelo; // Inicializa o modelo do veículo
        this.tipo = tipo; // Inicializa o tipo do veículo
        this.categoria = categoria; // Inicializa a categoria do veículo
        this.anoFabricacao = anoFabricacao; // Inicializa o ano de fabricação do veículo
        this.capacidade = capacidade; // Inicializa a capacidade do veículo
        this.potencia = potencia; // Inicializa a potência do veículo
        this.nrChassi = nrChassi; // Inicializa o número do chassi, mantendo-o privado
    }

    // Método para ligar o veículo
    public void ligar() {
        // Exibe uma mensagem indicando que o veículo está ligado
        System.out.println("O veículo está ligado");
    }

    // Método para acelerar o veículo
    public void acelerar() {
        // Exibe uma mensagem indicando que o veículo está acelerando
        System.out.println("Estou acelerando");
    }

    // Método público para acessar o número do chassi, mantendo o encapsulamento
    public String getNrChassi() {
        return this.nrChassi; // Retorna o número do chassi do veículo
    }

    // Método público para alterar o número do chassi, mantendo o encapsulamento
    public void setNrChassi(String nrChassi) {
        // Verifica se o número do chassi não é nulo ou vazio antes de atribuir
        if (nrChassi == null || nrChassi.isEmpty()) {
            throw new IllegalArgumentException("O número do chassi não pode ser nulo ou vazio.");
        }
        this.nrChassi = nrChassi; // Atribui o novo valor ao número do chassi
    }
}