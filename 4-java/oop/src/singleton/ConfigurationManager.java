package singleton;

import java.io.IOException;
import java.util.Properties;
import java.io.InputStream;

public class ConfigurationManager {
    private static ConfigurationManager instance;

    private Properties properties;

    private ConfigurationManager(){
        this.properties = new Properties();
        try ( InputStream input =
            getClass().getClassLoader().getResourceAsStream("Config.properties")) {

            if(input == null){
                System.out.println("O arquivo de configurações não foi encontrado.");

                return;
            }

            properties.load(input);
        } catch (IOException exception){
            exception.printStackTrace();
        }
    }

    public static ConfigurationManager getInstance(){
        if(instance == null){
           instance = new ConfigurationManager();
        }

        return instance;
    }

    public String getProperty(String key){
        return properties.getProperty(key);
    }
}
