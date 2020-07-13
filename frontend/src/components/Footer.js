import React, { Fragment } from 'react';
import styled from 'styled-components';
import FlameDeliciousLogo from '../img/flame-delicious-logo.svg';
import { Link } from 'react-router-dom';
import JustEat from '../img/just-eat-logo.png';
import Deliveroo from '../img/deliveroo-logo.png';
import UberEats from '../img/uber-eats-logo.png';
import Twitter from '../img/twitter-logo.svg';
import Instagram from '../img/instagram-logo.svg';
import Facebook from '../img/facebook-logo.svg';
import YouTube from '../img/youtube-logo.svg';

const FooterContent = styled.footer`
	margin: 0 auto;
	width: 120rem;
	max-width: 100%;
`;

const Delivery = styled.section`
	margin-top: 2rem;
	background: #f5f5f5;
	padding: 2rem;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-items: center;
`;

const DeliveryTitle = styled.h1`
	text-transform: uppercase;
`;

const FooterNavAndSocial = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	margin: 2rem 0 0 0;
	background: #e68c1d;
	padding: 2rem;
	color: #ffffff;
	align-items: center;
`;

const FooterNav = styled.div`
	display: flex;
	flex-flow: column wrap;
`;

const FooterSocial = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	width: 50rem;
`;

const FooterLink = styled.a`
	text-decoration: none;
	color: #ffffff;
	margin-bottom: 1rem;

	&:hover {
		color: #666666;
	}
`;

const FooterLegals = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	background: #000000;
	padding: 2rem;
	margin-bottom: 2rem;
`;

const FooterLegalsLinks = styled.div`
	display: flex;
	flex-flow: row wrap;
	color: #ffffff;
	align-items: center;
`;

const SubNav = styled.a`
	text-decoration: none;
	margin-right: 2rem;
	color: #ffffff;

	&:hover {
		color: #666666;
	}
`;

const Footer = () => {
	return (
		<Fragment>
			<FooterContent>
				<Delivery>
					<DeliveryTitle>Let our food come to you</DeliveryTitle>
					<div>
						<img src={JustEat} alt="Just Eat" height="50" />
					</div>
					<div>
						<img src={Deliveroo} alt="Deloveroo" height="50" />
					</div>
					<div>
						<img src={UberEats} alt="Uber Eats" height="50" />
					</div>
				</Delivery>
				<FooterNavAndSocial>
					<FooterNav>
						<FooterLink to="/" href="/">
							Home
						</FooterLink>
						<FooterLink to="/menu" href="/menu">
							Our Menu
						</FooterLink>
					</FooterNav>
					<FooterSocial>
						<div>
							<Link href="/" to="/">
								<img src={Twitter} alt="Twitter" height="30" />
							</Link>
						</div>
						<div>
							<Link href="/" to="/">
								<img src={Instagram} alt="Instagram" height="30" />
							</Link>
						</div>
						<div>
							<Link href="/" to="/">
								<img src={Facebook} alt="Facebook" height="30" />
							</Link>
						</div>
						<div>
							<Link href="/" to="/">
								<img src={YouTube} alt="YouTube" height="30" />
							</Link>
						</div>
					</FooterSocial>
				</FooterNavAndSocial>
				<FooterLegals>
					<div>
						<Link to="/" href="/">
							<img src={FlameDeliciousLogo} alt="Flame Delicious Logo" height="50" />
						</Link>
					</div>
					<FooterLegalsLinks>
						<SubNav href="/" to="/">
							Privacy
						</SubNav>
						<SubNav href="/" to="/">
							Terms & Conditions
						</SubNav>
						<SubNav href="/" to="/">
							Tax Strategy
						</SubNav>
						<SubNav href="/" to="/">
							Modern Slavery Act
						</SubNav>
						&copy; Flame Delicious. All Rights Reserved.
					</FooterLegalsLinks>
				</FooterLegals>
			</FooterContent>
		</Fragment>
	);
};

export default Footer;
