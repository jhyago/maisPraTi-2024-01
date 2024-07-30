import { useContext, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
const movie_token = import.meta.env.VITE_MOVIE_TOKEN;

// Define o estilo do container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 50px auto;
`

// Define o estilo do título
const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`

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
`

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`

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

const CustomError = styled.p`
    color: red;
`

const MovieSearchEngine = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)

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
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&language=pt-BR`,{
        headers: {
          'Authorization': `Bearer ${movie_token}`,
          'Accept': 'application/json'
        }
      })
      
      setMovies(response.data.results);
      setError('');
      response.data.results.length > 0 ? setIsEmpty(false) : setIsEmpty(true);

    } catch (err) {
      console.error("Error fetching movie data:", err)
      setError(err.message);
    }
  }

  if(!isAuthenticated){
    return <Navigate replace to="/Login" />; 
}else{

  return (
    <Container>
      <Title>Movie Search Engine</Title>
      <Input
        type="text"
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for a movie" 
      />
      <Button onClick={validate}>Search</Button>
      {error && <CustomError>{error}</CustomError>}
      <MoviesContainer>
        {movies && movies.map((movie) => ( 
          <MovieCard key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} title={`${movie.title}`} alt={`${movie.title} Poster`} /> 
            <h3>{movie.title}</h3> 
            <p>{movie.release_date.split("-").reverse().join("/")}</p>
            <p>{movie.overview.slice(0,100)+"..."}</p>
          </MovieCard>
        ))}
        {isEmpty && <span>Movie not found</span>}
      </MoviesContainer>
    </Container>
  )

}

}

export default MovieSearchEngine