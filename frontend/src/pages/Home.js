import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts, getProduct } from '../actions/menu';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import FlameDeliciousLogo from '../img/flame-delicious-logo.svg';
import JustEat from '../img/just-eat-logo.png';
import Deliveroo from '../img/deliveroo-logo.png';
import UberEats from '../img/uber-eats-logo.png';

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
	.container {
		margin: 0 auto;
		width: 120rem;
		max-width: 100%;
	}
`;

const Header = styled.header`
	display: flex;
	flex-flow: row wrap;
	background: #ffffff;
	padding: 2rem;
	justify-content: space-between;
	align-items: center;
`;

const MainNav = styled.nav`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	text-transform: uppercase;
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

const IntroContentBG = styled.section`
	background: url('./share-the-flavour.jpg') no-repeat;
	height: 50rem;
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
`;

const IntroContent = styled.article`
	background: rgb(1, 16, 26, 0.8);
	color: #ffffff;
	width: 64rem;
	margin-left: 5rem;
	text-align: center;
	padding: 2rem;
`;

const IntroContentH1 = styled.h1`
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

const IntroContentP = styled.p`
	margin: 2rem 0 2rem 0;
`;

const ContentLink = styled.a`
	background: #ffaa42;
	padding: 1rem;
	text-align: center;
	text-decoration: none;
	color: #ffffff;
	text-transform: uppercase;
	font-size: 1.4rem;
	font-weight: 700;

	&:hover {
		background: #e68c1e;
	}
`;

const NewsContent = styled.section`
	margin: 2rem 0 2rem 0;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`;

const NewsContentArticle = styled.article`
	width: 58rem;
	text-align: center;
	background: url('./restaurant.jpg') no-repeat;
	height: 40rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NewsContentArticleMenu = styled.article`
	width: 58rem;
	text-align: center;
	background: url('./burger-fries.jpg') no-repeat;
	height: 40rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NewsContentContainer = styled.div`
	width: 45rem;
`;

const NewsContenth1 = styled.h1`
	text-transform: uppercase;
	color: #ffffff;
	font-size: 3rem;

	&::after {
		content: '';
		width: 100%;
		border-bottom: 1px solid #ffaa42;
		display: block;
	}
`;

const NewsContentp = styled.p`
	margin: 2rem 0 2rem 0;
	color: #ffffff;
`;

const MobileContent = styled.section`
	background: url('./mobile-app.jpg') no-repeat;
	height: 70rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MobileContentArticle = styled.article`
	text-align: center;
	width: 80rem;
`;

const MobileContenth1 = styled.h1`
	text-transform: uppercase;
	color: #ffffff;
	font-size: 3rem;

	&::after {
		content: '';
		width: 100%;
		border-bottom: 1px solid #ffaa42;
		display: block;
	}
`;

const MobileContentp = styled.p`
	margin: 2rem 0 2rem 0;
	color: #ffffff;
`;

const ContentOurStory = styled.section`
	margin-top: 2rem;
	background: url('./cooking.jpg') no-repeat;
	height: 50rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ContentOurStoryArticle = styled.article`
	text-align: center;
	width: 80rem;
`;

const ContentOurStoryArticleh1 = styled.h1`
	text-transform: uppercase;
	color: #ffffff;
	font-size: 3rem;

	&::after {
		content: '';
		width: 100%;
		border-bottom: 1px solid #ffaa42;
		display: block;
	}
`;

const ContentOurStoryArticlep = styled.p`
	margin: 2rem 0 2rem 0;
	color: #ffffff;
`;

const ContentContactUs = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	margin-top: 2rem;
`;

const ContentContactUsArticle = styled.article`
	width: 55rem;
	background: #120507;
	padding: 2rem;
	text-align: center;
	height: 40rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ContentContactUsArticleEnquiry = styled.article`
	width: 55rem;
	background: #e68c1d;
	padding: 2rem;
	text-align: center;
	height: 40rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ContentContactUsArticleh1 = styled.h1`
	text-transform: uppercase;
	color: #ffffff;
	font-size: 3rem;

	&::after {
		content: '';
		width: 100%;
		border-bottom: 1px solid #ffaa42;
		display: block;
	}
`;

const ContentContactUsArticlep = styled.p`
	margin: 2rem 0 2rem 0;
	color: #ffffff;
`;

const ContentLinkJobsEnquiry = styled.a`
	background: none;
	padding: 1rem;
	text-align: center;
	text-decoration: none;
	color: #ffffff;
	text-transform: uppercase;
	font-size: 1.4rem;
	font-weight: 700;
	border: 1px solid #ffffff;

	&:hover {
		background: #ffdcb1;
	}
`;

const ContentContactUsArticleContainer = styled.div``;

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

