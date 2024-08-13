import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 70%;
  margin: auto;
  background-color: #2c3e50;
  border-radius: 20px;
  padding: 20px;
`;

const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, wheat, black);
  padding: 100px; 
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  width: 100%;

  h2 {
    margin-bottom: 30px; 
    font-size: 32px;
    color: white;
  }

  button {
    padding: 15px 30px;
    background-color: wheat;
    color: black;
    border: 2px solid black;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 18px; 

    &:hover {
      background-color: black;
      color: wheat;
      border-color: wheat;
    }
  }
`;


const CustomCarousel = styled(Carousel)`
  width: 100%;
  .carousel-status {
    display: none;
  }
`;

const CarouselComponent = ({ handleAccess }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <CarouselContainer>
      <CustomCarousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        selectedItem={carouselIndex}
        onChange={(index) => setCarouselIndex(index)}
      >
        <CarouselItem>
          <h2>QR Code Generator</h2>
          <button onClick={() => handleAccess(0, "QRCodeGenerator")}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>IP Address Finder</h2>
          <button onClick={() => handleAccess(1, "IPAddressFinder")}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>Movie Search Engine</h2>
          <button onClick={() => handleAccess(2, "MovieSearchEngine")}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>Todo App</h2>
          <button onClick={() => handleAccess(3, "TodoApp")}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>Quiz App</h2>
          <button onClick={() => handleAccess(4, "QuizApp")}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>Language Translator</h2>
          <button onClick={() => handleAccess(5, "LanguageTranslator")}>
            Acessar
          </button>
        </CarouselItem>
      </CustomCarousel>
    </CarouselContainer>
  );
};

export default CarouselComponent;
