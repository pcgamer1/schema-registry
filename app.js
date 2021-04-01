const express = require('express')
const schemaRouter = require('./src/routers/schemaRouter')
require('dotenv').config({path: __dirname + '/.env'})

const app = express()

app.use(express.json())
app.use(schemaRouter)

module.exports = app