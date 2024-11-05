# Use a imagem oficial do Node.js na versão 20 como base
# e define a imagem base como Node.js versão 20, garantindo consistência no ambiente de execução.
FROM node:20  

# Define o diretório de trabalho dentro do contêiner
# Define "/app" como o diretório de trabalho, garantindo que todos os comandos sejam executados nesse local.
WORKDIR /app  

# Copia apenas o arquivo package.json para o contêiner (para otimizar o cache de instalação de dependências)
COPY package.json ./  

# Instala as dependências do Node.js a partir do package.json. O cache desta camada será reutilizado se não houver alterações no package.json.
RUN npm install  

# Copia todos os arquivos do diretório atual para o contêiner, incluindo app.js e outros scripts da aplicação.
COPY . .  

# Torna a porta 3000 acessível para que a aplicação possa ser acessada de fora do contêiner.
EXPOSE 3000  

# Executa 'node app.js' para iniciar a aplicação quando o contêiner é iniciado.
CMD ["node", "app.js"]  
