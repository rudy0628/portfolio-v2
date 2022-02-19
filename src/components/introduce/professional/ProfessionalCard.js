import Card from '../../UI/card/Card';
import classes from './ProfessionalCard.module.scss';
import ScrollAnimation from 'react-animate-on-scroll';

const ProfessionalCard = props => {
	return (
		<ScrollAnimation animateIn="fadeIn" delay={props.delay} animateOnce>
			<Card className={classes['professional__card']}>
				<props.icon className={classes['professional__icon']} />
				<h3 className={classes['professional__title']}>{props.title}</h3>
				<p className={classes['professional__description']}>
					{props.description}
				</p>
			</Card>
		</ScrollAnimation>
	);
};

export default ProfessionalCard;
