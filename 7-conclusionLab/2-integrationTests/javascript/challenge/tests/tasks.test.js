const request = require('supertest')
const app = require('../app')

jest.mock('../taskData')

beforeEach(async() => {
    jest.clearAllMocks()
})

describe('Testando To-Do App', () => {
    it('Deve retornar as tarefas!', async () => {

        taskData.getTasks.mockReturnValue([{ id: 1, title: 'Mocked Task', completed: false }])

        const response = await request(app).get('/api/tasks/')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([{ id: 1, title: 'Mocked Task', completed: false }])
        expect(tasksData.getTasks).toHaveBeenCalledTimes(1)
    })

    it('Deve criar uma nova tarefa!', async () => {
        const newTask = { id: 1, title: 'Nova Tarefa', completed: false }
        // const response = await request(app).post('/api/tasks').send({title: 'Nova Tarefa!'})
        tasksData.addTask.mockReturnValue(newTask)

        const response = await request(app).post('/api/tasks').send(newTask)

        expect(response.status).toBe(201)
        expect(response.body).toEqual(newTask)
        expect(tasksData.addTask).toHaveBeenCalledWith('Nova Tarefa')      
    })

    it('Deve retornar um erro 400 se não houver título!', async () => {
        const response = await request(app).post('/api/tasks').send({})

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('error', 'Titulo é obrigatório!')
    })

    // it('Deve atualizar a tarefa existente!', async () => {
    //     const { body: newTask } = await request(app).post('/api/tasks').send({ title: 'Task Atualizada' })

    //     const updatedTask = { id: 1, title: 'Task Atualizada', completed: true }
    //     tasksData.updateTask.mockReturnValue(updatedTask)

    //     const response = await request(app).put(`/api/tasks/1`).send({ title: 'Task Atualizada', completed: true})

    //     expect(response.status).toBe(200)
    //     expect(response.body).toMatchObject({ id: newTask.id , title: 'Task Atualizada', completed: true})
    // })

    it('Deve deletar uma tarefa existente!', async () => {
        const { body: newTask } = await request(app).post('/api/tasks').send({ title: 'Task Deletada'})

        const response = await request(app).delete(`/api/tasks/${newTask.id}`)

        expect(response.status).toBe(200)
        expect(response.body).toMatchObject({ id: newTask.id, title: 'Task Deletada'})
    })
})