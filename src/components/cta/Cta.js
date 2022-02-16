import React from 'react';

import Map from '../map/Map';
import Form from '../form/Form';
import classes from './Cta.module.scss';

const Cta = () => {
	return (
		<section className={classes['section-cta']} id="section-cta">
			<div className={classes.cta}>
				<Form />
				<Map />
			</div>
		</section>
	);
};

export default React.memo(Cta);
