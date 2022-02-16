import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.scss';

const MainHeader = () => {
	return (
		<header className={classes.header}>
			<NavLink to="/introduce" className={classes['header__logo']}>
				Rudy's
			</NavLink>
			<nav className={classes.header__nav}>
				<ul className={classes['header__nav--list']}>
					<li className={classes['header__nav--item']}>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? `${classes['header__nav--link']} ${classes['header__nav--active']}`
									: `${classes['header__nav--link']}`
							}
						>
							關於我
						</NavLink>
					</li>
					<li className={classes['header__nav--item']}>
						<NavLink
							to="/project"
							className={navData =>
								navData.isActive
									? `${classes['header__nav--link']} ${classes['header__nav--active']}`
									: `${classes['header__nav--link']}`
							}
						>
							作品集
						</NavLink>
					</li>
					<li className={classes['header__nav--item']}>
						<NavLink
							to="/contact"
							className={navData =>
								navData.isActive
									? `${classes['header__nav--link']} ${classes['header__nav--active']} ${classes['nav--cta']}`
									: `${classes['header__nav--link']} ${classes['nav--cta']}`
							}
						>
							聯絡我
						</NavLink>
					</li>
				</ul>
			</nav>

			<button className={classes['header__nav--mobile-btn']}>
				<ion-icon
					className={classes['header__nav--mobile-icon']}
					name="menu-outline"
				></ion-icon>
				<ion-icon
					className={classes['header__nav--mobile-icon']}
					name="close-outline"
				></ion-icon>
			</button>

			<div className={classes['header__nav--mobile-background']}></div>
		</header>
	);
};

export default MainHeader;
