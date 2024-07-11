import { useState, useEffect } from "react";

// Define um componente funcional chamado TimerComponent
function TimerComponent() {
  // Declara uma variável de estado 'count' e uma função para atualizá-la 'setCount'
  // Inicialmente, 'count' é 0
  const [count, setCount] = useState(0);

  // useEffect é um hook que executa um efeito colateral
  // O efeito aqui é iniciar um temporizador que incrementa 'count' a cada segundo
  useEffect(() => {
    // Define um temporizador que incrementa 'count' a cada 1000 milissegundos (1 segundo)
    const timerId = setInterval(() => {
      // Atualiza o estado 'count' incrementando seu valor anterior em 1
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // A função de limpeza é retornada e será chamada quando o componente for desmontado
    return () => {
      // Limpa o temporizador para evitar vazamentos de memória
      clearInterval(timerId);
      // Loga uma mensagem no console indicando que o temporizador foi limpo
      console.log("Timer foi limpo");
    };
  }, []); // O array vazio como segundo argumento garante que o efeito só será executado uma vez, após a montagem do componente

  // Renderiza um elemento <h1> que exibe o valor atual de 'count'
  return <h1>{count}</h1>;
}

// Exporta o componente TimerComponent como padrão para que possa ser importado em outros arquivos
export default TimerComponent;
