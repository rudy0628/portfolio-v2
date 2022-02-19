import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Professional from '../components/professional/Professional';

const IntroducePage = () => {
	return (
		<Fragment>
			<Helmet>
				<meta
					name="description"
					content="You can understand me what skill i have, what my professional, and you can also contact me facebook、Instagram、email、github"
				/>
				<title>Rudy's portfolio-Introduce</title>
			</Helmet>
			<Hero />
			<About />
			<Professional />
		</Fragment>
	);
};

export default IntroducePage;
