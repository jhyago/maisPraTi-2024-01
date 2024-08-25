package singleton; // Define o pacote onde a classe está localizada.

import java.io.IOException; // Importa a classe IOException para tratar erros de entrada/saída.
import java.util.Properties; // Importa a classe Properties, que é usada para carregar as propriedades do arquivo.
import java.io.InputStream; // Importa a classe InputStream para ler os dados do arquivo de configurações.

public class ConfigurationManager { // Define a classe ConfigurationManager, que será um Singleton.
    private static ConfigurationManager instance; // Declara uma variável estática que armazenará a única instância da classe.

    private Properties properties; // Declara um objeto Properties que armazenará as propriedades carregadas do arquivo.

    private ConfigurationManager(){ // Construtor privado impede que outras classes instanciem diretamente esta classe.
        this.properties = new Properties(); // Inicializa o objeto Properties.
        try ( InputStream input =
                      getClass().getClassLoader().getResourceAsStream("Config.properties")) { // Tenta abrir o arquivo "Config.properties" usando o class loader.

            if(input == null){ // Verifica se o arquivo não foi encontrado.
                System.out.println("O arquivo de configurações não foi encontrado."); // Imprime uma mensagem informando que o arquivo não foi encontrado.
                return; // Sai do construtor, deixando o objeto Properties vazio.
            }

            properties.load(input); // Carrega as propriedades do arquivo no objeto Properties.
        } catch (IOException exception){ // Captura possíveis exceções de entrada/saída.
            exception.printStackTrace(); // Imprime o stack trace da exceção para ajudar na depuração.
        }
    }

    public static ConfigurationManager getInstance(){ // Método estático que retorna a instância única da classe.
        if(instance == null){ // Verifica se a instância ainda não foi criada.
            instance = new ConfigurationManager(); // Cria a instância única da classe se ela ainda não existir.
        }

        return instance; // Retorna a instância única.
    }

    public String getProperty(String key){ // Método público que retorna o valor de uma propriedade com base na chave fornecida.
        return properties.getProperty(key); // Retorna o valor associado à chave, ou null se a chave não existir.
    }
}