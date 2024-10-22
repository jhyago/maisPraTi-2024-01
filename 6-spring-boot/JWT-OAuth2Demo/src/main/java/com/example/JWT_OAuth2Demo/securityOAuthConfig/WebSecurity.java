// Declaração do pacote onde a classe WebSecurity está localizada
package com.example.JWT_OAuth2Demo.securityOAuthConfig;

// Importações necessárias para a manipulação de chaves de segurança e tokens JWT com a biblioteca Nimbus
import com.nimbusds.jose.jwk.JWK; // Representa uma chave JSON Web Key
import com.nimbusds.jose.jwk.JWKSet; // Representa um conjunto de JWKs
import com.nimbusds.jose.jwk.RSAKey; // Representa uma chave pública/privada RSA no formato JWK
import com.nimbusds.jose.jwk.source.ImmutableJWKSet; // Fonte de JWK imutável usada para validar tokens
import com.nimbusds.jose.jwk.source.JWKSource; // Interface que define a fonte para obter JWKs
import com.nimbusds.jose.proc.SecurityContext; // Contexto de segurança utilizado durante o processamento de JWTs
import com.nimbusds.jwt.proc.JWTProcessor; // Processador para tokens JWT

// Importações de bibliotecas de logging e anotações do Spring
import lombok.extern.slf4j.Slf4j; // Lombok para facilitar a adição de logs
import org.springframework.beans.factory.annotation.Autowired; // Para injeção automática de dependências
import org.springframework.beans.factory.annotation.Qualifier; // Para definir qualificador ao injetar beans
import org.springframework.context.annotation.Bean; // Define que o método cria um bean Spring
import org.springframework.context.annotation.Configuration; // Define a classe como uma classe de configuração do Spring
import org.springframework.context.annotation.Primary; // Marca um bean como primário quando existem múltiplos beans do mesmo tipo
import org.springframework.security.authentication.dao.DaoAuthenticationProvider; // Provedor de autenticação baseado em usuários armazenados no banco de dados
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity; // Habilita segurança baseada em métodos (com @PreAuthorize)
import org.springframework.security.config.annotation.web.builders.HttpSecurity; // Classe usada para configurar a segurança HTTP no Spring Security
import org.springframework.security.config.http.SessionCreationPolicy; // Define a política de criação de sessões (stateless, stateful)
import org.springframework.security.crypto.password.PasswordEncoder; // Interface para codificar senhas
import org.springframework.security.oauth2.jwt.JwtDecoder; // Interface usada para decodificar tokens JWT
import org.springframework.security.oauth2.jwt.JwtEncoder; // Interface usada para codificar tokens JWT
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder; // Implementação de JwtDecoder utilizando a biblioteca Nimbus
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder; // Implementação de JwtEncoder utilizando a biblioteca Nimbus
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationProvider; // Provedor de autenticação para tokens JWT
import org.springframework.security.oauth2.server.resource.web.BearerTokenAuthenticationEntryPoint; // Configura uma resposta quando a autenticação com token Bearer falha
import org.springframework.security.oauth2.server.resource.web.access.BearerTokenAccessDeniedHandler; // Configura uma resposta quando o acesso é negado ao usar um token Bearer
import org.springframework.security.provisioning.UserDetailsManager; // Interface que fornece métodos para gerenciar detalhes de usuários (CRUD)
import org.springframework.security.web.SecurityFilterChain; // Interface que representa a cadeia de filtros de segurança HTTP

// Define esta classe como uma classe de configuração do Spring para configurar a segurança da aplicação
@Configuration
// Habilita segurança baseada em métodos com anotações, como @PreAuthorize
@EnableMethodSecurity
// Adiciona suporte a logs com a anotação @Slf4j do Lombok
@Slf4j
public class WebSecurity {

    // Injeta automaticamente o conversor personalizado que converte tokens JWT em objetos de autenticação
    @Autowired
    JWTtoUserConvertor jwTtoUserConvertor;

    // Injeta automaticamente a classe KeyUtils, responsável pela geração e gerenciamento de chaves RSA
    @Autowired
    KeyUtils keyUtils;

    // Injeta automaticamente o codificador de senhas para uso no DaoAuthenticationProvider
    @Autowired
    PasswordEncoder passwordEncoder;

    // Injeta automaticamente o UserDetailsManager, que gerencia as informações dos usuários
    @Autowired
    UserDetailsManager userDetailsManager;

