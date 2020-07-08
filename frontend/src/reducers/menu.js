const intitialState = [
	{
		test: 'Test',
	},
];

export default function (state = intitialState, action) {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
}
