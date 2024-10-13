// Importa os hooks useState e useEffect da biblioteca React para gerenciar estado e efeitos colaterais.
import { useState, useEffect } from "react";
// Importa a biblioteca axios para fazer requisições HTTP.
import axios from "axios";
// Importa a biblioteca styled-components para criar componentes estilizados.
import styled from "styled-components";
import {
  deleteTasks,
  getToDoList,
  postTask,
  updateTasks,
} from "../../../services/api";

// Cria um componente estilizado chamado Container usando styled-components.
// Esse componente estiliza uma <div> com flexbox para centralizar o conteúdo e adicionar padding, bordas e sombras.
const Container = styled.div`
  display: flex; // Define o layout como flexbox.
  flex-direction: column; // Organiza os itens em uma coluna.
  align-items: center; // Alinha os itens no centro horizontalmente.
  justify-content: center; // Alinha os itens no centro verticalmente.
  padding: 40px; // Adiciona padding de 40px ao redor do conteúdo.
  background: black; // Define o fundo como branco.
  border-radius: 15px; // Adiciona bordas arredondadas de 15px.
  box-shadow: 0 6px 12px wheat; // Adiciona uma sombra sutil ao redor do componente.
  max-width: 500px; // Define a largura máxima como 500px.
  margin: 50px auto; // Adiciona margem de 50px acima e abaixo e centraliza horizontalmente.
`;

// Cria um componente estilizado chamado Title usando styled-components.
// Esse componente estiliza um <h2> com cor, margem, tamanho da fonte e alinhamento.
const Title = styled.h2`
  color: wheat; // Define a cor do texto como um tom escuro de cinza.
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
  box-shadow: inset 0 2px 4px wheat; // Adiciona uma sombra interna sutil.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  transition: border-color 0.3s; // Adiciona uma transição suave para a cor da borda.

  &:focus {
    // Aplica estilos ao input quando ele está em foco.
    border-color: wheat; // Muda a cor da borda para azul quando o input está em foco.
    outline: none; // Remove o contorno padrão quando o input está em foco.
  }
`;

// Cria um componente estilizado chamado Button usando styled-components.
// Esse componente estiliza um <button> com padding, cor de fundo, cor do texto, bordas e efeitos de transição.
const Button = styled.button`
  padding: 12px 20px; // Adiciona padding de 12px verticalmente e 20px horizontalmente.
  background-color: wheat; // Define a cor de fundo como azul.
  color: black; // Define a cor do texto como branco.
  border: 2px solid black; // Remove a borda padrão do botão.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  transition: background-color 0.3s; // Adiciona uma transição suave para a cor de fundo.
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo do botão.

  &:hover {
    // Aplica estilos ao botão quando o cursor está sobre ele.
    background-color: black; // Muda a cor de fundo para um tom mais escuro de azul.
    color: wheat;
  border: 2px solid wheat; // Remove a borda padrão do botão.
  }
`;

// Cria um componente estilizado chamado TaskList usando styled-components.
// Esse componente estiliza uma <ul> para listar as tarefas sem estilo de lista padrão.
const TaskList = styled.ul`
  list-style-type: none; // Remove os pontos de lista padrão.
  padding: 0; // Remove o padding padrão.
  width: 100%; // Define a largura como 100% do contêiner pai.
`;

// Cria um componente estilizado chamado TaskItem usando styled-components.
// Esse componente estiliza um <li> com fundo, bordas arredondadas, padding, margem, sombra e efeitos de transição.
const TaskItem = styled.li`
  background: wheat; // Define o fundo como um tom muito claro de cinza.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  padding: 10px; // Adiciona padding de 10px dentro do item.
  margin-bottom: 10px; // Adiciona uma margem de 10px abaixo do item.
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra sutil ao redor do item.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  transition: background-color 0.3s; // Adiciona uma transição suave para a cor de fundo.
  display: flex; // Define o layout como flexbox.
  justify-content: space-between; // Distribui o espaço entre os itens do item.
  align-items: center; // Alinha os itens no centro verticalmente.
  border: 1px solid black;


  &:hover {
    // Aplica estilos ao item quando o cursor está sobre ele.
    background-color: black; // Muda a cor de fundo para um tom ligeiramente mais escuro de cinza.
    color: wheat;
    border: 1px solid wheat;
  }

  button {
    // Estiliza os botões dentro do TaskItem.
    margin-left: 10px; // Adiciona uma margem de 10px à esquerda do botão.
    background: transparent; // Define o fundo como transparente.
    border: none; // Remove a borda padrão do botão.
    color: red; // Define a cor do texto como vermelho.
    cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
    font-size: 16px; // Define o tamanho da fonte como 16px.

    &:hover {
      // Aplica estilos ao botão quando o cursor está sobre ele.
      color: darkred; // Muda a cor do texto para um tom mais escuro de vermelho.
    }
  }
`;

