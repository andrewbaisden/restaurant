import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
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

const NotFound = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Header />
			<h1>404 Page Not Found</h1>
			<Footer />
		</Fragment>
	);
};

export default NotFound;
