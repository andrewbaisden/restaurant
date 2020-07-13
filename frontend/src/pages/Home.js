import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts, getProduct } from '../actions/menu';
import { createGlobalStyle } from 'styled-components';
import MainHome from '../components/MainHome';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;700&display=swap');
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html {
		font-size: 62.5%;
	}
	body {
		font-size: 1.7rem;
		font-family: 'Barlow Condensed', sans-serif;
		color: #111111;
	}
`;

const Home = ({ getProducts, getProduct }) => {
	useEffect(() => {
		getProducts();
		getProduct('b4bc2e28-21a3-47ea-ba3b-6bad40b35504');
	}, []);
	return (
		<Fragment>
			<GlobalStyle />
			<Header />
			<MainHome />
			<Footer />
		</Fragment>
	);
};

export default connect(null, { getProducts, getProduct })(Home);
