const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const p = path.join(`${__dirname}/../data/products.json`);

const getProductsFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

module.exports = class Products {
	constructor(id, name, allergens, kj, kcal, fat, sat, carbs, sugars, protien, salt) {
		this.id = id;
		this.name = name;
		this.allergens = allergens;
		this.kj = kj;
		this.kcal = kcal;
		this.fat = fat;
		this.sat = sat;
		this.carbs = carbs;
		this.sugars = sugars;
		this.protien = protien;
		this.salt = salt;
	}
	save() {
		getProductsFromFile((products) => {
			if (this.id) {
				const existingProduct = products.findIndex((p) => p.id === this.id);
				const updatedProducts = [...products];
				updatedProducts[existingProduct] = this;

				fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
					console.log(err);
				});
			} else {
				this.id = uuidv4();
				products.push(this);

				fs.writeFile(p, JSON.stringify(products), (err) => {
					console.log(err);
				});
			}
		});
	}
	static deleteById(id) {
		getProductsFromFile((products) => {
			const updatedProduct = products.filter((p) => p.id !== id);
			fs.writeFile(p, JSON.stringify(updatedProduct), (err) => {
				console.log(err);
			});
		});
	}
	static fetchAll(cb) {
		getProductsFromFile(cb);
	}
	static findById(id, cb) {
		getProductsFromFile((product) => {
			const productId = product.find((p) => p.id === id);
			cb(productId);
		});
	}
};
