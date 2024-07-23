import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: #333;
    text-align: center;
`

const Home = () => {
    return(
        <Container>
            <Title>
                Bem-vindo ao App! <br/> Selecione uma opção do menu.
            </Title>
        </Container>
    )
}

export default Home;