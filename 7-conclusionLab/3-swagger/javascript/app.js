// Importa o módulo 'express' para facilitar a criação do servidor
const express = require('express')
// Importa o módulo 'swagger-ui-express' para servir a documentação da API
const swaggerUi = require('swagger-ui-express')
// Importa o módulo 'swagger-jsdoc' para gerar a documentação da API a partir dos comentários do código
const swaggerJsdoc = require('swagger-jsdoc')
// Define a porta em que o servidor irá rodar
const PORT = 3000

// Configurações para o Swagger, que gera a documentação da API
const swaggerOptions = {
    swaggerDefinition: {
        // Define a versão da especificação do Swagger usada
        openapi: '3.0.0',
        // Informações sobre a API, como título, versão e descrição
        info: {
            title: 'API de Items',
            version: '1.0.0',
            description: 'API utilizada de exemplo em aula'
        },
        // Configura o servidor em que a API estará disponível, usando a porta definida
        servers: {
            url: `http://localhost:${PORT}`
        }
    },
    // Define o arquivo onde estão as rotas documentadas
    apis: ['./app.js']
}

// Gera a documentação do Swagger com base nas opções definidas acima
const swaggerDocs = swaggerJsdoc(swaggerOptions)

// Cria uma aplicação Express
const app = express()

// Define a rota '/docs' para servir a documentação da API gerada pelo Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
// Permite que a aplicação parseie requisições com payload JSON
app.use(express.json())

/**
 *@swagger
 * /api/items:
 *   get:
 *       summary: retorna a lista de itens 
 *       responses:
 *           200: 
 *               description: uma lista de itens
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: array
 *                           items:
 *                               type: string
 */
 
// Define a rota GET para '/api/items', que retorna uma lista de itens
app.get('/api/items', (req, res) => {
    // Lista de itens exemplo
    const items = ['Notebook', 'Celular', 'Headset']
    // Retorna a lista de itens com status 200 (OK) em formato JSON
    res.status(200).json(items)
})

/**
 * @swagger
 * /api/items:
 *  post:
 *      summary: adiciona um novo item
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      item:
 *                          type: string
 *                          decription: o nome do item a ser adicionado
 *      responses:
 *          201:
 *              description: Item adicionado com sucesso
 */

// Define a rota POST para '/api/items', que adiciona um novo item
app.post('/api/items', (req, res) => {
    // Extrai o nome do item do corpo da requisição
    const { item } = req.body
    // Retorna uma mensagem de sucesso com status 201 (Criado), indicando que o item foi adicionado
    res.status(201).json({ message: `Item ${item} adicionado com sucesso!` })
})

// Inicia o servidor e o faz escutar na porta definida (3000)
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})