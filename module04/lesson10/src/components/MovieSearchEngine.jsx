import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MovieSearchEngine = () => {
    
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')

    const searchMovies = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=ca825c2`)
            setMovies(response.data.Search)
        } catch (error) {
            console.error("Erro: " , error)
        }
    }

    return (
        <Container>
            <Title>Movie Search Engine</Title>
                <Input type='text'value={query} onChange={(event) => setQuery(event.target.value)}/>
                <Button onClick={searchMovies}>Search</Button>
                <MoviesContainer>
                    
                </MoviesContainer>
        </Container>
    )
}