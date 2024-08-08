import { useState } from "react"; // Importa o hook useState da biblioteca React

// Define um componente funcional chamado ToDoList
function ToDoList() {
  // Declara uma variável de estado chamada 'todos' e uma função 'setTodos' para atualizá-la
  // useState([]) inicializa 'todos' como um array vazio
  const [todos, setTodos] = useState([]);
  // Declara uma variável de estado chamada 'inputValue' e uma função 'setInputValue' para atualizá-la
  // useState('') inicializa 'inputValue' com uma string vazia
  const [inputValue, setInputValue] = useState("");

  // Define uma função chamada 'addTodo' para adicionar um novo item à lista de tarefas
  const addTodo = () => {
    // Atualiza o estado 'todos' com um novo array que inclui o valor atual de 'inputValue'
    setTodos([...todos, inputValue]);
    // Limpa o valor do input, redefinindo 'inputValue' para uma string vazia
    setInputValue("");
  };

  // Retorna o JSX que define a interface do componente
  return (
    <div>
      {" "}
      {/* Define um contêiner div para agrupar os elementos */}
      <input
        type="text" // Define o tipo do input como texto
        value={inputValue} // Define o valor do input como a variável de estado 'inputValue'
        onChange={(e) => setInputValue(e.target.value)} // Atualiza 'inputValue' conforme o usuário digita
      />
      <button onClick={addTodo}>Adicionar Tarefa</button>{" "}
      {/* Botão para adicionar uma nova tarefa */}
      <ul>
        {" "}
        {/* Define uma lista não ordenada para exibir as tarefas - Mapeia cada item 'todo' no array 'todos' para um elemento <li> */}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

// Exporta o componente ToDoList como o export padrão deste módulo
export default ToDoList;