// Cria um componente estilizado chamado EditInput usando styled-components.
// Esse componente estiliza um <input> para edição de tarefas com padding, borda, bordas arredondadas e sombra interna.
const EditInput = styled.input`
  margin-left: 10px; // Adiciona uma margem de 10px à esquerda do input.
  padding: 6px; // Adiciona padding de 6px dentro do input.
  border: 1px solid #ccc; // Define uma borda de 1px sólida e cinza clara.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  width: 60%; // Define a largura como 60% do contêiner pai.
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra interna sutil.
  font-size: 14px; // Define o tamanho da fonte como 14px.
  transition: border-color 0.3s; // Adiciona uma transição suave para a cor da borda.

  &:focus {
    // Aplica estilos ao input quando ele está em foco.
    border-color: #007bff; // Muda a cor da borda para azul quando o input está em foco.
    outline: none; // Remove o contorno padrão quando o input está em foco.
  }
`;

// Define o componente funcional TodoApp.
const TodoApp = () => {
  // Usa o hook useState para criar variáveis de estado para a tarefa atual, lista de tarefas, tarefa em edição e texto da tarefa em edição.
  const [task, setTask] = useState(""); // Estado para a nova tarefa a ser adicionada.
  const [tasks, setTasks] = useState([]); // Estado para a lista de tarefas.
  const [editingTaskId, setEditingTaskId] = useState(null); // Estado para o id da tarefa que está sendo editada.
  const [editingTaskText, setEditingTaskText] = useState(""); // Estado para o texto da tarefa que está sendo editada.

  // Usa o hook useEffect para buscar as tarefas quando o componente é montado.
  useEffect(() => {
    fetchTasks();
  }, []);

  // Função que busca as tarefas da API e atualiza o estado com as tarefas recebidas.
  const fetchTasks = () => {
    getToDoList();
    setTasks(JSON.parse(localStorage.getItem("todolist"))); // Atualiza o estado com os dados recebidos.
  };

  // Função que adiciona uma nova tarefa.
  const addTask = async () => {
    if (task) {
      // Verifica se o campo da tarefa não está vazio.
      postTask(task);
      setTasks(JSON.parse(localStorage.getItem("todolist"))); // Atualiza o estado com os dados recebidos.

      setTask(""); // Limpa o campo de entrada.
    }
  };

  // Função que exclui uma tarefa.
  const deleteTask = async (id) => {
    deleteTasks(id); // Faz uma requisição DELETE para excluir a tarefa com o id fornecido.
    setTasks(tasks.filter((task) => task.id !== id)); // Atualiza o estado removendo a tarefa excluída.
  };

  // Função que inicia o processo de edição de uma tarefa.
  const editTask = (id, text) => {
    setEditingTaskId(id); // Define o id da tarefa que está sendo editada.
    setEditingTaskText(text); // Define o texto da tarefa que está sendo editada.
  };

  // Função que atualiza uma tarefa existente.
  const updateTask = async (id) => {
    updateTasks(editingTaskId, editingTaskText);
    setEditingTaskId(null); // Limpa o id da tarefa em edição.
    setEditingTaskText(""); // Limpa o texto da tarefa em edição.
    setTasks(JSON.parse(localStorage.getItem("todolist"))); // Atualiza o estado com os dados recebidos.
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      <Title>Todo App</Title> {/* Exibe o título do aplicativo de tarefas */}
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={addTask}>Add Task</Button>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            {editingTaskId === task.id ? (
              <EditInput
                type="text"
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)}
                onBlur={() => updateTask(task.id)}
              />
            ) : (
              <>
                {task.text}
                <div>
                  <button onClick={() => editTask(task.id, task.text)}>
                    Edit
                  </button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

// Exporta o componente TodoApp para que possa ser utilizado em outras partes da aplicação.
export default TodoApp;
