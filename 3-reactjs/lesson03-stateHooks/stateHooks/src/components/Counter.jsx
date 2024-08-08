import { useState } from "react"; // Importa o hook useState da biblioteca React

// Define um componente funcional chamado Counter
function Counter() {
  // Declara uma variável de estado chamada 'count' e uma função 'setCount' para atualizá-la
  // useState(0) inicializa 'count' com o valor 0
  const [count, setCount] = useState(0);

  // Retorna o JSX que define a interface do componente
  return (
    <div>
      {" "}
      {/* Define um contêiner div para agrupar os elementos */}
      <p>Você clicou {count} vezes</p> {/* Exibe o número de cliques */}
      <button onClick={() => setCount(count + 1)}>
        {" "}
        {/* Define um botão com um evento de clique */}
        Clique aqui {/* Texto exibido no botão */}
      </button>
    </div>
  );
}

// Exporta o componente Counter como o export padrão deste módulo
export default Counter;
