import React, { useContext } from 'react';
import { ThemeContext } from '../../store/theme-Context';

import Map from '../map/Map';
import Form from '../form/Form';
import classes from './Cta.module.scss';

const Cta = () => {
	const themeCtx = useContext(ThemeContext);

	const style = themeCtx.isDark
		? `${classes.dark} ${classes['section-cta']}`
		: `${classes['section-cta']}`;

	return (
		<section className={style} id="section-cta">
			<div className={classes.cta}>
				<Form />
				<Map />
			</div>
		</section>
	);
};

export default React.memo(Cta);
