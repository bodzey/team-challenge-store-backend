const Category = require('../data/models/Category')
const ServiceResponse = require('../services/ServiceResponse')

exports.getAllCategories = async (req, res, next) => {
	try {
		const categories = await Category.findAll()
		if (categories) {
			res.status(200).json(new ServiceResponse('All categories successfully loaded.', null, null, true, categories))
		} else {
			res.status(404).json(new ServiceResponse('Categories not found.', null, null, false, null))
		}
	} catch (error) {
		res.status(500).json(new ServiceResponse('Server error.', null, error, false, null))
	}
}