const Home = ({ getProducts, getProduct }) => {
	useEffect(() => {
		getProducts();
		getProduct('b4bc2e28-21a3-47ea-ba3b-6bad40b35504');
	}, []);
	return (
		<Fragment>
			<GlobalStyle />
			<div className="container">
				<Header>
					<div>
						<Link to="/" href="/">
							<img src={FlameDeliciousLogo} alt="Flame Delicious Logo" height="80" />
						</Link>
					</div>
					<MainNav>
						<MainNavLink href="/" to="/">
							Home
						</MainNavLink>
						<MainNavLink href="/menu" to="/menu">
							Our Menu
						</MainNavLink>
					</MainNav>
				</Header>
				<main>
					<IntroContentBG>
						<IntroContent>
							<IntroContentH1>Share the flavour</IntroContentH1>
							<IntroContentP>
								We have something very important to share with you. Over the past few months our top chefs have been
								working on some new secret ingredients to incorporate into some new meals which we have been working on.
								Here at Flame Delicious the food we make is of upmost importance to you. We don't need to boast about
								the taste because you know it all too well.
							</IntroContentP>
							<IntroContentP>
								Starting from next week we will be adding 10 new items to our menu and each one is unique! We can't wait
								for you to experience this new expanded menu which we have been putting together. It is beyond
								magnificent and we are not ashamed to admit it! For the first week all meals from this new menu will be
								half price because we really want as many people to enjoy it as possible! So don't delay prepare
								yourself for an explosion of flavour!
							</IntroContentP>
							<ContentLink href="/menu" to="/menu">
								See our Menu
							</ContentLink>
						</IntroContent>
					</IntroContentBG>
					<NewsContent>
						<NewsContentArticle>
							<NewsContentContainer>
								<NewsContenth1>Flame Delicious News</NewsContenth1>
								<NewsContentp>
									Flame Delicious is opening another 20 resturants around the globe as our explansion increases into new
									countries.
								</NewsContentp>
								<ContentLink href="/" to="/menu">
									Stay Updated
								</ContentLink>
							</NewsContentContainer>
						</NewsContentArticle>
						<NewsContentArticleMenu>
							<NewsContentContainer>
								<NewsContenth1>Our Menu</NewsContenth1>
								<NewsContentp>
									The food at Flame Delicious is prepared under the highest standards and we only source food for
									approved distributors with the highest food and safety standards.
								</NewsContentp>
								<ContentLink href="/" to="/menu">
									Whats on the Menu
								</ContentLink>
							</NewsContentContainer>
						</NewsContentArticleMenu>
					</NewsContent>
					<MobileContent>
						<MobileContentArticle>
							<MobileContenth1>We really want you to stay happy</MobileContenth1>
							<MobileContentp>
								We heard you loud and clear you wanted to be able to purchase from Flame Delicious while on the go well
								now you can! Our mobile app has just finished baking and its ready to be consumed.
							</MobileContentp>
							<ContentLink href="/" to="/">
								See the latest
							</ContentLink>
						</MobileContentArticle>
					</MobileContent>
					<ContentOurStory>
						<ContentOurStoryArticle>
							<ContentOurStoryArticleh1>Wake, Cook, Sleep, Repeat</ContentOurStoryArticleh1>
							<ContentOurStoryArticlep>
								It took hard work and many hours for us to get to where we are today. Check out our story and see how we
								went from nothing to fortune.
							</ContentOurStoryArticlep>
							<ContentLink href="/" to="/">
								See our story
							</ContentLink>
						</ContentOurStoryArticle>
					</ContentOurStory>
					<ContentContactUs>
						<ContentContactUsArticle>
							<ContentContactUsArticleContainer>
								<ContentContactUsArticleh1>Flame Delicious Jobs</ContentContactUsArticleh1>
								<ContentContactUsArticlep>
									We have so much to offer and we are open to hiring anyone so long as they have a strong work drive.
									See if you have what it takes to join our brand and family.
								</ContentContactUsArticlep>
								<ContentLinkJobsEnquiry href="/" to="/">
									Apply Now
								</ContentLinkJobsEnquiry>
							</ContentContactUsArticleContainer>
						</ContentContactUsArticle>
						<ContentContactUsArticleEnquiry>
							<ContentContactUsArticleContainer>
								<ContentContactUsArticleh1>Ask us something</ContentContactUsArticleh1>
								<ContentContactUsArticlep>
									Is there something that you want to know? Go ahead and give us a shout lets see if we can help you
									out.
								</ContentContactUsArticlep>
								<ContentLinkJobsEnquiry href="/" to="/">
									Send us your enquiry
								</ContentLinkJobsEnquiry>
							</ContentContactUsArticleContainer>
						</ContentContactUsArticleEnquiry>
					</ContentContactUs>
				</main>
				<footer>
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
					<section>
						<div>
							<p>Home</p>
							<p>Our Menu</p>
						</div>
						<div>
							<div>Twitter</div>
							<div>Instagram</div>
							<div>Facebook</div>
							<div>YouTube</div>
						</div>
					</section>
					<section>
						<h1>Flame Delicious</h1>
						<nav>
							<Link href="/" to="/">
								Privacy
							</Link>
							<Link href="/" to="/">
								Terms & Conditions
							</Link>
							<Link href="/" to="/">
								Tax Strategy
							</Link>
							<Link href="/" to="/">
								Modern Slavery Act
							</Link>
							<Link href="/" to="/">
								&copy; Flame Delicious. All Rights Reserved.
							</Link>
						</nav>
					</section>
				</footer>
			</div>
		</Fragment>
	);
};

export default connect(null, { getProducts, getProduct })(Home);
