import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../UI/section/Section';
import ProfessionalCard from './ProfessionalCard';
import { professionalContent } from '../../config/sectionContent';
import classes from './Professional.module.scss';

const Professional = () => {
	let delay = -500;

	return (
		<Section className={classes['section-professional']}>
			<div className="container">
				<span className="subheading">What I do</span>
				<h2 className="heading__secondary">我會什麼</h2>
			</div>
			<div className="container grid grid__3-cols">
				{professionalContent.map(pro => {
					delay += 500;
					return (
						<ProfessionalCard
							key={pro.id}
							title={pro.title}
							description={pro.description}
							icon={pro.icon}
							delay={delay}
						/>
					);
				})}
			</div>
			<ScrollAnimation
				animateIn="bounceInLeft"
				animateOut="bounceOutRight"
				delay={1000}
				animateOnce
			>
				<div className={classes['professional__link-box']}>
					<Link to="/project" className={classes['professional__link']}>
						See My Project <span>&rarr;</span>
					</Link>
				</div>
			</ScrollAnimation>
		</Section>
	);
};

export default Professional;
