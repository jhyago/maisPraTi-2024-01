import java.util.Scanner;

// ---------------------------------------------
// Encapsulamento
// ---------------------------------------------

// 1. Criação de uma Classe Simples (Produto)
class Produto {
    private String nome;
    private double preco;
    private int quantidadeEstoque;

    public Produto(String nome, double preco, int quantidadeEstoque) {
        this.nome = nome;
        setPreco(preco);
        setQuantidadeEstoque(quantidadeEstoque);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        if (preco < 0) {
            throw new IllegalArgumentException("Preço não pode ser negativo.");
        }
        this.preco = preco;
    }

    public int getQuantidadeEstoque() {
        return quantidadeEstoque;
    }

    public void setQuantidadeEstoque(int quantidadeEstoque) {
        if (quantidadeEstoque < 0) {
            throw new IllegalArgumentException("Quantidade em estoque não pode ser negativa.");
        }
        this.quantidadeEstoque = quantidadeEstoque;
    }
}

// 2. Melhorando a Classe com Validação (Desconto)
class ProdutoComDesconto extends Produto {
    public ProdutoComDesconto(String nome, double preco, int quantidadeEstoque) {
        super(nome, preco, quantidadeEstoque);
    }

    public void aplicarDesconto(double porcentagem) {
        if (porcentagem > 50.0) {
            throw new IllegalArgumentException("O desconto não pode ser maior que 50%.");
        }
        double novoPreco = getPreco() - (getPreco() * (porcentagem / 100));
        setPreco(novoPreco);
        System.out.println("Novo preço com desconto aplicado: R$ " + novoPreco);
    }
}

// ---------------------------------------------
// Herança
// ---------------------------------------------

// 3. Criação de uma Hierarquia de Classes (Funcionario)
class Funcionario {
    protected String nome;
    protected double salario;

    public Funcionario(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public double calcularBonus() {
        return 0.0;
    }
}

class Gerente extends Funcionario {
    public Gerente(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    public double calcularBonus() {
        return this.salario * 0.20; // 20% do salário
    }
}

class Desenvolvedor extends Funcionario {
    public Desenvolvedor(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    public double calcularBonus() {
        return this.salario * 0.10; // 10% do salário
    }
}

// 4. Sobrescrita de Métodos (trabalhar)
class FuncionarioComTrabalho extends Funcionario {
    public FuncionarioComTrabalho(String nome, double salario) {
        super(nome, salario);
    }

    public void trabalhar() {
        System.out.println("Funcionário está trabalhando.");
    }
}

class GerenteComTrabalho extends FuncionarioComTrabalho {
    public GerenteComTrabalho(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    public void trabalhar() {
        System.out.println("Gerente " + nome + " está gerenciando a equipe.");
    }
}

class DesenvolvedorComTrabalho extends FuncionarioComTrabalho {
    public DesenvolvedorComTrabalho(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    public void trabalhar() {
        System.out.println("Desenvolvedor " + nome + " está escrevendo código.");
    }
}

// ---------------------------------------------
// Polimorfismo
// ---------------------------------------------

// 5. Polimorfismo com Interfaces (Meios de Transporte)
interface IMeioTransporte {
    void acelerar();
    void frear();
}

class Carro implements IMeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("Carro acelerando...");
    }

    @Override
    public void frear() {
        System.out.println("Carro freando...");
    }
}

class Bicicleta implements IMeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("Bicicleta pedalando mais rápido...");
    }

    @Override
    public void frear() {
        System.out.println("Bicicleta freando...");
    }
}

class Trem implements IMeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("Trem acelerando...");
    }

    @Override
    public void frear() {
        System.out.println("Trem freando...");
    }
}

// 6. Polimorfismo com Classes Abstratas (Animais)
abstract class Animal {
    public abstract void emitirSom();
}

class Cachorro extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Cachorro: Au au!");
    }
}

class Gato extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Gato: Miau!");
    }
}

class Vaca extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Vaca: Muuu!");
    }
}

