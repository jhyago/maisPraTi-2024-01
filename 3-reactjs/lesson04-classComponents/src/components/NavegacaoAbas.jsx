import { useState } from "react"; // Importa o hook useState da biblioteca React

// Define um array de arrays chamado 'conteudos' que contém o conteúdo a ser exibido nas abas
const conteudos = [
  ["Conteúdo 0", "Conteúdo 1", "Conteúdo 2"],
  ["Conteúdo 3", "Conteúdo 4", "Conteúdo 5"],
  ["Conteúdo 6", "Conteúdo 7", "Conteúdo 8"],
];

// Define um componente funcional chamado NavegacaoAbas
function NavegacaoAbas() {
  // Declara uma variável de estado chamada 'estadoAtual' e uma função 'setEstado' para atualizá-la
  // useState(0) inicializa 'estadoAtual' com o valor 0
  const [estadoAtual, setEstado] = useState(0);

  // Retorna o JSX que define a interface do componente
  return (
    <>
      <div>
        {" "}
        {/* Define um contêiner div para agrupar os elementos */}
        <header>
          {" "}
          {/* Define o cabeçalho */}
          <img src="" alt="" /> {/* Imagem do cabeçalho (não especificada) */}
          <h1>Aula +praTi - React.Js</h1> {/* Título do cabeçalho */}
          <p>Exercício para treinar o useState</p> {/* Parágrafo descritivo */}
        </header>
      </div>

      <div id="abas">
        {" "}
        {/* Define um contêiner div para as abas de navegação */}
        <nav>
          {" "}
          {/* Define a barra de navegação */}
          <button onClick={() => setEstado(0)}>Grêmio</button>{" "}
          {/* Botão para selecionar a aba 0 */}
          <button onClick={() => setEstado(1)}>Velhice</button>{" "}
          {/* Botão para selecionar a aba 1 */}
          <button onClick={() => setEstado(2)}>Nacional</button>{" "}
          {/* Botão para selecionar a aba 2 */}
        </nav>
      </div>

      {/* Define um contêiner div para o conteúdo das abas */}
      <div id="conteudo">
        {/* Define uma lista não ordenada */}
        <ul>
          {conteudos[estadoAtual].map((value, index /* Mapeia o conteúdo da aba selecionada para uma lista de itens */) => (
              <li key={index}>
                {value}
              </li> /* Cada item de conteúdo é exibido em um elemento <li> */
            )
          )}
        </ul>
      </div>
    </>
  );
}

// Exporta o componente NavegacaoAbas como o export padrão deste módulo
export default NavegacaoAbas;
