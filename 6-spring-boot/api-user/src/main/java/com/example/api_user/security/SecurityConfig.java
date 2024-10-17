// Define o pacote onde esta classe reside
package com.example.api_user.security;

// Importações necessárias para configurar a segurança e autenticação
import com.example.api_user.service.CustomUserDetailsService; // Serviço personalizado para carregar os detalhes do usuário.
import org.springframework.context.annotation.Bean; // Define que um método cria um bean gerenciado pelo Spring.
import org.springframework.context.annotation.Configuration; // Marca a classe como uma classe de configuração do Spring.
import org.springframework.security.authentication.AuthenticationManager; // Gerencia o processo de autenticação no Spring Security.
import org.springframework.security.authentication.AuthenticationProvider; // Interface que autentica um objeto com base em uma estratégia de autenticação.
import org.springframework.security.authentication.dao.DaoAuthenticationProvider; // Implementa um AuthenticationProvider usando o padrão DAO (Data Access Object).
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration; // Permite configurar a autenticação.
import org.springframework.security.config.annotation.web.builders.HttpSecurity; // Permite configurar a segurança da aplicação, como endpoints protegidos.
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity; // Habilita a segurança baseada em web no Spring Security.
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; // Classe para criptografar senhas usando o algoritmo BCrypt.
import org.springframework.security.crypto.password.PasswordEncoder; // Interface usada para criptografar e verificar senhas.
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter; // Converte tokens JWT em autenticações Spring Security.
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter; // Converte claims JWT em autoridades do Spring Security.
import org.springframework.security.web.SecurityFilterChain; // Define a cadeia de filtros de segurança no Spring Security.
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter; // Filtro que processa a autenticação baseada em nome de usuário e senha.

// Anotação @Configuration:
// - O Spring Framework usa essa anotação para marcar classes como **classes de configuração**.
// - Classes anotadas com @Configuration são tratadas como fontes de definições de beans, ou seja, é onde o Spring procura por métodos que criam e configuram beans.
// - No contexto do Spring, "bean" refere-se a objetos que são gerenciados pelo contêiner de IoC (Inversão de Controle), significando que o Spring controla o ciclo de vida desses objetos.
@Configuration

// Anotação @EnableWebSecurity:
// - Habilita o **Spring Security** para aplicar segurança em toda a aplicação baseada na web.
// - É necessário em classes que configuram segurança, especialmente se você estiver sobrescrevendo as configurações padrão.
// - Essa anotação automaticamente cria as estruturas básicas de segurança e é o ponto de entrada para customizações de segurança (como autenticação e autorização).
@EnableWebSecurity
public class SecurityConfig {

    // Dependências injetadas para o filtro JWT e o serviço de detalhes do usuário.
    private final JwtAuthenticationFilter jwtAuthFilter; // Filtro de autenticação JWT para verificar tokens em cada requisição.
    private final CustomUserDetailsService customUserDetailsService; // Serviço personalizado que carrega os detalhes do usuário a partir do banco de dados.

