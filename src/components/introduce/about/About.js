import { useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { ThemeContext } from '../../../store/theme-Context';

import classes from './About.module.scss';
import webpMe from '../../../img/me.webp';
import minMe from '../../../img/me-min.jpg';
import Section from '../../UI/section/Section';
import {
	IoPersonOutline,
	IoSchoolOutline,
	IoThumbsUpOutline,
	IoMedalOutline,
	IoHammerOutline,
	IoLogoHtml5,
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoNodejs,
	IoLogoReact,
	IoLogoGithub,
} from 'react-icons/io5';

const About = () => {
	const themeCtx = useContext(ThemeContext);
	const style = themeCtx.isDark ? `${classes.dark}` : '';

	return (
		<Section className={style} id="section-about">
			<div className="container">
				<span className="subheading">about</span>
				<h2 className="heading__secondary">自我介紹</h2>
			</div>

			<div className="container grid grid__2-cols">
				<div className={classes['about__img-box']}>
					<picture>
						<source srcSet={webpMe} type="image/webp" />
						<source srcSet={minMe} type="image/jpg" />
						<img src={minMe} alt="the person rudy yeh" />
					</picture>
				</div>

				<div className={classes['about__text-box']}>
					<ScrollAnimation animateIn="fadeIn" animateOnce>
						<p className={classes['about__text']}>
							<IoPersonOutline className={classes['about__icon']} />
							葉世平
						</p>
						<p className={classes['about__text']}>
							<IoSchoolOutline className={classes['about__icon']} />
							國立高雄科技大學商務資訊應用系(前資訊管理系)
						</p>
						<p className={classes['about__text']}>
							<IoThumbsUpOutline className={classes['about__icon']} />
							Web開發、App開發
						</p>
						<p className={classes['about__text']}>
							<IoMedalOutline className={classes['about__icon']} />
							2021創新資訊與行動應用競賽行動應用組第二名
						</p>
						<div className={classes['about__text']}>
							<IoHammerOutline className={classes['about__icon']} />
							<div className="about__skills">
								<IoLogoHtml5 className={'tools__icon--html'} />
								<IoLogoCss3 className={'tools__icon--css'} />
								<IoLogoJavascript className={'tools__icon--js'} />
								<IoLogoNodejs className={'tools__icon--nodejs'} />
								<IoLogoReact className={'tools__icon--react'} />
								<IoLogoGithub className={'tools__icon--github'} />
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</Section>
	);
};

export default About;
