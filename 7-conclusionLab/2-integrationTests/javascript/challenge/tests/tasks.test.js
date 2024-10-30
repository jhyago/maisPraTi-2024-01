const request = require('supertest')  // Importa supertest para simular requisições HTTP
const app = require('../app')  // Importa a instância do aplicativo Express para testes

jest.mock('../taskData')  // Cria um mock do módulo taskData para simular suas funções

beforeEach(async() => {
    jest.clearAllMocks()  // Limpa todos os mocks antes de cada teste para evitar interferências entre os testes
})

describe('Testando To-Do App', () => {  // Define um grupo de testes para o aplicativo To-Do

    it('Deve retornar as tarefas!', async () => {  // Teste para verificar se a rota GET retorna todas as tarefas
        // Mocka o retorno da função getTasks para simular uma tarefa de exemplo
        taskData.getTasks.mockReturnValue([{ id: 1, title: 'Mocked Task', completed: false }])

        const response = await request(app).get('/api/tasks/')  // Simula uma requisição GET para '/api/tasks/'
        
        expect(response.status).toBe(200)  // Verifica se o status HTTP é 200 (OK)
        expect(response.body).toEqual([{ id: 1, title: 'Mocked Task', completed: false }])  // Verifica se o corpo da resposta contém a tarefa mockada
        expect(tasksData.getTasks).toHaveBeenCalledTimes(1)  // Verifica se getTasks foi chamada exatamente uma vez
    })

    it('Deve criar uma nova tarefa!', async () => {  // Teste para verificar a criação de uma nova tarefa
        const newTask = { id: 1, title: 'Nova Tarefa', completed: false }  // Define uma nova tarefa mockada

        tasksData.addTask.mockReturnValue(newTask)  // Mocka a função addTask para retornar a nova tarefa

        const response = await request(app).post('/api/tasks').send(newTask)  // Simula uma requisição POST para '/api/tasks' com a nova tarefa

        expect(response.status).toBe(201)  // Verifica se o status HTTP é 201 (Created)
        expect(response.body).toEqual(newTask)  // Verifica se o corpo da resposta corresponde à nova tarefa mockada
        expect(tasksData.addTask).toHaveBeenCalledWith('Nova Tarefa')  // Verifica se addTask foi chamada com o título 'Nova Tarefa'
    })

    it('Deve retornar um erro 400 se não houver título!', async () => {  // Teste para verificar se a rota POST retorna um erro ao faltar o título
        const response = await request(app).post('/api/tasks').send({})  // Simula uma requisição POST sem enviar um título

        expect(response.status).toBe(400)  // Verifica se o status HTTP é 400 (Bad Request)
        expect(response.body).toHaveProperty('error', 'Titulo é obrigatório!')  // Verifica se a resposta contém a mensagem de erro apropriada
    })

    // Teste para atualizar uma tarefa (comentado)
    // it('Deve atualizar a tarefa existente!', async () => {
    //     const { body: newTask } = await request(app).post('/api/tasks').send({ title: 'Task Atualizada' })

    //     const updatedTask = { id: 1, title: 'Task Atualizada', completed: true }
    //     tasksData.updateTask.mockReturnValue(updatedTask)

    //     const response = await request(app).put(`/api/tasks/1`).send({ title: 'Task Atualizada', completed: true})

    //     expect(response.status).toBe(200)
    //     expect(response.body).toMatchObject({ id: newTask.id , title: 'Task Atualizada', completed: true})
    // })

    it('Deve deletar uma tarefa existente!', async () => {  // Teste para verificar a exclusão de uma tarefa
        const { body: newTask } = await request(app).post('/api/tasks').send({ title: 'Task Deletada' })  // Cria uma nova tarefa para ser deletada

        const response = await request(app).delete(`/api/tasks/${newTask.id}`)  // Simula uma requisição DELETE para '/api/tasks/{id}'

        expect(response.status).toBe(200)  // Verifica se o status HTTP é 200 (OK)
        expect(response.body).toMatchObject({ id: newTask.id, title: 'Task Deletada' })  // Verifica se a resposta contém a tarefa deletada
    })
})