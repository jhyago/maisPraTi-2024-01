import { useState } from "react"; // Importa o hook useState da biblioteca React

// Define um componente funcional chamado MirrorText
function MirrorText() {
  // Declara uma variável de estado chamada 'text' e uma função 'setText' para atualizá-la
  // useState('') inicializa 'text' com uma string vazia
  const [text, setText] = useState("");

  // Retorna o JSX que define a interface do componente
  return (
    <div>
      {" "}
      {/* Define um contêiner div para agrupar os elementos */}
      <input
        type="text" // Define o tipo do input como texto
        value={text} // Define o valor do input como a variável de estado 'text'
        onChange={(e) => setText(e.target.value)} // Atualiza 'text' conforme o usuário digita
      />
      <p>Você digitou: {text}</p> {/* Exibe o texto digitado pelo usuário */}
    </div>
  );
}

// Exporta o componente MirrorText como o export padrão deste módulo
export default MirrorText;
