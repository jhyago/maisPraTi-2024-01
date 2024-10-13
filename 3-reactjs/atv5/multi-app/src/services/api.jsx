import axios from "axios";
import list from '../db/db.json'

export const getToDoList = async () => {

  try {
    localStorage.setItem("todolist", JSON.stringify(list.tasks));
  } catch (error) {
    console.error("Erro ao buscar arquivo JSON:", error);
  }
};

export const postTask = async (task) => {
  const lista = JSON.parse(localStorage.getItem("todolist"));

  const newTask = {
    id: lista.length + 1,
    text: task,
  };

  lista.push(newTask);
  localStorage.setItem("todolist", JSON.stringify(lista));
};

export const updateTasks = async (id, task) => {
  const lista = JSON.parse(localStorage.getItem("todolist"));

  const index = lista.findIndex((task) => task.id === id);

  if (index > -1) {
    lista[index].text = task;
  }

  localStorage.setItem("todolist", JSON.stringify(lista));
};

export const deleteTasks = async (id) => {
  let lista = JSON.parse(localStorage.getItem("todolist"));

  lista = lista.filter((task) => task.id !== id);

  localStorage.setItem("todolist", JSON.stringify(lista));
};
