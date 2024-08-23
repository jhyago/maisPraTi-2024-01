package abstraction;

// Declaração da classe pública Pessoa
public class Pessoa {
    // Atributos privados da classe
    private String nome; // Nome da pessoa
    private char genero; // Gênero da pessoa (usando char)
    private String CPF; // CPF da pessoa
    private int idade; // Idade da pessoa
    private double altura; // Altura da pessoa em metros
    private double peso; // Peso da pessoa em quilogramas

    // Construtor da classe, inicializa os atributos nome e idade com os valores fornecidos
    public Pessoa(String nome, int idade) {
        // Validação do nome
        if (nome == null || nome.isEmpty()) {
            throw new IllegalArgumentException("O nome não pode ser vazio ou nulo.");
        }
        // Validação da idade
        if (idade < 0) {
            throw new IllegalArgumentException("A idade não pode ser negativa.");
        }
        this.nome = nome; // Inicializa o nome
        this.idade = idade; // Inicializa a idade
    }

    // Método getter para acessar o nome da pessoa
    public String getNome() {
        return this.nome;
    }

    // Método setter para modificar o nome da pessoa
    public void setNome(String nome) {
        // Validação do nome
        if (nome == null || nome.isEmpty()) {
            throw new IllegalArgumentException("O nome não pode ser vazio ou nulo.");
        }
        this.nome = nome;
    }

    // Método getter para acessar o gênero da pessoa
    public char getGenero() {
        return genero;
    }

    // Método setter para modificar o gênero da pessoa
    public void setGenero(char genero) {
        // Validação do gênero
        if (genero != 'M' && genero != 'F' && genero != 'O') {
            throw new IllegalArgumentException("Gênero inválido. Use 'M' para masculino, 'F' para feminino ou 'O' para outro.");
        }
        this.genero = genero;
    }

    // Método getter para acessar o CPF da pessoa
    public String getCPF() {
        return CPF;
    }

    // Método setter para modificar o CPF da pessoa
    public void setCPF(String CPF) {
        // Validação do CPF
        if (CPF == null || CPF.isEmpty()) {
            throw new IllegalArgumentException("O CPF não pode ser vazio ou nulo.");
        }
        // Adicione aqui uma validação mais robusta para o CPF, como verificar o formato e o dígito verificador
        this.CPF = CPF;
    }

    // Método getter para acessar a idade da pessoa
    public int getIdade() {
        return idade;
    }

    // Método setter para modificar a idade da pessoa
    public void setIdade(int idade) {
        // Validação da idade
        if (idade < 0) {
            throw new IllegalArgumentException("A idade não pode ser negativa.");
        }
        this.idade = idade;
    }

    // Método getter para acessar a altura da pessoa
    public double getAltura() {
        return altura;
    }

    // Método setter para modificar a altura da pessoa
    public void setAltura(double altura) {
        // Validação da altura
        if (altura <= 0) {
            throw new IllegalArgumentException("A altura deve ser positiva.");
        }
        this.altura = altura;
    }

    // Método getter para acessar o peso da pessoa
    public double getPeso() {
        return peso;
    }

    // Método setter para modificar o peso da pessoa
    public void setPeso(double peso) {
        // Validação do peso
        if (peso <= 0) {
            throw new IllegalArgumentException("O peso deve ser positivo.");
        }
        this.peso = peso;
    }
}