const request = require('supertest')  // Importa o módulo supertest para simular e testar requisições HTTP
const app = require('../app')  // Importa a instância do aplicativo para que as rotas possam ser testadas

describe('Testando API', () => {  // Define um bloco de testes com uma descrição "Testando API"
    
    it('Deve retornar todos os usuários com status 200', async () => {  // Define um caso de teste com uma descrição
        const response = await request(app).get('/api/users')  // Simula uma requisição GET para a rota '/api/users'

        expect(response.status).toBe(200)  // Verifica se o status HTTP da resposta é 200 (OK)
        expect(response.body).toHaveProperty('users')  // Verifica se o corpo da resposta possui a propriedade 'users'
        expect(response.body.users).toHaveLength(2)  // Verifica se o array 'users' possui exatamente 2 itens
        expect(response.body.users[0]).toEqual({id: 1, name: 'Alice'})  // Verifica se o primeiro item do array 'users' corresponde ao objeto esperado
    })
})