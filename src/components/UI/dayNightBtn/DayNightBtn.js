import { useContext } from 'react';

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ThemeContext } from '../../../store/theme-Context';
import classes from './DayNightBtn.module.scss';

const DayNightBtn = props => {
	const themeCtx = useContext(ThemeContext);

	const changeThemeHandler = () => {
		themeCtx.setThemeHandler();
		props.onToggle();
	};

	const style = themeCtx.isDark
		? `${classes['day-night']} ${classes.dark}`
		: `${classes['day-night']}`;

	return (
		<div>
			<FormControlLabel
				control={<Switch defaultValue={themeCtx.isDark} />}
				className={style}
				label={`${themeCtx.isDark ? 'Night' : 'Day'}`}
				onClick={changeThemeHandler}
			/>
		</div>
	);
};

export default DayNightBtn;
