// Declaração do pacote onde o TokenGenerator está localizado
package com.example.JWT_OAuth2Demo.securityOAuthConfig;

// Importações necessárias para manipulação de tempo e formatação de mensagens
import java.text.MessageFormat; // Utilizado para formatação de mensagens de erro
import java.time.Duration; // Representa uma quantidade de tempo (utilizado para medir a duração entre dois instantes)
import java.time.Instant; // Representa um ponto exato no tempo (preciso até o nanossegundo)
import java.time.temporal.ChronoUnit; // Para manipular unidades de tempo, como minutos e dias

// Importações do Spring para injeção de dependências e manipulação de autenticação
import org.springframework.beans.factory.annotation.Autowired; // Para injeção automática de dependências
import org.springframework.beans.factory.annotation.Qualifier; // Para especificar beans nomeados quando há múltiplos do mesmo tipo
import org.springframework.security.core.Authentication; // Interface que representa o estado atual da autenticação
import org.springframework.security.oauth2.jwt.JwtClaimsSet; // Representa o conjunto de claims (informações) de um token JWT
import org.springframework.security.oauth2.jwt.JwtEncoder; // Responsável por codificar (gerar) tokens JWT
import org.springframework.security.oauth2.jwt.JwtEncoderParameters; // Parâmetros que são usados pelo JwtEncoder para codificar o token

// Importações do projeto
import com.example.JWT_OAuth2Demo.userDocument.User; // Classe que representa o documento do usuário no banco de dados
import com.example.JWT_OAuth2Demo.userModel.Token; // Classe que representa o objeto Token (com access token e refresh token)
import org.springframework.security.authentication.BadCredentialsException; // Exceção lançada em caso de credenciais inválidas
import org.springframework.security.oauth2.jwt.Jwt; // Representa um token JWT
import org.springframework.stereotype.Component; // Define a classe como um componente Spring (bean gerenciado)

@Component // Marca a classe como um componente Spring que será gerenciado automaticamente
public class TokenGenerator {

    // Injeta automaticamente o objeto JwtEncoder para codificar os tokens de acesso
    @Autowired
    JwtEncoder accessTokenEncoder;

    // Injeta automaticamente o JwtEncoder específico para codificação de tokens de refresh
    @Autowired
    @Qualifier("jwtRefreshTokenEncoder") // Qualificador para diferenciar o JwtEncoder específico para refresh tokens
            JwtEncoder refreshTokenEncoder;

    // Método privado que cria e retorna o access token com tempo de expiração curto (5 minutos)
    private String createAccessToken(Authentication authentication) {
        // Converte o principal (usuário autenticado) em um objeto User
        User user = (User) authentication.getPrincipal();
        // Pega o instante atual (momento exato em que o token está sendo gerado)
        Instant now = Instant.now();

        // Cria o conjunto de claims do JWT, que contém as informações que serão incluídas no token
        JwtClaimsSet claimsSet = JwtClaimsSet.builder()
                .issuer("Jaques") // Define o emissor do token (nesse caso, "Jaques")
                .issuedAt(now) // Define o momento exato em que o token foi gerado
                .expiresAt(now.plus(5, ChronoUnit.MINUTES)) // Define a data de expiração do token (5 minutos a partir de agora)
                .subject(user.getId()) // Define o ID do usuário como o subject (identificador do dono do token)
                .build();

        // Codifica o JWT com as claims e retorna o valor do token
        return accessTokenEncoder.encode(JwtEncoderParameters.from(claimsSet)).getTokenValue();
    }

    // Método privado que cria e retorna o refresh token com tempo de expiração longo (30 dias)
    private String createRefreshToken(Authentication authentication) {
        // Converte o principal (usuário autenticado) em um objeto User
        User user = (User) authentication.getPrincipal();
        // Pega o instante atual (momento exato em que o token está sendo gerado)
        Instant now = Instant.now();

        // Cria o conjunto de claims do JWT para o refresh token
        JwtClaimsSet claimsSet = JwtClaimsSet.builder()
                .issuer("Jaques") // Define o emissor do token (nesse caso, "Jaques")
                .issuedAt(now) // Define o momento exato em que o token foi gerado
                .expiresAt(now.plus(30, ChronoUnit.DAYS)) // Define a data de expiração do refresh token (30 dias a partir de agora)
                .subject(user.getId()) // Define o ID do usuário como o subject (identificador do dono do token)
                .build();

        // Codifica o JWT com as claims e retorna o valor do refresh token
        return refreshTokenEncoder.encode(JwtEncoderParameters.from(claimsSet)).getTokenValue();
    }

    // Método público que cria um objeto Token, que contém tanto o access token quanto o refresh token
    public Token createToken(Authentication authentication) {
        // Verifica se o principal da autenticação é uma instância de User, se não for, lança uma exceção
        if (!(authentication.getPrincipal() instanceof User user)) {
            // Se o principal não for do tipo User, lança uma exceção BadCredentialsException com uma mensagem formatada
            throw new BadCredentialsException(
                    MessageFormat.format("principal {0} is not of User type", authentication.getPrincipal().getClass())
            );
        }

        // Cria um novo objeto Token (DTO) que irá armazenar os tokens gerados
        Token tokenDTO = new Token();
        tokenDTO.setUserId(user.getId()); // Define o ID do usuário no tokenDTO
        tokenDTO.setAccessToken(createAccessToken(authentication)); // Gera e define o access token

        // Variável que armazenará o valor do refresh token
        String refreshToken;
        // Verifica se as credenciais da autenticação são uma instância de Jwt (token JWT)
        if (authentication.getCredentials() instanceof Jwt jwt) {
            // Obtém o instante atual e a data de expiração do JWT
            Instant now = Instant.now();
            Instant expiresAt = jwt.getExpiresAt();
            // Calcula a duração (diferença de tempo) entre o instante atual e a data de expiração
            Duration duration = Duration.between(now, expiresAt);
            // Obtém a quantidade de dias restantes até a expiração do token
            long daysUntilExpired = duration.toDays();
            // Se o JWT expirar em menos de 7 dias, gera um novo refresh token
            if (daysUntilExpired < 7) {
                refreshToken = createRefreshToken(authentication); // Gera um novo refresh token
            } else {
                // Caso contrário, reutiliza o token JWT existente
                refreshToken = jwt.getTokenValue();
            }
        } else {
            // Se as credenciais não forem do tipo JWT, gera um novo refresh token
            refreshToken = createRefreshToken(authentication);
        }
        // Define o refresh token no objeto tokenDTO
        tokenDTO.setRefreshToken(refreshToken);

        // Retorna o objeto tokenDTO com o access token e o refresh token
        return tokenDTO;
    }

}