    // Define o bean SecurityFilterChain, que configura a cadeia de filtros de segurança HTTP
    @Bean
    public SecurityFilterChain securityFilterChain (HttpSecurity http) throws Exception {
        // Configura a segurança HTTP
        http
                // Configura as regras de autorização
                .authorizeHttpRequests((authorize) -> authorize
                        // Permite o acesso a todas as requisições que comecem com "/api/auth/*"
                        .requestMatchers("/api/auth/*").permitAll()
                        // Qualquer outra requisição precisa estar autenticada
                        .anyRequest().authenticated())
                // Desabilita a proteção CSRF (Cross-Site Request Forgery)
                .csrf(csrf -> csrf.disable())
                // Desabilita CORS (Cross-Origin Resource Sharing)
                .cors(cors -> cors.disable())
                // Desabilita a autenticação HTTP básica
                .httpBasic(basic -> basic.disable())
                // Configura o servidor OAuth2 para usar JWTs e associa o conversor JWT personalizado
                .oauth2ResourceServer((oauth2) -> oauth2
                        .jwt((jwt) -> jwt.jwtAuthenticationConverter(jwTtoUserConvertor)))
                // Define que o gerenciamento de sessões será stateless (sem manutenção de sessões no servidor)
                .sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                // Configura o tratamento de exceções para autenticação falhada e acesso negado
                .exceptionHandling((exceptions) -> exceptions
                        // Define como tratar exceções de autenticação com tokens Bearer
                        .authenticationEntryPoint(new BearerTokenAuthenticationEntryPoint())
                        // Define como tratar exceções de acesso negado quando o token Bearer está inválido
                        .accessDeniedHandler(new BearerTokenAccessDeniedHandler()));

        // Constrói e retorna a configuração de segurança HTTP
        return http.build();
    }

    // Define um bean que decodifica tokens de acesso JWT usando a chave pública e privada RSA
    @Bean
    @Primary // Marca este decoder como primário para decodificar tokens de acesso
    JwtDecoder jwtAccessTokenDecoder() {
        // Cria uma chave RSA pública e privada (RSAKey) para o token de acesso
        JWK jwk = new RSAKey.Builder(keyUtils.getAccessTokenPublicKey())
                .privateKey(keyUtils.getAccessTokenPrivateKey())
                .build();
        // Cria uma fonte imutável de JWKs a partir do conjunto de chaves (JWKSet)
        JWKSource<SecurityContext> jwks = new ImmutableJWKSet<>(new JWKSet(jwk));

        // Retorna o JwtDecoder que usa a biblioteca Nimbus para decodificar tokens JWT
        return new NimbusJwtDecoder((JWTProcessor<SecurityContext>) jwks);
    }

    // Define um bean para codificar tokens de refresh JWT com uma chave RSA
    @Bean
    @Qualifier("jwtRefreshTokenEncoder") // Qualifica este bean como o codificador de tokens de refresh
    JwtEncoder jwtRefreshTokenEncoder(){
        // Cria uma chave RSA pública e privada (RSAKey) para o token de refresh
        JWK jwk = new RSAKey.Builder(keyUtils.getRefreshTokenPublicKey())
                .privateKey(keyUtils.getRefreshTokenPrivateKey())
                .build();

        // Cria uma fonte imutável de JWKs a partir do conjunto de chaves (JWKSet)
        JWKSource<SecurityContext> jwks = new ImmutableJWKSet<>(new JWKSet(jwk));

        // Retorna o JwtEncoder que usa a biblioteca Nimbus para codificar tokens JWT
        return new NimbusJwtEncoder(jwks);
    }

    // Define um bean para decodificar tokens de refresh JWT usando apenas a chave pública
    @Bean
    @Qualifier("jwtRefreshTokenDecoder") // Qualifica este bean como o decodificador de tokens de refresh
    JwtDecoder jwtRefreshTokenDecoder(){
        // Retorna um JwtDecoder que decodifica tokens JWT utilizando a chave pública RSA
        return NimbusJwtDecoder.withPublicKey(keyUtils.getRefreshTokenPublicKey()).build();
    }

    // Define um bean para fornecer autenticação JWT para tokens de refresh
    @Bean
    @Qualifier("jwtRefreshTokenAuthProvider") // Qualifica este bean como o provedor de autenticação para tokens de refresh
    JwtAuthenticationProvider jwtRefreshTokenAuthProvider() {
        // Cria um JwtAuthenticationProvider que usa o decodificador de tokens de refresh
        JwtAuthenticationProvider provider = new JwtAuthenticationProvider(jwtRefreshTokenDecoder());
        // Configura o conversor de autenticação JWT personalizado
        provider.setJwtAuthenticationConverter(jwTtoUserConvertor);
        // Retorna o provedor de autenticação configurado
        return provider;
    }

    // Define um bean para o DaoAuthenticationProvider, que autentica usuários a partir de um banco de dados
    @Bean
    DaoAuthenticationProvider daoAuthenticationProvider() {
        // Cria uma nova instância de DaoAuthenticationProvider
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();

        // Define o codificador de senhas para verificar as senhas dos usuários
        provider.setPasswordEncoder(passwordEncoder);
        // Define o serviço de usuários (UserDetailsManager) para carregar os dados dos usuários
        provider.setUserDetailsService(userDetailsManager);

        // Retorna o provedor de autenticação configurado
        return provider;
    }
}