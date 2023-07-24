const { Sequelize } = require('sequelize')
const db = require('../config/database')

const Category = db.define('Category', {
	Name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
})

Category.sync()
	.then(() => console.log(`Table "Categories" created.`))
	.catch(err => console.log(`!!! ERROR !!!: Table "Categories" not created.`, err))
module.exports = Category