// ---------------------------------------------
// Abstração
// ---------------------------------------------

// 7. Abstração em um Sistema de Pagamentos
abstract class FormaPagamento {
    public abstract void processarPagamento(double valor);
    public abstract boolean validarPagamento();
}

class CartaoCredito extends FormaPagamento {
    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " com cartão de crédito aprovado.");
        }
    }

    @Override
    public boolean validarPagamento() {
        System.out.println("Validação do cartão de crédito realizada.");
        return true;
    }
}

class Boleto extends FormaPagamento {
    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Boleto de R$" + valor + " gerado.");
        }
    }

    @Override
    public boolean validarPagamento() {
        System.out.println("Validação de dados para boleto realizada.");
        return true;
    }
}

class Pix extends FormaPagamento {
    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " via Pix realizado.");
        }
    }

    @Override
    public boolean validarPagamento() {
        System.out.println("Chave Pix validada.");
        return true;
    }
}

// 8. Sistema de Gestão de Funcionários (Folha de Pagamento)
abstract class FuncionarioFolha {
    protected String nome;
    protected double salario;

    public FuncionarioFolha(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public abstract double calcularSalarioComBonus();

    public void promover(FuncionarioFolha novoFuncionario) {
        novoFuncionario.salario = this.salario;
        System.out.println(nome + " foi promovido para " + novoFuncionario.getClass().getSimpleName());
    }
}

class GerenteFolha extends FuncionarioFolha {
    public GerenteFolha(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    public double calcularSalarioComBonus() {
        return this.salario + (this.salario * 0.20);
    }
}

class DesenvolvedorFolha extends FuncionarioFolha {
    public DesenvolvedorFolha(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    public double calcularSalarioComBonus() {
        return this.salario + (this.salario * 0.10);
    }
}

class EstagiarioFolha extends FuncionarioFolha {
    public EstagiarioFolha(String nome, double salario) {
        super(nome, salario);
    }

    @Override
    public double calcularSalarioComBonus() {
        return this.salario;
    }
}

// ---------------------------------------------
// Testando todos os exercícios
// ---------------------------------------------
public class Main {
    public static void main(String[] args) {
        // Encapsulamento
        ProdutoComDesconto produto = new ProdutoComDesconto("Camiseta", 100, 50);
        produto.aplicarDesconto(20);

        // Herança
        Gerente gerente = new Gerente("Alice", 5000);
        Desenvolvedor desenvolvedor = new Desenvolvedor("Bob", 3000);
        System.out.println("Bônus Gerente: R$" + gerente.calcularBonus());
        System.out.println("Bônus Desenvolvedor: R$" + desenvolvedor.calcularBonus());

        // Polimorfismo com Interfaces
        IMeioTransporte[] transportes = {new Carro(), new Bicicleta(), new Trem()};
        for (IMeioTransporte transporte : transportes) {
            transporte.acelerar();
            transporte.frear();
        }

        // Polimorfismo com Classes Abstratas
        Animal[] animais = {new Cachorro(), new Gato(), new Vaca()};
        for (Animal animal : animais) {
            animal.emitirSom();
        }

        // Abstração em Pagamentos
        FormaPagamento pagamento1 = new CartaoCredito();
        pagamento1.processarPagamento(200.0);

        FormaPagamento pagamento2 = new Boleto();
        pagamento2.processarPagamento(300.0);

        FormaPagamento pagamento3 = new Pix();
        pagamento3.processarPagamento(100.0);

        // Sistema de Gestão de Funcionários
        FuncionarioFolha[] funcionarios = {
                new GerenteFolha("Carlos", 7000),
                new DesenvolvedorFolha("Ana", 4000),
                new EstagiarioFolha("João", 1500)
        };
        double totalFolha = 0;
        for (FuncionarioFolha f : funcionarios) {
            totalFolha += f.calcularSalarioComBonus();
            System.out.println(f.nome + " receberá: R$" + f.calcularSalarioComBonus());
        }
        System.out.println("Total da folha de pagamento: R$" + totalFolha);
    }
}