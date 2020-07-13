import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts, getProduct } from '../actions/menu';
import styled from 'styled-components';

const MainContent = styled.main`
	margin: 0 auto;
	width: 120rem;
	max-width: 100%;
`;

const MenuTitleContainer = styled.div`
	margin: 0 auto;
	width: 30rem;
`;

const OneForAllH1 = styled.h1`
	text-transform: uppercase;
	font-size: 4rem;
	text-align: center;
	margin: 2rem 0 2rem 0;

	&::after {
		content: '';
		display: block;
		background: #ffaa42;
		width: 100%;
		text-align: center;
		height: 0.2rem;
	}
`;

const MainMenuFoodContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
`;

const FoodMenuItem = styled.div`
	max-width: 40rem;
	width: 100%;
`;

const FoodMenuItemImg = styled.img`
	max-width: 40rem;
	width: 100%;
	height: 25rem;
`;

const FoodContentH1 = styled.h1`
	text-transform: uppercase;
	font-size: 2.5rem;
	text-align: center;
	margin-top: 1rem;

	&::after {
		content: '';
		display: block;
		border-bottom: 1px solid #ffaa42;
		width: 100%;
		height: 0.1rem;
	}
`;

const FoodDescription = styled.p`
	margin: 2rem 0 2rem 0;
`;

const FoodList = styled.ul`
	list-style: none;
	margin: 2rem 0 2rem 0;
	border: 1px solid #000000;
	padding: 2rem;
`;

const FoodListNutrition = styled.li`
	padding: 0.5rem 0 0.5rem 0;
`;

const MainMenu = ({ getProducts, getProduct, menu }) => {
	useEffect(() => {
		getProducts();
		getProduct('b4bc2e28-21a3-47ea-ba3b-6bad40b35504');
	}, []);
	if (menu.length <= 2) {
		console.log('Data Not Loaded');
	} else {
		console.log('Data', menu[2].data.name);
	}
	return (
		<Fragment>
			{/* <div>{menu.length <= 2 ? <div>Data not loaded</div> : <div>{menu[2].data.name}</div>}</div> */}
			<MainContent>
				{menu.length <= 2 ? (
					<div>
						{/* <h1>Error the food failed to load :(</h1> */}
						<div></div>
					</div>
				) : (
					<div>
						<MenuTitleContainer>
							<OneForAllH1>One for All</OneForAllH1>
						</MenuTitleContainer>
						<MainMenuFoodContainer>
							{menu[1].data.map((food) => (
								<FoodMenuItem key={food.id}>
									<div>
										<FoodMenuItemImg src={food.img} alt={food.name} />
										<FoodContentH1>{food.name}</FoodContentH1>
										<FoodDescription>{food.description}</FoodDescription>
									</div>
									<div>
										<FoodList>
											<FoodListNutrition>Allergens: {food.allergens}</FoodListNutrition>
											<FoodListNutrition>kj: {food.kj}</FoodListNutrition>
											<FoodListNutrition>kcal: {food.kcal}</FoodListNutrition>
											<FoodListNutrition>fat: {food.fat}</FoodListNutrition>
											<FoodListNutrition>sat: {food.sat}</FoodListNutrition>
											<FoodListNutrition>carbs: {food.carbs}</FoodListNutrition>
											<FoodListNutrition>sugars: {food.sugars}</FoodListNutrition>
											<FoodListNutrition>salt: {food.salt}</FoodListNutrition>
										</FoodList>
									</div>
								</FoodMenuItem>
							))}
						</MainMenuFoodContainer>
					</div>
				)}
			</MainContent>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	menu: state.menu,
});

export default connect(mapStateToProps, { getProducts, getProduct })(MainMenu);
