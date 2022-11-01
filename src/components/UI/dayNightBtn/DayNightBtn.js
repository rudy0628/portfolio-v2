import { useContext } from 'react';

import { ThemeContext } from '../../../store/theme-Context';
import { BsFillSunFill } from 'react-icons/bs';
import { MdNightlight } from 'react-icons/md';
import classes from './DayNightBtn.module.scss';

const DayNightBtn = props => {
	const themeCtx = useContext(ThemeContext);
	const containerClassName = themeCtx.isDark
		? `${classes['night']}`
		: `${classes['day']}`;

	return (
		<div className={containerClassName}>
			<button
				onClick={themeCtx.setThemeHandler}
				className={classes['dayNight__btn']}
				aria-labelledby="dayNight button"
				aria-label="dayNight button"
				id="dayNight_button"
			>
				{themeCtx.isDark && (
					<BsFillSunFill className={classes['dayNight__icon']} />
				)}
				{!themeCtx.isDark && (
					<MdNightlight className={classes['dayNight__icon']} />
				)}
			</button>
		</div>
	);
};

export default DayNightBtn;
