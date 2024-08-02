import { useContext, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import ContainerElement from '../components/Container';
import TitleElement from '../components/Title';
import InputElement from '../components/Input';
import ButtonSubmitElement from '../components/ButtonSubmit';
import ErrorElement from '../components/ErrorMessage';
const movie_token = import.meta.env.VITE_MOVIE_TOKEN;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  max-height: 500px; 
  overflow-y: auto; 
  width: 100%;
`

const MovieCard = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 180px; 
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: #c4c0c9
  }

  img {
    border-radius: 10px;
    max-width: 100%; 
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
`

const MovieSearchEngine = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)
  const [loading, setLoading] = useState(false);

  const validate = (e) => {
    e.preventDefault();

    if(!query){
      setMovies([]);
      setError("Input Vazio.");
    }else{
      searchMovies();
      setError('');
    }
  }

  const searchMovies = async () => {
    try {
      setLoading(true);
      setIsEmpty(false);
      setError('');

      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&language=pt-BR`,{
        headers: {
          'Authorization': `Bearer ${movie_token}`,
          'Accept': 'application/json'
        }
      })
      
      setMovies(response.data.results);
      response.data.results.length > 0 ? setIsEmpty(false) : setIsEmpty(true);
      setLoading(false);

    } catch (err) {
      console.error("Error fetching movie data:", err)
      setError(err.message);
      setLoading(false);
    }
  }

  if(!isAuthenticated){
    return <Navigate replace to="/Login" />; 
}else{

  return (
    <>
     <ButtonSubmitElement onClick={() => navigate("/")} text="Home" estilo={{ marginLeft: '30px'}} />
    <ContainerElement>
      <TitleElement text="Movie Search Engine" />
      <InputElement
        name="movie"
        type="text"
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for a movie" 
      />
      <ButtonSubmitElement onClick={validate} text="Search" />
      {error && <ErrorElement text={error}/>}
      <MoviesContainer>
        {movies && movies.map((movie) => ( 
          <MovieCard key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} title={`${movie.title}`} alt={`${movie.title} Poster`} /> 
            <h3>{movie.title}</h3> 
            <p>{movie.release_date.split("-").reverse().join("/")}</p>
            <p>{movie.overview.slice(0,100)+"..."}</p>
          </MovieCard>
        ))}
         {loading && <p>...</p>}
        {isEmpty && <span>Movie not found</span>}
      </MoviesContainer>
    </ContainerElement>
    </>
  )

}

}

export default MovieSearchEngine