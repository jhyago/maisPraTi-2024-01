// Define o pacote onde a classe reside
package com.example.api_user.security;

// Importa o serviço personalizado que carrega os detalhes do usuário.
// Esse serviço é utilizado para buscar as informações do usuário no banco de dados com base no nome de usuário.
import com.example.api_user.service.CustomUserDetailsService;

// Importa classes para manipulação de requisições e respostas HTTP em um ambiente de servlet.
import jakarta.servlet.FilterChain; // Representa a cadeia de filtros que a requisição precisa percorrer.
import jakarta.servlet.ServletException; // Exceção que pode ser lançada durante o processamento de requisições.
import jakarta.servlet.http.HttpServletRequest; // Representa a requisição HTTP.
import jakarta.servlet.http.HttpServletResponse; // Representa a resposta HTTP.

// Importa o pacote de configuração do Spring.
// A anotação @Configuration serve para registrar a classe no contexto do Spring.
import org.springframework.context.annotation.Configuration;

// Importa classes do Spring Security relacionadas à autenticação.
// UsernamePasswordAuthenticationToken é o token que o Spring Security usa para autenticar o usuário baseado em nome de usuário e senha.
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

// Importa o SecurityContextHolder, que armazena as informações de segurança (autenticação) durante a requisição atual.
import org.springframework.security.core.context.SecurityContextHolder;

// Importa o UserDetails, que contém as informações sobre o usuário autenticado.
import org.springframework.security.core.userdetails.UserDetails;

// Importa uma classe que captura detalhes da autenticação da requisição (como o IP, navegador, etc.).
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;

// Importa a classe que permite a criação de filtros para serem aplicados em cada requisição.
import org.springframework.web.filter.OncePerRequestFilter; // Garante que o filtro será executado apenas uma vez por requisição.

// Importa a classe IOException, lançada caso ocorra um erro de I/O durante o processamento da requisição.
import java.io.IOException;

// Anotação @Configuration:
// - Indica que esta classe faz parte da configuração do Spring. Isso registra a classe como um bean gerenciado pelo Spring.
@Configuration
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    // Dependências injetadas por meio do construtor para manipulação de tokens e carregamento de usuários.
    private final JwtTokenProvider jwtTokenProvider;
    private final CustomUserDetailsService userDetailsService;

    // Construtor que injeta o JwtTokenProvider e o CustomUserDetailsService.
    // - jwtTokenProvider: Responsável por gerar, validar e extrair informações de tokens JWT.
    // - userDetailsService: Serviço que carrega os detalhes do usuário a partir do banco de dados.
    public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider, CustomUserDetailsService userDetailsService){
        this.jwtTokenProvider = jwtTokenProvider;
        this.userDetailsService = userDetailsService;
    }

    // Sobrescreve o método doFilterInternal para aplicar a lógica do filtro em cada requisição HTTP.
    // - Esse método será chamado automaticamente para cada requisição que chega ao servidor.
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // Extrai o valor do cabeçalho "Authorization" da requisição HTTP.
        String authHeader = request.getHeader("Authorization");

        // Se o cabeçalho "Authorization" estiver ausente ou não começar com "Bearer ", o filtro não tenta autenticar.
        // A requisição continua sem autenticação, pois não há um token válido.
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        // Remove a parte "Bearer " do token e mantém apenas o JWT em si.
        String jwt = authHeader.substring(7);

        // Extrai o nome de usuário (username) do token JWT usando o jwtTokenProvider.
        String username = jwtTokenProvider.extractUsername(jwt);

        // Inicializa o objeto UserDetails como null.
        UserDetails userDetails = null;

        // Se o nome de usuário for válido e não houver autenticação já ativa no contexto de segurança...
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            // Carrega os detalhes do usuário a partir do nome de usuário extraído do token.
            userDetails = userDetailsService.loadUserByUsername(username);
        }

        // Verifica se o token é válido e se o usuário carregado é o correto.
        // Se for válido, criamos um UsernamePasswordAuthenticationToken.
        UsernamePasswordAuthenticationToken authenticationToken = null;
        if (jwtTokenProvider.isTokenValid(jwt, userDetails)) {
            authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

            // Configura os detalhes da autenticação (IP, informações da requisição, etc.).
            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        }

        // Define o objeto de autenticação no SecurityContext do Spring Security.
        // Isso autentica o usuário para o contexto da requisição atual.
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);

        // Continua o processamento da requisição, passando para o próximo filtro na cadeia de filtros.
        filterChain.doFilter(request, response);
    }
}