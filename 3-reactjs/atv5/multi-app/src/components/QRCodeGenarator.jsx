// Importa o hook useState da biblioteca React para gerenciar o estado do componente.
import { useState } from 'react';
// Importa a biblioteca styled-components para criar componentes estilizados.
import styled from 'styled-components';
// Importa o componente QRCode da biblioteca qrcode.react para gerar códigos QR.
import QRCode from 'qrcode.react';

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
  max-width: 400px; // Define a largura máxima como 400px.
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

// Cria um componente estilizado chamado Input usando styled-components.
// Esse componente estiliza um <input> com padding, borda, bordas arredondadas, e sombra interna.
const Input = styled.input`
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo do input.
  padding: 12px; // Adiciona padding de 12px dentro do input.
  border: 1px solid #ccc; // Define uma borda de 1px sólida e cinza clara.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  width: 100%; // Define a largura como 100% do contêiner pai.
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra interna sutil.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  transition: border-color 0.3s; // Adiciona uma transição suave de 0.3 segundos para a cor da borda.

  &:focus { // Aplica estilos ao input quando ele está em foco.
    border-color: #007bff; // Muda a cor da borda para azul quando o input está em foco.
    outline: none; // Remove o contorno padrão quando o input está em foco.
  }
`;

// Cria um componente estilizado chamado QRCodeContainer usando styled-components.
// Esse componente estiliza uma <div> com padding, fundo, bordas arredondadas, e sombra.
const QRCodeContainer = styled.div`
  margin-top: 20px; // Adiciona uma margem de 20px acima do QRCodeContainer.
  padding: 20px; // Adiciona padding de 20px dentro do contêiner.
  background: #f9f9f9; // Define o fundo como um tom muito claro de cinza.
  border-radius: 10px; // Adiciona bordas arredondadas de 10px.
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Adiciona uma sombra sutil ao redor do contêiner.
`;

// Define o componente funcional QRCodeGenerator.
const QRCodeGenerator = () => {
  // Usa o hook useState para criar uma variável de estado chamada 'text' e uma função para atualizá-la.
  // 'text' armazena o texto que será codificado no QR Code.
  const [text, setText] = useState('');

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      {/* Exibe o título do gerador de QR Code */}
      <Title>QR Code Generator</Title>
      {/* Renderiza um campo de input para o usuário inserir o texto que será codificado */}
      <Input
        type="text"
        value={text} // Define o valor do input como o texto do estado.
        onChange={(e) => setText(e.target.value)} // Atualiza o estado 'text' quando o valor do input muda.
        placeholder="Enter text to encode" // Texto exibido quando o campo está vazio.
      />
      {/* Renderiza o QRCode apenas se 'text' não estiver vazio */}
      {text && (
        <QRCodeContainer>
          <QRCode value={text} size={256} /> {/* Gera o QR Code com o texto atual e tamanho 256px */}
        </QRCodeContainer>
      )}
    </Container>
  );
};

// Exporta o componente QRCodeGenerator para que possa ser utilizado em outras partes da aplicação.
export default QRCodeGenerator;
