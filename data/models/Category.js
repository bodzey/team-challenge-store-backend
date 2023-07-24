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
	.then(() => console.log(`Table "Categories" exist.`))
	.catch(err => console.log(`!!! ERROR !!!: Table "Categories" not exist!.`, err))
module.exports = Category
