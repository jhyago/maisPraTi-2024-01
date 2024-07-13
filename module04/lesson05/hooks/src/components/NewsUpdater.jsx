// Importa os hooks useEffect e useState do React
import { useEffect, useState } from "react";

// Define um componente funcional chamado NewsUpdater
function NewsUpdater() {
  // Declara uma variável de estado 'news' e uma função para atualizá-la 'setNews'
  // Inicialmente, 'news' é um array vazio
  const [news, setNews] = useState([]);

  // Declara uma variável de estado 'isLoading' e uma função para atualizá-la 'setIsLoading'
  // Inicialmente, 'isLoading' é true
  const [isLoading, setIsLoading] = useState(true);

  // useEffect é um hook que executa um efeito colateral
  useEffect(() => {
    // Define uma função assíncrona para buscar notícias
    const fetchNews = async () => {
      // Define 'isLoading' como true para indicar que os dados estão sendo carregados
      setIsLoading(true);

      try {
        // Faz uma requisição para a API e espera pela resposta
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // Converte a resposta em JSON
        const data = await response.json();
        // Atualiza o estado 'news' com os primeiros 5 itens do array de dados recebidos
        setNews(data.slice(0, 5));
      } catch (error) {
        // Se ocorrer um erro, exibe uma mensagem no console
        console.error("Ligue pro suporte", error);
      }

      // Define 'isLoading' como false para indicar que os dados foram carregados
      setIsLoading(false);
    };

    // Chama a função para buscar notícias
    fetchNews();

    // Configura um intervalo para buscar notícias a cada 10 segundos
    const interval = setInterval(fetchNews, 10000);

    // A função de limpeza é retornada e será chamada quando o componente for desmontado
    return () => clearInterval(interval);
  }, []); // O array vazio como segundo argumento garante que o efeito só será executado uma vez, após a montagem do componente

  // Renderiza o conteúdo do componente
  return (
    <div>
      <h1>Últimas Notícias Simuladas</h1>
      {/* Se 'isLoading' for true, exibe uma mensagem de carregamento */}
      {isLoading ? (
        <p>Carregando notícias</p>
      ) : (
        // Caso contrário, exibe a lista de notícias
        <ul>
          {
            // Mapeia cada item de 'news' para um elemento <li> que exibe o título da notícia
            news.map((article) => (
              <li key={article.id}>
                <p>{article.title}</p>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
}

// Exporta o componente NewsUpdater como padrão para que possa ser importado em outros arquivos
export default NewsUpdater;