    // Construtor da classe, que injeta as dependências (JwtAuthenticationFilter e CustomUserDetailsService).
    public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter,
                          CustomUserDetailsService customUserDetailsService) {
        this.jwtAuthFilter = jwtAuthFilter;
        this.customUserDetailsService = customUserDetailsService;
    }

    // Anotação @Bean:
    // - Define que este método cria um **bean** gerenciado pelo Spring.
    // - Um **bean** é um objeto criado, configurado e gerenciado pelo Spring, controlando seu ciclo de vida e disponibilizando-o para ser injetado em outras partes da aplicação.
    // - Métodos anotados com @Bean geralmente retornam instâncias de objetos que o Spring deve gerenciar.
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        // O AuthenticationManager gerencia o processo de autenticação.
        // Ele é configurado com base na configuração definida em AuthenticationConfiguration.
        return config.getAuthenticationManager();
    }

    // Cria um bean para o PasswordEncoder.
    // O PasswordEncoder é usado para criptografar e verificar senhas.
    @Bean
    public PasswordEncoder passwordEncoder() {
        // Retorna uma instância de BCryptPasswordEncoder, que usa o algoritmo BCrypt para criptografar senhas.
        // **BCrypt** é um dos algoritmos mais seguros para hash de senhas, pois é resistente a ataques de força bruta e tem um fator de complexidade ajustável.
        // O Spring Security usa isso para armazenar senhas de forma segura no banco de dados.
        return new BCryptPasswordEncoder();
    }

    // Cria um bean para o AuthenticationProvider.
    // O AuthenticationProvider autentica o usuário com base nas informações do banco de dados (DAO).
    @Bean
    public AuthenticationProvider authenticationProvider() {
        // DaoAuthenticationProvider: Provê autenticação baseada em dados persistidos no banco (usando o padrão DAO).
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        // Configura o UserDetailsService personalizado para carregar os detalhes do usuário a partir do banco de dados.
        authProvider.setUserDetailsService(customUserDetailsService);

        // Configura o PasswordEncoder para criptografar as senhas durante a autenticação.
        authProvider.setPasswordEncoder(passwordEncoder());

        return authProvider;
    }

    // Método que configura a cadeia de filtros de segurança.
    // O SecurityFilterChain define a sequência de filtros de segurança a serem aplicados em todas as requisições HTTP.
    // Cada requisição HTTP passa por uma cadeia de filtros que determinam se a requisição deve ser autenticada ou autorizada.
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // Configuração da segurança HTTP usando o HttpSecurity.
        // O HttpSecurity permite personalizar a configuração de segurança baseada na web.
        // Desabilita a proteção CSRF (Cross-Site Request Forgery).
        http
                .csrf(csrf -> csrf.disable())

                // **CSRF (Cross-Site Request Forgery)**:
                // - O CSRF é uma vulnerabilidade que permite que um atacante faça requisições maliciosas em nome de um usuário autenticado sem o seu consentimento.
                // - No entanto, o CSRF geralmente não é necessário quando usamos tokens JWT, porque a proteção CSRF é projetada principalmente para sessões baseadas em cookies.
                // - Como a autenticação com JWT usa um token que é enviado explicitamente pelo cliente em cada requisição (geralmente no cabeçalho Authorization), o CSRF pode ser desabilitado.

                // Define as regras de autorização para as requisições HTTP.
                .authorizeHttpRequests(auth -> auth
                        // Permite todas as requisições para o caminho "/auth/**" (rota de autenticação).
                        .requestMatchers("/auth/**").permitAll()

                        // Requere autenticação para todas as requisições que começam com "/api/**".
                        // **authenticated()** significa que apenas usuários autenticados poderão acessar as rotas "/api/**".
                        .requestMatchers("/api/**").authenticated()

                        // Qualquer outra requisição precisa estar autenticada.
                        .anyRequest().authenticated()
                )

                // Configura o login via OAuth2.
                // **oauth2Login()** define o fluxo de login OAuth2, permitindo que usuários se autentiquem usando provedores OAuth2 como GitHub ou Google.
                .oauth2Login(oauth2 -> oauth2.loginPage("/auth/login"))

                // Configura o OAuth2 Resource Server para verificar tokens JWT.
                // **oauth2ResourceServer()** habilita o servidor de recursos OAuth2 para validar tokens JWT recebidos no cabeçalho Authorization.
                .oauth2ResourceServer(oauth2 -> oauth2.jwt(jwt -> jwt
                        // Usa o JwtAuthenticationConverter para converter tokens JWT em autenticações Spring Security.
                        .jwtAuthenticationConverter(jwtAuthenticationConverter())
                ))

                // Configura o provider de autenticação (DaoAuthenticationProvider) para ser usado no processo de autenticação.
                .authenticationProvider(authenticationProvider())

                // Adiciona o filtro de autenticação JWT antes do UsernamePasswordAuthenticationFilter.
                // Isso garante que as requisições sejam verificadas quanto à validade do token JWT antes da autenticação por nome de usuário/senha.
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        // Retorna o HttpSecurity configurado como um SecurityFilterChain.
        return http.build();
    }

    // Método que configura o JwtAuthenticationConverter.
    // O JwtAuthenticationConverter é responsável por converter o token JWT em uma autenticação Spring Security.
    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        // Converte as claims de um JWT em autoridades (permissões) do Spring Security.
        JwtGrantedAuthoritiesConverter grantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();

        // Define o nome da claim onde os papéis (roles) dos usuários são armazenados no JWT.
        // Neste caso, a claim "role" contém os papéis do usuário (por exemplo, ROLE_USER ou ROLE_ADMIN).
        grantedAuthoritiesConverter.setAuthoritiesClaimName("role");

        // Define o prefixo para as autoridades. Por padrão, todas as autoridades terão o prefixo "ROLE_".
        grantedAuthoritiesConverter.setAuthorityPrefix("ROLE_");

        // Cria um JwtAuthenticationConverter e configura o JwtGrantedAuthoritiesConverter.
        JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(grantedAuthoritiesConverter);

        // Retorna o JwtAuthenticationConverter configurado.
        return jwtAuthenticationConverter;
    }
}