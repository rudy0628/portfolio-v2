import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Hero.module.scss';
import { FiFacebook, FiInstagram, FiGithub } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

const Hero = () => {
	const startToSeeClickHandler = () => {
		const sectionAbout = document.querySelector('#section-about');
		sectionAbout.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section className={classes['section-hero']}>
			<div className={classes.hero}>
				<div className={classes['hero__text-box']}>
					<ScrollAnimation animateIn="fadeIn" animateOnce>
						<p className={classes['hero__text--subheading']}>Hi This is</p>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn="bounceInRight"
						animateOut="bounceOutLeft"
						animateOnce
					>
						<h1 className="heading__primary">葉世平 Rudy Yeh</h1>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn="bounceInLeft"
						animateOut="bounceOutRight"
						animateOnce
					>
						<p className={classes['hero__text']}>
							Want to be a Front-end Web Developer
						</p>
					</ScrollAnimation>
				</div>
				<ScrollAnimation animateIn="fadeIn" delay={500} animateOnce>
					<div className={classes['hero__link-box']}>
						<a
							href="https://www.facebook.com/s3352250/"
							className={classes['hero__link']}
							target="_blank"
							rel="noreferrer"
							aria-label="facebook"
						>
							<FiFacebook className={classes['hero__icon--facebook']} />
						</a>
						<a
							href="https://www.instagram.com/ya.0628/"
							className={classes['hero__link']}
							target="_blank"
							rel="noreferrer"
							aria-label="instagram"
						>
							<FiInstagram className={classes['hero__icon--instagram']} />
						</a>
						<a
							href="mailto:s3352250zz@gmail.com"
							className={classes['hero__link']}
							target="_blank"
							rel="noreferrer"
							aria-label="email"
						>
							<AiOutlineMail className={classes['hero__icon--mail']} />
						</a>
						<a
							href="https://github.com/rudy0628"
							className={classes['hero__link']}
							target="_blank"
							rel="noreferrer"
							aria-label="github"
						>
							<FiGithub className={classes['hero__icon--github']} />
						</a>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" delay={1000} animateOnce>
					<div className={classes['hero__btn-box']}>
						<button className="btn btn--full" onClick={startToSeeClickHandler}>
							START TO SEE
						</button>
					</div>
				</ScrollAnimation>
			</div>
		</section>
	);
};

export default Hero;
