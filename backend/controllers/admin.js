const Product = require('../models/Products');

exports.postProducts = (req, res) => {
	const { name, img, description, allergens, kj, kcal, fat, sat, carbs, sugars, protien, salt } = req.body;

	const product = new Product(
		null,
		name,
		img,
		description,
		allergens,
		kj,
		kcal,
		fat,
		sat,
		carbs,
		sugars,
		protien,
		salt
	);
	product.save();
	console.log('Product Added');
	res.status(200).redirect('http://localhost:3000/menu');
};

exports.getProducts = (req, res) => {
	Product.fetchAll((products) => {
		console.log(products);
		res.json(products);
	});
};

exports.getProduct = (req, res) => {
	const prodId = req.params.productId;

	Product.findById(prodId, (product) => {
		console.log(product);
		res.status(200).json(product);
	});
};

exports.postDeleteProduct = (req, res) => {
	const prodId = req.body.productId;

	if (!prodId) {
		res.json({ msg: 'No Product Found' });
	}
	Product.deleteById(prodId);
	console.log('Product Deleted');
	res.json({ msg: 'Product Deleted' });
};
