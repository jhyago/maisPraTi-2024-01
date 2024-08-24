import singleton.ConfigurationManager;

public class Main {
    public static void main(String[] args) {
        ConfigurationManager configManager = ConfigurationManager.getInstance();

        String dbUser = configManager.getProperty("db.user");
        System.out.println("Usuário do banco de dados " + dbUser);
    }
}