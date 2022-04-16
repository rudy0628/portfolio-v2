import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.scss';

const MainHeader = () => {
	const [navIsOpen, setNavIsOpen] = useState(false);
	const navigationClass = navIsOpen
		? `${classes['navigation-open']}`
		: `${classes['navigation']}`;

	return (
		<div className={navigationClass}>
			<button
				onClick={() => setNavIsOpen(prevState => !prevState)}
				htmlFor="navi-toggle"
				className={classes['navigation__button']}
			>
				<span className={classes['navigation__icon']}>&nbsp;</span>
			</button>
			<div className={classes['navigation__background']}>&nbsp;</div>

			<nav className={classes['navigation__nav']}>
				<ul className={classes['navigation__list']}>
					<li className={classes['navigation__item']}>
						<NavLink
							to="/"
							onClick={() => setNavIsOpen(prevState => !prevState)}
							className={classes['navigation__link']}
						>
							關於我
						</NavLink>
					</li>
					<li className={classes['navigation__item']}>
						<NavLink
							to="/project"
							onClick={() => setNavIsOpen(prevState => !prevState)}
							className={classes['navigation__link']}
						>
							Side Project
						</NavLink>
					</li>
					<li className={classes['navigation__item']}>
						<NavLink
							to="/contact"
							onClick={() => setNavIsOpen(prevState => !prevState)}
							className={classes['navigation__link']}
						>
							聯絡我
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MainHeader;
