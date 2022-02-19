import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Projects from '../components/project/Projects';

const ProjectPage = () => {
	return (
		<Fragment>
			<Helmet>
				<meta
					name="description"
					content="You can see my side project here and if you want to see detail, the toggle button can show detail, in detail, it has simple description and what category belong to this side project. If you want to see github or real site, here is two links!"
				/>
				<title>Rudy's portfolio-Projects</title>
			</Helmet>
			<Projects />
		</Fragment>
	);
};

export default ProjectPage;
