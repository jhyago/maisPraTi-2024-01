const express = require('express')
const app = express()

const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'João'}
]

app.get('/api/users', (req, resp) => {
    resp.status(200).json({users})
})

module.exports = app