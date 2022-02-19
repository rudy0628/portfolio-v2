import { NavLink } from 'react-router-dom';

import { FiFacebook, FiInstagram, FiGithub } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import classes from './Footer.module.scss';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<section className={classes['section-footer']}>
			<footer className={classes.footer}>
				<div className={classes['footer__main-box']}>
					<NavLink to="/" className={classes['footer__logo']}>
						Rudy's
					</NavLink>
					<div className={classes['footer__link-box']}>
						<a
							href="https://www.facebook.com/s3352250/"
							className={classes['footer__link']}
							target="_blank"
							rel="noreferrer"
						>
							<FiFacebook className={classes['footer__icon--facebook']} />
						</a>
						<a
							href="https://www.instagram.com/ya.0628/"
							className={classes['footer__link']}
							target="_blank"
							rel="noreferrer"
						>
							<FiInstagram className={classes['footer__icon--instagram']} />
						</a>
						<a
							href="mailto:s3352250zz@gmail.com"
							className={classes['footer__link']}
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineMail className={classes['footer__icon--mail']} />
						</a>
						<a
							href="https://github.com/rudy0628"
							className={classes['footer__link']}
							target="_blank"
							rel="noreferrer"
						>
							<FiGithub className={classes['footer__icon--github']} />
						</a>
					</div>
					<p className={classes['footer__copyright']}>
						{year} &copy; Rudy's portfolio reserve all by Rudy Yeh
					</p>
				</div>
				<div className={classes['footer__description-box']}>
					<p className={classes['footer__description']}>
						這個網站是使用
						<a
							href="https://zh-hant.reactjs.org/"
							target="_blank"
							rel="noreferrer"
							className={classes['footer__description--link']}
						>
							React
						</a>
						製作，搭配
						<a
							href="https://www.npmjs.com/package/react-router-dom"
							target="_blank"
							rel="noreferrer"
							className={classes['footer__description--link']}
						>
							React Router Dom
						</a>
						實現SPA頁面，如果有需要此網站原始碼，請連絡我的
						<a
							href="https://www.instagram.com/ya.0628/"
							target="_blank"
							rel="noreferrer"
							className={classes['footer__description--link']}
						>
							Instagram
						</a>
						或
						<a
							href="https://github.com/rudy0628"
							target="_blank"
							rel="noreferrer"
							className={classes['footer__description--link']}
						>
							github
						</a>
						，我會公開此APP的權限並提供下載!
					</p>
				</div>
			</footer>
		</section>
	);
};

export default Footer;
