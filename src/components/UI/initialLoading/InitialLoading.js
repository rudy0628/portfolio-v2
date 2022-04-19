import React from 'react';

import classes from './InitialLoading.module.scss';

const InitialLoading = () => {
	return (
		<div className={classes['loading-container']}>
			<div className={classes['loading']}>
				<div className={classes['divider']} aria-hidden="true"></div>
				<p className={classes['loading-text']} aria-label="Loading">
					<span className={classes['letter']} aria-hidden="true">
						L
					</span>
					<span className={classes['letter']} aria-hidden="true">
						o
					</span>
					<span className={classes['letter']} aria-hidden="true">
						a
					</span>
					<span className={classes['letter']} aria-hidden="true">
						d
					</span>
					<span className={classes['letter']} aria-hidden="true">
						i
					</span>
					<span className={classes['letter']} aria-hidden="true">
						n
					</span>
					<span className={classes['letter']} aria-hidden="true">
						g
					</span>
				</p>
			</div>
		</div>
	);
};

export default InitialLoading;
