const express = require('express')
const bodyParser = require('body-parser')

const { getTasks, addTask, updateTask, deleteTask } = require('./taskData')

const app = express()
app.use(bodyParser.json())

app.get('/api/tasks', (req, res) => {
    res.status(200).json(getTasks())
})

app.post('/api/tasks', (req, res) => {
    const { title } = req.body
    if(!title) {
        return res.status(400).json({ error: 'Titulo é obrigatório!' })
    }

    const newTask = addTask(title)
    res.status(201).json(newTask)
})

app.put('/api/tasks/:id', (req, res) => {
    const { id } = req.params
    const { title, completed } = req.body
    const updatedTask = updateTask(Number(id), { title, completed })

    if(!updatedTask) {
        return res.status(404).json({error: 'Task não encontrada'})
    }

    res.status(200).json(updatedTask)
})

app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params
    const deletedTasks = deleteTask(Number(id))

    if(!deletedTasks) {
        return res.status(404).json({error: 'Task não encontrada'})
    }

    res.status(200).json(deletedTasks)
})

module.exports = app