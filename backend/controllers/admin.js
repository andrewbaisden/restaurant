const Product = require('../models/Products');

exports.postProducts = (req, res) => {
	const { name, allergens, kj, kcal, fat, sat, carbs, sugars, protien, salt } = req.body;

	const product = new Product(null, name, allergens, kj, kcal, fat, sat, carbs, sugars, protien, salt);
	product.save();
	console.log('Product Added');
	res.status(200).json({ msg: 'Product Added' });
};

exports.getProducts = (req, res) => {
	Product.fetchAll((products) => {
		console.log(products);
		res.json(products);
	});
};
