// Importa o hook useState da biblioteca React para gerenciar o estado do componente.
import { useState } from 'react';
// Importa a biblioteca styled-components para criar componentes estilizados.
import styled from 'styled-components';

// Cria um componente estilizado chamado Container usando styled-components.
// Esse componente estiliza uma <div> com flexbox para centralizar o conteúdo e adicionar padding, bordas, e sombras.
const Container = styled.div`
  display: flex; // Define o layout como flexbox.
  flex-direction: column; // Organiza os itens em uma coluna.
  align-items: center; // Alinha os itens no centro horizontalmente.
  justify-content: center; // Alinha os itens no centro verticalmente.
  padding: 40px; // Adiciona padding de 40px ao redor do conteúdo.
  background: #fff; // Define o fundo como branco.
  border-radius: 15px; // Adiciona bordas arredondadas de 15px.
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); // Adiciona uma sombra sutil ao redor do componente.
  max-width: 500px; // Define a largura máxima como 500px.
  margin: 50px auto; // Adiciona margem de 50px acima e abaixo e centraliza horizontalmente.
`;

// Cria um componente estilizado chamado Title usando styled-components.
// Esse componente estiliza um <h2> com cor, margem, tamanho da fonte e alinhamento.
const Title = styled.h2`
  color: #333; // Define a cor do texto como um tom escuro de cinza.
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo do título.
  font-size: 24px; // Define o tamanho da fonte como 24px.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;

// Cria um componente estilizado chamado Question usando styled-components.
// Esse componente estiliza um <p> para exibir a pergunta com cor, tamanho da fonte e margem.
const Question = styled.p`
  color: #555; // Define a cor do texto como um tom médio de cinza.
  font-size: 20px; // Define o tamanho da fonte como 20px.
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo da pergunta.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;

// Cria um componente estilizado chamado OptionButton usando styled-components.
// Esse componente estiliza um <button> com padding, cor de fundo, cor do texto, bordas, e efeitos de transição.
const OptionButton = styled.button`
  padding: 12px 20px; // Adiciona padding de 12px verticalmente e 20px horizontalmente.
  background-color: #007bff; // Define a cor de fundo como azul.
  color: white; // Define a cor do texto como branco.
  border: none; // Remove a borda padrão do botão.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  margin: 10px; // Adiciona uma margem de 10px ao redor do botão.
  transition: background-color 0.3s, transform 0.3s; // Adiciona uma transição suave para a cor de fundo e transformação.

  &:hover { // Aplica estilos ao botão quando o cursor está sobre ele.
    background-color: #0056b3; // Muda a cor de fundo para um tom mais escuro de azul.
    transform: scale(1.05); // Aumenta levemente o tamanho do botão.
  }

  &:active { // Aplica estilos ao botão quando ele é clicado.
    background-color: #004494; // Muda a cor de fundo para um tom ainda mais escuro de azul.
    transform: scale(0.95); // Reduz levemente o tamanho do botão.
  }
`;

// Cria um componente estilizado chamado Score usando styled-components.
// Esse componente estiliza um <p> para exibir a pontuação com cor, tamanho da fonte e margem.
const Score = styled.p`
  color: #333; // Define a cor do texto como um tom escuro de cinza.
  font-size: 20px; // Define o tamanho da fonte como 20px.
  margin-top: 20px; // Adiciona uma margem de 20px acima da pontuação.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;

// Define o componente funcional QuizApp.
const QuizApp = () => {
  // Usa o hook useState para criar variáveis de estado para a pontuação e a pergunta atual.
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Define um array de perguntas, cada uma com a pergunta, opções e resposta correta.
  const questions = [
    {
      question: "What is 2+2?", // Pergunta da primeira questão.
      options: ["3", "4", "5", "6"], // Opções de resposta para a primeira questão.
      answer: "4", // Resposta correta para a primeira questão.
    },
    {
      question: "What is 3+3?", // Pergunta da segunda questão.
      options: ["5", "6", "7", "8"], // Opções de resposta para a segunda questão.
      answer: "6", // Resposta correta para a segunda questão.
    },
  ];

  // Função que é chamada quando o usuário responde uma pergunta.
  const handleAnswer = (answer) => {
    // Verifica se a resposta fornecida está correta.
    if (answer === questions[currentQuestion].answer) {
      // Se a resposta estiver correta, aumenta a pontuação em 1.
      setScore(score + 1);
    }
    // Passa para a próxima pergunta.
    setCurrentQuestion(currentQuestion + 1);
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      <Title>Quiz App</Title> {/* Exibe o título do aplicativo de quiz */}
      {currentQuestion < questions.length ? ( // Verifica se ainda há perguntas para responder.
        <div>
          <Question>{questions[currentQuestion].question}</Question> {/* Exibe a pergunta atual */}
          {questions[currentQuestion].options.map((option) => (
            <OptionButton key={option} onClick={() => handleAnswer(option)}>{option}</OptionButton> /* Renderiza os botões de opções de resposta */
          ))}
        </div>
      ) : (
        <Score>Your score: {score}</Score> /* Exibe a pontuação final após responder todas as perguntas */
      )}
    </Container>
  );
};

// Exporta o componente QuizApp para que possa ser utilizado em outras partes da aplicação.
export default QuizApp;
