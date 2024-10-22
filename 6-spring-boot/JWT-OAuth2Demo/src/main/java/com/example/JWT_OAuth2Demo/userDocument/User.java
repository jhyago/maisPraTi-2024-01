// Declaração do pacote onde a classe User está localizada
package com.example.JWT_OAuth2Demo.userDocument;

// Importações necessárias para usar anotações do Lombok e funcionalidades de segurança
import lombok.Data; // Lombok gera automaticamente getters, setters, equals, hashCode, e toString
import lombok.NoArgsConstructor; // Lombok gera um construtor sem argumentos
import lombok.NonNull; // Lombok adiciona verificação para garantir que o valor não seja nulo
import lombok.RequiredArgsConstructor; // Lombok gera um construtor com argumentos obrigatórios (campos anotados com @NonNull)

// Importações do Spring Data para definir mapeamento com MongoDB e ID do documento
import org.springframework.data.annotation.Id; // Define o campo id como a chave primária do documento no MongoDB
import org.springframework.data.mongodb.core.mapping.Document; // Marca a classe como um documento no MongoDB

// Importações relacionadas à segurança do Spring Security
import org.springframework.security.core.GrantedAuthority; // Interface que representa permissões concedidas a um usuário
import org.springframework.security.core.userdetails.UserDetails; // Interface padrão do Spring Security que contém os detalhes do usuário

// Importações para trabalhar com coleções, como listas
import java.util.Collection; // Representa um grupo de objetos, como listas ou conjuntos
import java.util.Collections; // Fornece métodos estáticos para trabalhar com coleções imutáveis, como listas vazias

// Anotação que marca a classe como um documento no MongoDB, associando essa classe a uma coleção do banco de dados
@Document
// Lombok gera automaticamente getters, setters, equals, hashCode, e toString para todos os campos da classe
@Data
// Lombok gera um construtor para os campos obrigatórios anotados com @NonNull
@RequiredArgsConstructor
// Lombok gera um construtor sem argumentos
@NoArgsConstructor
// A classe User implementa a interface UserDetails, que faz parte do Spring Security, tornando-a uma entidade que pode ser autenticada
public class User implements UserDetails {

    // Campo id que representa a chave primária do documento no MongoDB
    @Id
    private String id;

    // Campo obrigatório (não nulo) que armazena o nome de usuário
    @NonNull
    private String username;

    // Campo obrigatório (não nulo) que armazena a senha (deve ser codificada antes de ser armazenada)
    @NonNull
    private String password;

    // Implementação do método getAuthorities da interface UserDetails.
    // Retorna uma coleção de autoridades (roles/authorities), neste caso, uma lista vazia, já que o exemplo não define roles específicas
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.emptyList(); // Nenhuma autoridade é atribuída por enquanto
    }

    // Implementação do método isAccountNonExpired da interface UserDetails.
    // Indica se a conta do usuário está expirada. Aqui, retorna sempre true, indicando que a conta nunca expira
    public boolean isAccountNonExpired() {
        return true; // A conta do usuário nunca expira
    }

    // Implementação do método isAccountNonLocked da interface UserDetails.
    // Indica se a conta do usuário está bloqueada. Aqui, retorna sempre true, indicando que a conta nunca está bloqueada
    public boolean isAccountNonLocked() {
        return true; // A conta do usuário nunca está bloqueada
    }

    // Implementação do método isCredentialsNonExpired da interface UserDetails.
    // Indica se as credenciais do usuário (senha) estão expiradas. Aqui, retorna sempre true, indicando que as credenciais nunca expiram
    public boolean isCredentialsNonExpired() {
        return true; // As credenciais nunca expiram
    }

    // Implementação do método isEnabled da interface UserDetails.
    // Indica se o usuário está habilitado ou desabilitado. Aqui, retorna sempre true, indicando que o usuário está sempre habilitado
    public boolean isEnabled() {
        return true; // O usuário está sempre habilitado
    }

    // Sobrescreve o método getUsername da interface UserDetails para retornar o nome de usuário da entidade User
    @Override
    public String getUsername() {
        return this.username; // Retorna o nome de usuário
    }
}