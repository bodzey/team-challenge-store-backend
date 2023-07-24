const Category = require('../data/models/Category')

const category = [
	{
		Name: 'Fiction',
	},
	{
		Name: 'Education',
	},
	{
		Name: 'Nature',
	},
	{
		Name: 'Myths',
	},
	{
		Name: 'Activities',
	},
	{
		Name: 'Comics',
	},
]

const Seed = async () => {
	for (const categoryData of category) {
		const category = await Category.findOne({
			where: { Name: categoryData.Name },
		})
		if (category) {
			await category.update(categoryData)
		} else {
			await new Category(categoryData).save()
		}
	}
}

Seed()
