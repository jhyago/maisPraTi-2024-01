
# <p align="center">Multi App</p>
  
Uma aplicação web usando React.js para treinamento e aprimoramento da linguagem e suas tecnologias utilizadas no front-end.
    
## ⚙️ Features    
No  Multi App, você encontra:
- Busca de informações sobre um ip;
- Gerador de QRCODE;
- Busca de informações sobre filmes;
- Tradutor;
- Quiz app;
- App To-Do List

além disso, conta com sistema de Login/Logout protegendo as features de acesso previamente não cadastrado.
## 🗂️ Tech Stack

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,js,react,vite" />
  </a>
</p>
    
## 🛠️ Instalação
Clone este repositório. Você precisará de `node` e `npm` instalados globalmente em sua máquina.

Na pasta: ./maisPraTi/module04/lesson10, rode o seguinte comando no seu terminal para instalar as dependências:

```bash
npm install 
```

Em seguida, rode o comando para levantar a aplicação:

```bash
npm run dev
```

Acesse o link do seu localhost disponiblizado no terminal.

Ex:  http://localhost:5173/

## 🤖 Detalhes técnicos

Usado o pacote React-router-dom para roteamento entre páginas, o hook Context API para autenticação e proteção de rotas.

Para estilização, o styled-components e para chamadas API, a lib Axios.

Para manuseio e storage de API Keys e Tokens, foi usado o dotenv e a lib qrcode.react para geração do QRCODE.

API's usadas:

Para busca de info sobre um IP:

https://ipapi.co

Para tradução:

https://api.mymemory.translated.net

Para busca de informações sobre filmes:

https://api.themoviedb.org

Para busca de perguntas e respostas do Quiz:

https://opentdb.com/
        
## 👨🏽‍💻 Author
#### João Paiva
- Email: [joaopereirapaiva7@gmail.com](joaopereirapaiva7@gmail.com)
- Github: [@paivaa](https://github.com/paivaa/)
        