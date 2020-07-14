import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled, { createGlobalStyle } from 'styled-components';

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

const MainContent = styled.main`
	margin: 0 auto;
	width: 120rem;
	max-width: 100%;
	text-align: center;
`;

const AdminH1 = styled.h1`
	text-transform: uppercase;
	font-size: 3rem;

	&::after {
		content: '';
		display: block;
		border-bottom: 1px solid #ffaa42;
		width: 100%;
		height: 0.1rem;
	}
`;

const AdminH2 = styled.h2`
	text-transform: uppercase;
	font-size: 2rem;
	margin-top: 2rem;
`;

const AdminForm = styled.form`
	width: 50rem;
	margin: 4rem auto;
`;

const FormFieldGroup = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin-bottom: 2rem;
`;

const FormLabel = styled.label`
	margin-right: 5rem;
	width: 5rem;
	text-align: left;
`;

const FormInput = styled.input`
	width: 40rem;
	height: 2rem;
	padding: 1rem;
`;

const AddItemButton = styled.button`
	background: #e68c1d;
	padding: 1rem;
	text-align: center;
	text-decoration: none;
	color: #ffffff;
	text-transform: uppercase;
	font-size: 1.4rem;
	font-weight: 700;
	border: 1px solid #ffffff;
	cursor: pointer;

	&:hover {
		background: #efab58;
	}
`;

const Admin = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Header />
			<MainContent>
				<div>
					<AdminH1>Admin</AdminH1>
					<AdminH2>Add New Product</AdminH2>
				</div>
				<AdminForm method="POST" action="http://localhost:8080/add-product">
					<FormFieldGroup>
						<FormLabel>Name</FormLabel>
						<FormInput type="text" name="name" required />
					</FormFieldGroup>
					<FormFieldGroup>
						<FormLabel>Image</FormLabel>
						<FormInput type="text" name="img" required />
					</FormFieldGroup>
					<FormFieldGroup>
						<FormLabel>Description</FormLabel>
						<FormInput type="text" name="description" required />
					</FormFieldGroup>
					<FormFieldGroup>
						<FormLabel>Allergens</FormLabel>
						<FormInput type="text" name="allergens" required />
					</FormFieldGroup>
					<FormFieldGroup>
						<FormLabel>kj</FormLabel>
						<FormInput type="text" name="kj" required />
					</FormFieldGroup>
					<FormFieldGroup>
						<FormLabel>kcal</FormLabel>
						<FormInput type="text" name="kcal" required />
					</FormFieldGroup>
					<FormFieldGroup>
						<FormLabel>fat</FormLabel>
						<FormInput type="text" name="fat" required />
					</FormFieldGroup>
					<FormFieldGroup>
						<FormLabel>sat</FormLabel>
						<FormInput type="text" name="sat" required />
					</FormFieldGroup>
					<FormFieldGroup>
						<FormLabel>carbs</FormLabel>
						<FormInput type="text" name="carbs" required />
					</FormFieldGroup>
					<FormFieldGroup>
						<FormLabel>sugars</FormLabel>
						<FormInput type="text" name="sugars" required />
					</FormFieldGroup>
					<FormFieldGroup>
						<FormLabel>protien</FormLabel>
						<FormInput type="text" name="protien" required />
					</FormFieldGroup>
					<FormFieldGroup>
						<FormLabel>salt</FormLabel>
						<FormInput type="text" name="salt" required />
					</FormFieldGroup>
					<FormFieldGroup>
						<AddItemButton>Add New Item</AddItemButton>
					</FormFieldGroup>
				</AdminForm>
			</MainContent>
			<Footer />
		</Fragment>
	);
};
export default Admin;
