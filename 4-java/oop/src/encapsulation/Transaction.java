package encapsulation; // Define o pacote onde a interface está localizada.

public interface Transaction { // Declara a interface Transaction que define um contrato para transações.

    void execute(); // Método abstrato que deve ser implementado para executar a transação.

    String getDetails(); // Método abstrato que deve ser implementado para fornecer detalhes sobre a transação.

    default void testeMetodoDefault(){ // Método default, que fornece uma implementação padrão e opcional para as classes que implementam a interface.
        System.out.println("Teste"); // Imprime "Teste" no console. Pode ser substituído ou utilizado como está pelas classes implementadoras.
    }

    static void testeMetodoStatic(){ // Método estático, que pode ser chamado diretamente a partir da interface sem precisar de uma instância.
        // Este método estático pode ser usado para funcionalidades utilitárias relacionadas a transações.
    }
}