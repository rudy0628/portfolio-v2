import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../store/theme-Context';

import Section from '../../UI/section/Section';
import ProfessionalCard from './ProfessionalCard';
import { professionalContent } from '../../../config/sectionContent';
import classes from './Professional.module.scss';

const Professional = () => {
	let delay = -500;
	const themeCtx = useContext(ThemeContext);
	const style = themeCtx.isDark
		? `${classes['section-professional']} ${classes.dark}`
		: `${classes['section-professional']}`;

	return (
		<Section className={style}>
			<div className="container">
				<span className="subheading">skills</span>
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
			<div className={classes['professional__link-box']}>
				<Link to="/project" className={classes['professional__link']}>
					See My Project
				</Link>
			</div>
		</Section>
	);
};

export default Professional;
