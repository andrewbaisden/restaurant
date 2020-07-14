import React, { Fragment } from 'react';
import FlameDeliciousLogo from '../img/flame-delicious-logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContent = styled.header`
	margin: 0 auto;
	width: 120rem;
	max-width: 100%;
	display: flex;
	flex-flow: row wrap;
	background: #ffffff;
	padding: 2rem;
	justify-content: space-between;
	align-items: center;
`;

const HeaderLogo = styled.div`
	@media screen and (max-width: 700px) {
		margin: 0 auto;
	}
`;

const MainNav = styled.nav`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	text-transform: uppercase;

	@media screen and (max-width: 700px) {
		margin: 4rem auto;
	}
`;

const MainNavLink = styled.a`
	display: block;
	text-decoration: none;
	margin-right: 2rem;
	color: #111111;
	font-weight: 700;

	&:hover {
		color: #666666;
	}
`;

const Header = () => {
	return (
		<Fragment>
			<HeaderContent>
				<HeaderLogo>
					<Link to="/" href="/">
						<img src={FlameDeliciousLogo} alt="Flame Delicious Logo" height="80" />
					</Link>
				</HeaderLogo>
				<MainNav>
					<MainNavLink href="/admin" to="/admin">
						Admin
					</MainNavLink>
					<MainNavLink href="/" to="/">
						Home
					</MainNavLink>
					<MainNavLink href="/menu" to="/menu">
						Our Menu
					</MainNavLink>
				</MainNav>
			</HeaderContent>
		</Fragment>
	);
};

export default Header;
