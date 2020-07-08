import { GET_PRODUCTS, GET_PRODUCT } from '../actions/types';

const intitialState = [
	{
		test: 'Test',
	},
];

export default function (state = intitialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_PRODUCTS:
			return [...state, payload];
		case GET_PRODUCT:
			return [...state, payload];
		default:
			return state;
	}
}
