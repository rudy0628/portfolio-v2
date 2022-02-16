import { Fragment } from 'react';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Professional from '../components/professional/Professional';

const IntroducePage = () => {
	return (
		<Fragment>
			<Hero />
			<About />
			<Professional />
		</Fragment>
	);
};

export default IntroducePage;
