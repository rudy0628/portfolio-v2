import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../store/theme-Context';

import DayNightBtn from '../UI/dayNightBtn/DayNightBtn';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import classes from './MainHeader.module.scss';

const MainHeader = () => {
	const themeCtx = useContext(ThemeContext);
	const [isToggle, setIsToggle] = useState(false);
	console.log(themeCtx.isDark);

	let style;
	if (isToggle && themeCtx.isDark) {
		style = `${classes.header} ${classes['nav-open']} ${classes.dark}`;
	} else if (isToggle && !themeCtx.isDark) {
		style = `${classes.header} ${classes['nav-open']}`;
	} else if (!isToggle && themeCtx.isDark) {
		style = `${classes.header} ${classes.dark}`;
	} else {
		style = `${classes.header}`;
	}

	const toggleMenuHandler = () => {
		setIsToggle(prevState => !prevState);
	};

	return (
		<header className={style}>
			<NavLink to="/" className={classes['header__logo']}>
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
							onClick={toggleMenuHandler}
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
							onClick={toggleMenuHandler}
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
							onClick={toggleMenuHandler}
						>
							聯絡我
						</NavLink>
					</li>
					<li className={classes['header__nav--item']}>
						<DayNightBtn onToggle={toggleMenuHandler} />
					</li>
				</ul>
			</nav>

			<button
				className={classes['header__nav--mobile-btn']}
				onClick={toggleMenuHandler}
			>
				<FiMenu
					className={classes['header__nav--mobile-icon']}
					name="menu-outline"
				></FiMenu>
				<IoClose
					className={classes['header__nav--mobile-icon']}
					name="close-outline"
				></IoClose>
			</button>

			<div className={classes['header__nav--mobile-background']}></div>
		</header>
	);
};

export default MainHeader;
