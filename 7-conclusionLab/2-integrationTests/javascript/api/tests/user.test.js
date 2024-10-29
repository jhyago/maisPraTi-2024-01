const request = require('supertest')
const app = require('../app')

describe('Testando API', () => {
    it('Deve retornar todos os usuários com status 200', async () => {
        const response = await request(app).get('/api/users')

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('users')
        expect(response.body.users).toHaveLength(2)
        expect(response.body.users[0]).toEqual({id: 1, name: 'Alice'})
    })
})