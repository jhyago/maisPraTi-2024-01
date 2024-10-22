// Declaração do pacote onde a classe KeyUtils está localizada
package com.example.JWT_OAuth2Demo.securityOAuthConfig;

// Importação de bibliotecas de logging e manipulação de chaves e arquivos
import lombok.extern.slf4j.Slf4j; // Lombok para facilitar a adição de logs na aplicação

// Importações do Spring para injeção de dependências e valores de propriedades do sistema
import org.springframework.beans.factory.annotation.Autowired; // Para permitir injeção automática de dependências
import org.springframework.beans.factory.annotation.Value; // Para injetar valores definidos no arquivo de propriedades (application.properties ou application.yml)
import org.springframework.core.env.Environment; // Para acessar os perfis de execução (ex: dev, prod)
import org.springframework.stereotype.Component; // Marca a classe como um componente Spring, tornando-a um bean gerenciado

// Importações necessárias para manipulação de chaves criptográficas e leitura/gravação de arquivos
import java.io.File; // Para trabalhar com manipulação de arquivos e diretórios
import java.io.FileOutputStream; // Para gravar dados em arquivos no disco
import java.io.IOException; // Para lidar com exceções de IO (entrada/saída)
import java.nio.file.Files; // Para ler os bytes de arquivos do sistema de arquivos
import java.security.*; // Para manipulação de objetos relacionados à criptografia, como KeyPair, PublicKey, PrivateKey
import java.security.interfaces.RSAPrivateKey; // Interface para representar chaves privadas RSA
import java.security.interfaces.RSAPublicKey; // Interface para representar chaves públicas RSA
import java.security.spec.EncodedKeySpec; // Especificação de uma chave codificada
import java.security.spec.InvalidKeySpecException; // Exceção para chaves inválidas durante a conversão
import java.security.spec.PKCS8EncodedKeySpec; // Especificação de chave privada no formato PKCS#8
import java.security.spec.X509EncodedKeySpec; // Especificação de chave pública no formato X.509
import java.util.Arrays; // Para manipulação de arrays, como verificar perfis ativos
import java.util.Objects; // Utilitário para verificações de nulidade e comparação de objetos

// Marca esta classe como um componente Spring para injeção automática
@Component
// Adiciona suporte a logging na classe por meio da anotação @Slf4j do Lombok
@Slf4j
public class KeyUtils {

    // Injeta automaticamente o objeto Environment, que armazena informações sobre o ambiente da aplicação
    @Autowired
    Environment environment;

    // Injeção dos caminhos para as chaves privadas e públicas, que são configurados nos arquivos de propriedades (como application.yml ou application.properties)
    @Value("${access-token.private}") // Caminho da chave privada para o token de acesso
    private String accessTokenPrivateKeyPath;

    @Value("${access-token.public}") // Caminho da chave pública para o token de acesso
    private String accessTokenPublicKeyPath;

    @Value("${refresh-token.private}") // Caminho da chave privada para o token de refresh
    private String refreshTokenPrivateKeyPath;

    @Value("${refresh-token.public}") // Caminho da chave pública para o token de refresh
    private String refreshTokenPublicKeyPath;

    // Declaração de variáveis que armazenarão os pares de chaves de token de acesso e de refresh, inicializadas como null
    private KeyPair _accessTokenKeyPair; // Par de chaves (privada e pública) para o token de acesso
    private KeyPair _refreshTokenKeyPair; // Par de chaves (privada e pública) para o token de refresh

    // Método privado que retorna o par de chaves do token de acesso (acesso às chaves públicas e privadas)
    private KeyPair getAccessTokenKeyPair() {
        // Verifica se o par de chaves do token de acesso ainda não foi carregado (lazy loading)
        if (Objects.isNull(_accessTokenKeyPair)) {
            // Se o par de chaves não foi inicializado, tenta carregá-lo ou gerá-lo chamando o método getKeyPair
            _accessTokenKeyPair = getKeyPair(accessTokenPublicKeyPath, accessTokenPrivateKeyPath);
        }
        // Retorna o par de chaves para o token de acesso (seja carregado do arquivo ou gerado)
        return _accessTokenKeyPair;
    }

    // Método privado que retorna o par de chaves do token de refresh (usado para geração de tokens de atualização)
    private KeyPair getRefreshTokenKeyPair() {
        // Verifica se o par de chaves do token de refresh ainda não foi carregado
        if (Objects.isNull(_refreshTokenKeyPair)) {
            // Se o par de chaves não foi inicializado, tenta carregá-lo ou gerá-lo chamando o método getKeyPair
            _refreshTokenKeyPair = getKeyPair(refreshTokenPublicKeyPath, refreshTokenPrivateKeyPath);
        }
        // Retorna o par de chaves para o token de refresh
        return _refreshTokenKeyPair;
    }

