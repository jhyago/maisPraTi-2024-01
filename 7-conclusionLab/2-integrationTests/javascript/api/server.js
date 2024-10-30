const express = require('express')  // Importa o módulo Express para criar o servidor e gerenciar rotas
const app = express()  // Cria uma instância do aplicativo Express

// Define uma lista de usuários para simular dados de exemplo
const users = [
    {id: 1, name: 'Alice'},  // Usuário com id 1 e nome 'Alice'
    {id: 2, name: 'João'}    // Usuário com id 2 e nome 'João'
]

// Define uma rota GET para '/api/users' que retorna a lista de usuários
app.get('/api/users', (req, resp) => {  
    resp.status(200).json({users})  // Responde com status 200 (OK) e um objeto JSON contendo a lista de usuários
})

module.exports = app  // Exporta a instância do aplicativo Express para que possa ser importada em outros arquivos, como para testes