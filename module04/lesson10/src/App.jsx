import './App.css'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import LanguageTranslator from './components/LanguageTranslator'
import MovieSearchEngine from './components/MovieSearchEngine'
import { useState } from 'react'

import { IoMenu, IoClose } from "react-icons/io5";

const MainContainer = styled.div`
  margin-left: ${({ isOpen }) => (isOpen ? '290px' : '0')};
  transition: margin-left 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin-left: ${({ isOpen }) => (isOpen ? '240px' : '0')};
  }
`;

const ButtonMenu = styled.button`
  padding: 15px;
  font-size: 1.2rem;
  background-color: #222222;
  color: #fff;
  border-style: none;
  border-radius: 0 10px 10px 0;
  transition: background-color 0.3s ease-in-out;

  &:hover{
    background-color: #0f0f0f;    
  }

  @media (max-width: 768px) {
    margin-bottom: ${({ isOpen }) => (isOpen ? '0px' : '41px')};
  }
`

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('home');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    switch (selectedComponent) {
      case 'language':
        return <LanguageTranslator />;
      case 'movies':
        return <MovieSearchEngine />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} onSelect={setSelectedComponent} />
      <MainContainer isOpen={isOpen}>
        <ButtonMenu onClick={toggleSidebar}>
          {isOpen ? <IoClose /> : <IoMenu />}
          
        </ButtonMenu>
        {renderContent()}
      </MainContainer>
    </>
  );
};

export default App
