// Declaração do pacote onde a classe Login está localizada
package com.example.JWT_OAuth2Demo.userModel;

// Declaração da classe Login, que serve como um modelo de dados (DTO) para transportar as credenciais de login
public class Login {

    // Declaração de variáveis privadas que representam o nome de usuário e a senha
    private String username; // Armazena o nome de usuário fornecido no processo de login
    private String password; // Armazena a senha fornecida no processo de login

    // Método getter para obter o nome de usuário
    public String getUsername() {
        return username; // Retorna o valor da variável username
    }

    // Método setter para definir o nome de usuário
    public void setUsername(String userName) {
        // Atualiza o valor da variável username com o valor fornecido como argumento
        this.username = userName; // Usa o parâmetro userName para definir a variável
    }

    // Método getter para obter a senha
    public String getPassword() {
        return password; // Retorna o valor da variável password
    }

    // Método setter para definir a senha
    public void setPassword(String password) {
        // Atualiza o valor da variável password com o valor fornecido como argumento
        this.password = password; // Usa o parâmetro password para definir a variável
    }
}