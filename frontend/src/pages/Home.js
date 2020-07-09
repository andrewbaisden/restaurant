import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts, getProduct } from '../actions/menu';
import { styled, createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

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
		font-size: 1.6rem;
		font-family: 'Barlow Condensed', sans-serif;
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
			<div className="container">
				<header>
					<div>
						<h1>Flame Delicious</h1>
					</div>
					<nav>
						<Link href="/" to="/">
							Home
						</Link>
						<Link href="/menu" to="/menu">
							Our Menu
						</Link>
					</nav>
				</header>
				<main>
					<section>
						<article>
							<h1>Share the flavour</h1>
							<p>
								We have something very important to share with you. Over the past few months our top chefs have been
								working on some new secret ingredients to incorporate into some new meals which we have been working on.
								Here at Flame Delicious the food we make is of upmost importance to you. We don't need to boast about
								the taste because you know it all too well.
							</p>
							<p>
								Starting from next week we will be adding 10 new items to our menu and each one is unique! We can't wait
								for you to experience this new expanded menu which we have been putting together. It is beyond
								magnificent and we are not ashamed to admit it! For the first week all meals from this new menu will be
								half price because we really want as many people to enjoy it as possible! So don't delay prepare
								yourself for an explosion of flavour!
							</p>
							<Link href="/menu" to="/menu">
								See our Menu
							</Link>
						</article>
					</section>
					<section>
						<article>
							<h1>Flame Delicious News</h1>
							<p>
								Flame Delicious is opening another 20 resturants around the globe as our explansion increases into new
								countries.
							</p>
							<Link href="/" to="/menu">
								Stay Updated
							</Link>
						</article>
						<article>
							<h1>Our Menu</h1>
							<p>
								The food at Flame Delicious is prepared under the highest standards and we only source food for approved
								distributors with the highest food and safety standards.
							</p>
							<Link href="/" to="/menu">
								Whats on the Menu
							</Link>
						</article>
					</section>
					<section>
						<article>
							<h1>We really want you to stay happy</h1>
							<p>
								We heard you loud and clear you wanted to be able to purchase from Flame Delicious while on the go well
								now you can! Our mobile app has just finished baking and its ready to be consumed.
							</p>
							<Link href="/" to="/">
								See the latest
							</Link>
						</article>
					</section>
					<section>
						<article>
							<h1>Wake, Cook, Sleep, Repeat</h1>
							<p>
								It took hard work and many hours for us to get to where we are today. Check out our story and see how we
								went from nothing to fortune.
							</p>
							<Link href="/" to="/">
								See our story
							</Link>
						</article>
					</section>
					<section>
						<article>
							<h1>Flame Delicious Jobs</h1>
							<p>
								We have so much to offer and we are open to hiring anyone so long as they have a strong work drive. See
								if you have what it takes to join our brand and family.
							</p>
							<Link href="/" to="/">
								Apply Now
							</Link>
						</article>
						<article>
							<h1>Ask us something</h1>
							<p>
								Is there something that you want to know? Go ahead and give us a shout lets see if we can help you out.
							</p>
							<Link href="/" to="/">
								Send us your enquiry
							</Link>
						</article>
					</section>
				</main>
				<footer>
					<section>
						<h1>Let our food come to you</h1>
						<p>Just Eat</p>
						<p>deliveroo</p>
						<p>Uber Eats</p>
					</section>
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
