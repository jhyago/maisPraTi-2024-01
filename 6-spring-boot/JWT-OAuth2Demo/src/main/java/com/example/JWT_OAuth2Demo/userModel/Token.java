// Declaração do pacote onde a classe Token está localizada
package com.example.JWT_OAuth2Demo.userModel;

// Declaração da classe Token, que serve como um modelo de dados (DTO) para encapsular os tokens de acesso e refresh
public class Token {

    // Declaração de variáveis privadas que representam o ID do usuário e os tokens de acesso e refresh
    private String userId; // Armazena o ID do usuário
    private String accessToken; // Armazena o token de acesso (JWT)
    private String refreshToken; // Armazena o token de refresh (JWT)

    // Método getter para o ID do usuário
    public String getUserId() {
        return userId; // Retorna o valor da variável userId
    }

    // Método setter para definir o ID do usuário
    public void setUserId(String userId) {
        this.userId = userId; // Atribui o valor do parâmetro userId à variável privada userId
    }

    // Método getter para obter o token de acesso
    public String getAccessToken() {
        return accessToken; // Retorna o valor da variável accessToken
    }

    // Método setter para definir o token de acesso
    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken; // Atribui o valor do parâmetro accessToken à variável privada accessToken
    }

    // Método getter para obter o token de refresh
    public String getRefreshToken() {
        return refreshToken; // Retorna o valor da variável refreshToken
    }

    // Método setter para definir o token de refresh
    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken; // Atribui o valor do parâmetro refreshToken à variável privada refreshToken
    }
}