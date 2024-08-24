package encapsulation;

public interface Transaction {
    void execute();

    String getDetails();

    default void testeMetodoDefault(){
        System.out.println("Teste");
    }

    static void testeMetodoStatic(){}
}
