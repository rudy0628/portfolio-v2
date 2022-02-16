import classes from './BubbleBg.module.scss';

const BubbleBg = () => {
	// generate 10 sizes array, purpose for bubbles key
	const array = Array.from(Array(10).keys());

	return (
		<div className={classes.bubbles}>
			{array.map(num => (
				<div className={classes.bubble} key={num} />
			))}
		</div>
	);
};

export default BubbleBg;
