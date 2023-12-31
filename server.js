const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const CategoryRoutes = require('./routes/categoryRoutes')
const Database = require('./data/config/database')

Database.authenticate()
	.then(() => console.log(`Connected to "TeamChallenge-BookStore-Db" database successfully`))
	.catch(err => console.log('Connection error. ', err))

const PORT = 5000
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(
	cors({
		origin: '*',
		methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
	})
)

app.use('/api/Category', CategoryRoutes)

app.listen(PORT, () => console.log(`TeamChallenge Store Backend Server running on port ${PORT}`))
