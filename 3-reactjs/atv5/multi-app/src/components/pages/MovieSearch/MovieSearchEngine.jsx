import { useEffect, useState } from 'react'; // Importa o hook useState do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import './Movie.module.css'
// Define o estilo do container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #111;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 50px auto;
`;

// Define o estilo do título
const Title = styled.h2`
  color: wheat;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

// Define o estilo do campo de entrada
const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Define o estilo do botão
const Button = styled.button`
  padding: 12px 20px;
  background-color: #000;
  color: wheat;
  border: 2px solid wheat;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #222;
  }
`;

// Define o estilo do container dos filmes
const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  max-height: 500px; /* Ajuste a altura máxima conforme necessário */
  overflow-y: auto; /* Adiciona rolagem vertical se necessário */
  width: 100%;
  
&::-webkit-scrollbar {
    width: 10px;
    height: 12px;
}

&::-webkit-scrollbar-track {
  border-radius: 5px; 
    background-color: wheat;
}

&::-webkit-scrollbar-thumb {
    background-color: #222;
    border-radius: 10px; 
}

-webkit-scrollbar-thumb:hover {
    background: #555; 
}
`;

// Define o estilo do cartão de filme
const MovieCard = styled.div`
  background: wheat;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 180px; /* Ajuste a largura conforme necessário */
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    border-radius: 10px;
    max-width: 100%; /* Ajusta o tamanho da imagem para caber dentro do cartão */
    height: auto;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

const Buttons = styled.div`
display: flex;
gap: 5px;
align-items: center;
font-size: 1rem;
padding-top: 10px;
color: wheat;
`

const ArrowLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 15px solid wheat;
  border-left: 0;
  cursor: pointer;
`;

const ArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid wheat;
  border-right: 0;
  right: 1px;
  cursor: pointer;

`;
// Componente principal MovieSearchEngine
const MovieSearchEngine = () => {
  const [query, setQuery] = useState(''); // Define o estado para a consulta de busca
  const [movies, setMovies] = useState([]); // Define o estado para armazenar os filmes
  const [page, setPage] = useState(1);

  // Função para buscar filmes
  const searchMovies = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzVmYmQ3NDkwMmQ3YjEwYTkyYmIxNTVhZDZkMmVhMCIsIm5iZiI6MTcyMTc0NjgyOS40NzM5NDEsInN1YiI6IjY2OWZhYjc5NWY0MDc3M2RhMTUyY2Y3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10zM16yoy_EokbjVH-et46DdRBmGZauwgyQ5tlp-Zbs",
        },
      };
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=pt-BR&page=${page}`,
        options
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchMovies();
  }, [page]);

  return (
    <Container>
      <Title>Movie Search Engine</Title>
      <Input
        type="text"
        value={query} // Valor do campo de entrada é ligado ao estado query
        onChange={(e) => setQuery(e.target.value)} // Atualiza o estado query conforme o usuário digita
        placeholder="Search for a movie" // Placeholder do campo de entrada
      />
      <Button onClick={searchMovies}>Search</Button> {/* Botão que chama a função searchMovies quando clicado */}
      <MoviesContainer>
        {movies && movies.map((movie) => ( // Verifica se há filmes e os mapeia para exibir MovieCard
          <MovieCard key={movie.imdbID}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.Title} Poster`} /> {/* Exibe o pôster do filme */}
            <h3>{movie.title}</h3> {/* Exibe o título do filme */}
            <p>{movie.overview}</p>
            {/* <p>{movie.Year}</p> Exibe o ano do filme */}
          </MovieCard>
        ))}
      </MoviesContainer>
      <Buttons>
        <ArrowLeft onClick={() => setPage(page - 1)}></ArrowLeft>
        <span>{page}</span>
        <ArrowRight onClick={() => setPage(page + 1)}></ArrowRight>
      </Buttons>
    </Container>
  );
};

export default MovieSearchEngine; // Exporta o componente MovieSearchEngine como padrão
