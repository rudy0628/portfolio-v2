import classes from './Section.module.scss';

const Section = props => {
	const styles = `${props.className} ${classes.section}`;

	return (
		<div className={styles} id={props.id}>
			{props.children}
		</div>
	);
};

export default Section;
