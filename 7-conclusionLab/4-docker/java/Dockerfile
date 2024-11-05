# Etapa de build: usa a imagem oficial do Maven com Java 17 (Eclipse Temurin)
FROM maven:3.9.9-eclipse-temurin-17 AS build  
# Define o diretório de trabalho onde o código será copiado e compilado.
WORKDIR /app  
# Copia todos os arquivos do projeto para o contêiner.
COPY . .  
# Executa o Maven para limpar e empacotar a aplicação, ignorando os testes.
RUN mvn clean package -DskipTests  

# Etapa final: usa a imagem do JRE para executar a aplicação
FROM eclipse-temurin:17 
# Define o diretório de trabalho para a etapa final.
WORKDIR /app  
# Copia o arquivo JAR gerado na etapa de build para o contêiner final.
COPY --from=build /app/target/*.jar app.jar  
# Expõe a porta 8080 para permitir que a aplicação seja acessível.
EXPOSE 8080  
# Define o comando de entrada padrão para iniciar a aplicação.
ENTRYPOINT ["java", "-jar", "app.jar"]  