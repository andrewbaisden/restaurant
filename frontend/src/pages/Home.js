import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts, getProduct } from '../actions/menu';

const Home = ({ getProducts, getProduct }) => {
	useEffect(() => {
		getProducts();
		getProduct('b4bc2e28-21a3-47ea-ba3b-6bad40b35504');
	}, []);
	return (
		<Fragment>
			<h1>Home Page</h1>
			{/* <button onClick={getProducts}>Get Products</button> */}
		</Fragment>
	);
};

export default connect(null, { getProducts, getProduct })(Home);
