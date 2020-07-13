import { ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCT } from './types';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
	axios
		.get('http://localhost:8080/menu')
		.then((response) => {
			// console.log(response);
			const data = response.data;
			dispatch({
				type: GET_PRODUCTS,
				payload: { data },
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getProduct = (product) => (dispatch) => {
	axios
		.get(`http://localhost:8080/menu/${product}`)
		.then((response) => {
			// console.log(response);
			const data = response.data;
			dispatch({
				type: GET_PRODUCT,
				payload: { data },
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
