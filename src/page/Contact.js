import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Cta from '../components/cta/Cta';
import Footer from '../components/footer/Footer';

const ContactPage = () => {
	return (
		<Fragment>
			<Helmet>
				<meta
					name="description"
					content="Contact me with email and name or you can send me a mail. You can see what tools build this page, and if you require to get this web app source code, i will public this web app github"
				/>
				<title>Rudy's portfolio-Contact</title>
			</Helmet>
			<Cta />
			<Footer />
		</Fragment>
	);
};

export default ContactPage;
