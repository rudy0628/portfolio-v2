import { useContext } from 'react';
import { ThemeContext } from '../../../store/theme-Context';
import classes from './BubbleBg.module.scss';

const BubbleBg = () => {
	// generate 10 sizes array, purpose for bubbles key
	const array = Array.from(Array(10).keys());
	const themeCtx = useContext(ThemeContext);

	const style = themeCtx.isDark
		? `${classes.bubbles} ${classes.dark}`
		: `${classes.bubbles}`;

	return (
		<div className={style}>
			{array.map(num => (
				<div className={classes.bubble} key={num} />
			))}
		</div>
	);
};

export default BubbleBg;
