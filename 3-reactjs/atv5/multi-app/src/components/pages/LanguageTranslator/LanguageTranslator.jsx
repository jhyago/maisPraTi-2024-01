import { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import { ToastContainer, toast } from 'react-toastify';


// Define o estilo do container principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #000;
  border-radius: 15px;
  box-shadow: 0 6px 12px wheat;
  max-width: 600px;
  margin: 50px auto;
`;

// Define o estilo do título
const Title = styled.h2`
  color: wheat;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

// Define o estilo do label
const Label = styled.label`
  color: wheat;
  font-size: 16px;
  margin-right: 10px;
`;

// Define o estilo do select
const Select = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Define o estilo do campo de entrada
const Input = styled.textarea`
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
  background-color: wheat;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-bottom: 20px;

  &:hover {
    background-color: black;
    border-color: wheat;
    color: wheat;
  }
`;

// Define o estilo do texto traduzido
const TranslatedText = styled.p`
  color: black;
  font-size: 18px;
  background: #ffeecf;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;

// Componente principal LanguageTranslator
const LanguageTranslator = () => {
  const [text, setText] = useState(''); // Define o estado para o texto a ser traduzido
  const [translatedText, setTranslatedText] = useState(''); // Define o estado para o texto traduzido
  const [sourceLang, setSourceLang] = useState('en'); // Define o estado para a língua de origem
  const [targetLang, setTargetLang] = useState('es'); // Define o estado para a língua de destino
  // Função para traduzir o texto
  const translateText = async () => {
    if(text == ''){
      toast.error('O texto não pode estar vazio!'); // Exibe um alerta se o usuário não for encontrado
    }else if(sourceLang != targetLang){
      try {
        const params = {
          q: text,
          source: sourceLang,
          target: targetLang
        }
  
        const key = 'AIzaSyA8HTDn-NTQ0aE2h2AiJZpeTnGZ7e29NsQ'
        const response = await axios.post(`https://translation.googleapis.com/language/translate/v2?key=${key}`,params);
        setTranslatedText(response.data.data.translations[0].translatedText); // Armazena o texto traduzido no estado translatedText
      } catch (error) {
        console.error("Error translating text:", error); // Exibe um erro no console em caso de falha
      }
    }else{
      toast.error('As duas linguagens não podem ser iguais!'); // Exibe um alerta se o usuário não for encontrado
    }

  };

  return (
    <Container>
      <Title>Language Translator</Title>
      <div>
        <Label>Source Language:</Label>
        <Select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <div>
        <Label>Target Language:</Label>
        <Select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <Input
        type="text"
        value={text} // Valor do campo de entrada é ligado ao estado text
        onChange={(e) => setText(e.target.value)} // Atualiza o estado text conforme o usuário digita
        placeholder="Enter text to translate" // Placeholder do campo de entrada
      />
      <Button onClick={translateText}>Translate</Button> {/* Botão que chama a função translateText quando clicado */}
      {translatedText && <TranslatedText>{translatedText}</TranslatedText>} {/* Condicional que exibe o texto traduzido se translatedText não for vazio */}
      <ToastContainer/>
    </Container>
  );
};

export default LanguageTranslator; // Exporta o componente LanguageTranslator como padrão