    // Método privado que carrega ou gera um par de chaves (pública e privada) a partir de arquivos de caminho especificado
    private KeyPair getKeyPair(String publicKeyPath, String privateKeyPath) {
        KeyPair keyPair;

        // Cria objetos File para representar os arquivos de chave pública e privada
        File publicKeyFile = new File(publicKeyPath);
        File privateKeyFile = new File(privateKeyPath);

        // Verifica se ambos os arquivos de chave (pública e privada) já existem no sistema de arquivos
        if (publicKeyFile.exists() && privateKeyFile.exists()) {
            try {
                // Cria uma instância de KeyFactory para o algoritmo RSA
                KeyFactory keyFactory = KeyFactory.getInstance("RSA");

                // Lê os bytes da chave pública a partir do arquivo e gera um objeto PublicKey
                byte[] publicKeyBytes = Files.readAllBytes(publicKeyFile.toPath()); // Lê todos os bytes da chave pública
                EncodedKeySpec publicKeySpec = new X509EncodedKeySpec(publicKeyBytes); // Converte os bytes da chave para o formato X.509
                PublicKey publicKey = keyFactory.generatePublic(publicKeySpec); // Gera a chave pública usando a especificação

                // Lê os bytes da chave privada a partir do arquivo e gera um objeto PrivateKey
                byte[] privateKeyBytes = Files.readAllBytes(privateKeyFile.toPath()); // Lê todos os bytes da chave privada
                PKCS8EncodedKeySpec privateKeySpec = new PKCS8EncodedKeySpec(privateKeyBytes); // Converte os bytes da chave para o formato PKCS#8
                PrivateKey privateKey = keyFactory.generatePrivate(privateKeySpec); // Gera a chave privada usando a especificação

                // Cria um objeto KeyPair (par de chaves) usando as chaves pública e privada carregadas
                keyPair = new KeyPair(publicKey, privateKey);
                return keyPair; // Retorna o par de chaves carregado
            } catch (NoSuchAlgorithmException | IOException | InvalidKeySpecException e) {
                // Caso ocorra algum erro na leitura ou geração das chaves, lança uma exceção
                throw new RuntimeException(e); // Converte a exceção para RuntimeException para facilitar o tratamento no nível superior
            }
        } else {
            // Verifica se o ambiente ativo é de produção (prod), onde as chaves precisam obrigatoriamente existir
            if (Arrays.stream(environment.getActiveProfiles()).anyMatch(s -> s.equals("prod"))) {
                // Se estiver em ambiente de produção e as chaves não existirem, lança uma exceção
                throw new RuntimeException("public and private keys don't exist");
            }
        }

        // Se os arquivos de chave não existirem, cria um diretório onde as chaves serão geradas
        File directory = new File("access-refresh-token-keys");
        if (!directory.exists()) {
            directory.mkdirs(); // Cria o diretório caso ele ainda não exista
        }

        try {
            // Gera um novo par de chaves RSA de 2048 bits
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA"); // Inicializa o gerador de chaves RSA
            keyPairGenerator.initialize(2048); // Define o tamanho da chave RSA (2048 bits)
            keyPair = keyPairGenerator.generateKeyPair(); // Gera o par de chaves (pública e privada)

            // Grava a chave pública gerada em um arquivo no formato X.509
            try (FileOutputStream fos = new FileOutputStream(publicKeyPath)) {
                X509EncodedKeySpec keySpec = new X509EncodedKeySpec(keyPair.getPublic().getEncoded()); // Converte a chave pública para o formato X.509
                fos.write(keySpec.getEncoded()); // Grava os bytes da chave pública no arquivo
            }

            // Grava a chave privada gerada em um arquivo no formato PKCS#8
            try (FileOutputStream fos = new FileOutputStream(privateKeyPath)) {
                PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyPair.getPrivate().getEncoded()); // Converte a chave privada para o formato PKCS#8
                fos.write(keySpec.getEncoded()); // Grava os bytes da chave privada no arquivo
            }
        } catch (NoSuchAlgorithmException | IOException e) {
            // Caso ocorra erro na geração ou gravação das chaves,
            throw new RuntimeException(e);
        }

        // Retorna o novo par de chaves gerado
        return keyPair;
    }

    // Método público que retorna a chave pública RSA do token de acesso
    public RSAPublicKey getAccessTokenPublicKey() {
        return (RSAPublicKey) getAccessTokenKeyPair().getPublic();
    }

    // Método público que retorna a chave privada RSA do token de acesso
    public RSAPrivateKey getAccessTokenPrivateKey() {
        return (RSAPrivateKey) getAccessTokenKeyPair().getPrivate();
    }

    // Método público que retorna a chave pública RSA do token de refresh
    public RSAPublicKey getRefreshTokenPublicKey() {
        return (RSAPublicKey) getRefreshTokenKeyPair().getPublic();
    }

    // Método público que retorna a chave privada RSA do token de refresh
    public RSAPrivateKey getRefreshTokenPrivateKey() {
        return (RSAPrivateKey) getRefreshTokenKeyPair().getPrivate();
    }
}