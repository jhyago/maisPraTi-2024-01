import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  max-width: 200px;
  margin: 0px auto;
`

// Define o estilo do título
const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
  font-size: 24px;
  text-align: center;
`

const PageNotFound = () =>{
    const navigate = useNavigate();
    const [count, setCount ] = useState(8);

    setInterval(() =>{
        setCount(count-1)
    },1000);

    useEffect(() => {
    setTimeout(() => {
      navigate(-1)
    }, 7000)
  }, [])

    return(
        <>
        <Container>
            <Title>
                Are you lost, son?
            </Title>
            <Title>
            Relax, I will redirect you in {count} seconds...
            </Title>
            <img src="https://www.powersonic.com.br/downloads/gifs/sonic_32bits/Sonic_ok.gif"></img>
            <Title>
                Page not found
            </Title>
        </Container>
        </>
    )
}

export default PageNotFound;