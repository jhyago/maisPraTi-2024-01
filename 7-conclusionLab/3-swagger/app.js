const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const PORT = 3000

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Items',
            version: '1.0.0',
            description: 'API utilizada de exemplo em aula'
        },
        servers: {
            url: `http://localhost:${PORT}`
        }
    },
    apis: ['./app.js']
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)


const app = express()

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
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

app.get('/api/items', (req, res) => {
    const items = ['Notebook', 'Celular', 'Headset']
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

app.post('/api/items', (req, res) => {
    const { item } = req.body

    res.status(201).json({ message: `Item ${item} adicionado com sucesso!` })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})