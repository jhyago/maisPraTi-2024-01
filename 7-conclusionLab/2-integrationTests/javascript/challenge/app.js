const express = require('express')  // Importa o módulo Express para criar o servidor e gerenciar rotas
const bodyParser = require('body-parser')  // Importa o módulo body-parser para processar dados JSON enviados no corpo das requisições

// Importa as funções para manipular tarefas (obter, adicionar, atualizar e deletar)
const { getTasks, addTask, updateTask, deleteTask } = require('./taskData')

const app = express()  // Cria uma instância do aplicativo Express
app.use(bodyParser.json())  // Configura o Express para usar o body-parser e permitir o processamento de JSON nas requisições

// Rota GET para listar todas as tarefas
app.get('/api/tasks', (req, res) => {  
    res.status(200).json(getTasks())  // Retorna as tarefas com status 200 (OK) no formato JSON
})

// Rota POST para adicionar uma nova tarefa
app.post('/api/tasks', (req, res) => {  
    const { title } = req.body  // Extrai o título da nova tarefa do corpo da requisição
    if(!title) {  // Verifica se o título foi fornecido
        return res.status(400).json({ error: 'Titulo é obrigatório!' })  // Retorna um erro 400 (Bad Request) se o título estiver ausente
    }

    const newTask = addTask(title)  // Adiciona a nova tarefa chamando a função 'addTask'
    res.status(201).json(newTask)  // Retorna a nova tarefa com status 201 (Created)
})

// Rota PUT para atualizar uma tarefa existente com base no ID
app.put('/api/tasks/:id', (req, res) => {  
    const { id } = req.params  // Extrai o ID da tarefa dos parâmetros da URL
    const { title, completed } = req.body  // Extrai o título e o status de conclusão do corpo da requisição
    const updatedTask = updateTask(Number(id), { title, completed })  // Atualiza a tarefa chamando a função 'updateTask' com o ID e novos dados

    if(!updatedTask) {  // Verifica se a tarefa foi encontrada e atualizada
        return res.status(404).json({error: 'Task não encontrada'})  // Retorna um erro 404 (Not Found) se a tarefa não existir
    }

    res.status(200).json(updatedTask)  // Retorna a tarefa atualizada com status 200 (OK)
})

// Rota DELETE para excluir uma tarefa com base no ID
app.delete('/api/tasks/:id', (req, res) => {  
    const { id } = req.params  // Extrai o ID da tarefa dos parâmetros da URL
    const deletedTasks = deleteTask(Number(id))  // Exclui a tarefa chamando a função 'deleteTask' com o ID

    if(!deletedTasks) {  // Verifica se a tarefa foi encontrada e excluída
        return res.status(404).json({error: 'Task não encontrada'})  // Retorna um erro 404 (Not Found) se a tarefa não existir
    }

    res.status(200).json(deletedTasks)  // Retorna a tarefa excluída com status 200 (OK)
})

module.exports = app  // Exporta a instância do aplicativo Express para que possa ser utilizada em outros arquivos, como para iniciar o servidor ou para testes