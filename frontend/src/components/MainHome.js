import React, { Fragment } from 'react';
import styled from 'styled-components';

const MainContent = styled.main`
	margin: 0 auto;
	width: 120rem;
	max-width: 100%;
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

const MainHome = () => {
	return (
		<Fragment>
			<MainContent>
				<IntroContentBG>
					<IntroContent>
						<IntroContentH1>Share the flavour</IntroContentH1>
						<IntroContentP>
							We have something very important to share with you. Over the past few months our top chefs have been
							working on some new secret ingredients to incorporate into some new meals which we have been working on.
							Here at Flame Delicious the food we make is of upmost importance to you. We don't need to boast about the
							taste because you know it all too well.
						</IntroContentP>
						<IntroContentP>
							Starting from next week we will be adding 10 new items to our menu and each one is unique! We can't wait
							for you to experience this new expanded menu which we have been putting together. It is beyond magnificent
							and we are not ashamed to admit it! For the first week all meals from this new menu will be half price
							because we really want as many people to enjoy it as possible! So don't delay prepare yourself for an
							explosion of flavour!
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
								The food at Flame Delicious is prepared under the highest standards and we only source food for approved
								distributors with the highest food and safety standards.
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
								We have so much to offer and we are open to hiring anyone so long as they have a strong work drive. See
								if you have what it takes to join our brand and family.
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
								Is there something that you want to know? Go ahead and give us a shout lets see if we can help you out.
							</ContentContactUsArticlep>
							<ContentLinkJobsEnquiry href="/" to="/">
								Send us your enquiry
							</ContentLinkJobsEnquiry>
						</ContentContactUsArticleContainer>
					</ContentContactUsArticleEnquiry>
				</ContentContactUs>
			</MainContent>
		</Fragment>
	);
};

export default MainHome;
