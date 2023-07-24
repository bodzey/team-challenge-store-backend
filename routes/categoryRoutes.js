const express = require('express')
const router = express.Router()

const { getAllCategories } = require('../controllers/CategoryController')

router.get('/allCategories', getAllCategories)

module.exports = router
