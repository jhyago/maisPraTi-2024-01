let tasks = []  // Inicializa um array vazio para armazenar as tarefas
let idCounter = 0  // Inicializa um contador para fornecer IDs únicos a cada tarefa

// Função para retornar todas as tarefas
const getTasks = () => tasks

// Função para adicionar uma nova tarefa
const addTask = (title) => {
    const task = { id: idCounter++, title, completed: false }  // Cria uma nova tarefa com um ID único, título e status de conclusão falso
    tasks.push(task)  // Adiciona a nova tarefa ao array de tarefas
    return task  // Retorna a tarefa recém-criada
}

// Função para atualizar uma tarefa existente com base no ID
const updateTask = (id, updates) => {
    const task = tasks.find((task) => task.id === id)  // Procura a tarefa no array de tarefas pelo ID

    if(task) {  // Se a tarefa foi encontrada
        Object.assign(task, updates)  // Atualiza a tarefa com as propriedades do objeto 'updates'
    }

    return task  // Retorna a tarefa atualizada ou undefined se a tarefa não for encontrada
}

// Função para excluir uma tarefa com base no ID
const deleteTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id)  // Encontra o índice da tarefa com o ID especificado

    if(index > -1) {  // Se a tarefa foi encontrada
        return tasks.splice(index, 1)[0]  // Remove a tarefa do array e retorna a tarefa excluída
    }

    return null  // Retorna null se a tarefa não for encontrada
}

// Exporta as funções para que possam ser usadas em outros arquivos
module.exports = { getTasks, addTask, updateTask, deleteTask }