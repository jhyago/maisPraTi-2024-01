import singleton.ConfigurationManager;
import polymorphism.Animal;
import polymorphism.Dog;
import polymorphism.Cat;

public class Main {
    public static void main(String[] args) {
//        ConfigurationManager configManager = ConfigurationManager.getInstance();
//
//        String dbUser = configManager.getProperty("db.user");
//        System.out.println("Usuário do banco de dados " + dbUser);

        Animal myAnimal = new Animal();
        Dog myDog = new Dog();
        Cat myCat = new Cat();

        myAnimal.makeSound();
        myDog.makeSound();
        myCat.makeSound();
    }
}