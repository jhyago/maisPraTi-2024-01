// Declaração do pacote onde a classe SignUp está localizada
package com.example.JWT_OAuth2Demo.userModel;

// Importação das anotações do Lombok para gerar automaticamente getters e setters
import lombok.Getter; // Lombok gera automaticamente os métodos get para os campos da classe
import lombok.Setter; // Lombok gera automaticamente os métodos set para os campos da classe

// Anotação Lombok para gerar automaticamente os métodos getter e setter para todos os campos da classe
@Getter
@Setter
// Declaração da classe SignUp, que serve como um modelo de dados (DTO) para transportar as informações de cadastro de um novo usuário
public class SignUp {

    // Declaração de variáveis privadas que representam o nome de usuário e a senha do novo usuário
    private String username; // Armazena o nome de usuário fornecido no processo de cadastro
    private String password; // Armazena a senha fornecida no processo de cadastro

    // Construtor da classe, que recebe o nome de usuário e a senha como parâmetros
    public SignUp(String username, String password) {
        // Chamada ao construtor da superclasse (Object). Neste caso, não faz nada significativo, mas é uma boa prática
        super();
        // Atribui o valor do parâmetro username ao campo privado this.username
        this.username = username;
        // Atribui o valor do parâmetro password ao campo privado this.password
        this.password = password;
    }

    // Método getter para o nome de usuário, retornando o valor da variável privada username
    public String getUsername() {
        return username; // Retorna o nome de usuário
    }

    // Método setter para o nome de usuário, atribuindo um novo valor à variável username
    public void setUserName(String username) {
        this.username = username; // Atribui o valor passado ao campo privado username
    }

    // Método getter para a senha, retornando o valor da variável privada password
    public String getPassword() {
        return password; // Retorna a senha
    }

    // Método setter para a senha, atribuindo um novo valor à variável password
    public void setPassword(String password) {
        this.password = password; // Atribui o valor passado ao campo privado password
    }
}