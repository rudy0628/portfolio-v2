import { useContext } from 'react';
import { projectContent } from '../../config/sectionContent';
import { ThemeContext } from '../../store/theme-Context';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

import classes from './Projects.module.scss';

const Project = () => {
	const themeCtx = useContext(ThemeContext);

	const style = themeCtx.isDark
		? `${classes['section-project']} ${classes.dark}`
		: `${classes['section-project']}`;

	return (
		<section className={style} id="section-project">
			<div className="container">
				<span className="subheading">Projects</span>
				<h2 className="heading__secondary">作品集</h2>
			</div>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				{projectContent.map(project => (
					<SwiperSlide key={project.id} className="swiper-slide__custom">
						<li className={classes['project__item']}>
							<a href={project.link} target="_blank" rel="noreferrer">
								<figure className={classes['project__item--imgBox']}>
									<img src={project.projectWebPic} alt={project.description} />
									<div className={classes['project__item--textBox']}>
										<h2 className={classes['project__item--title']}>
											{project.title}
										</h2>
										<p className={classes['project__item--description']}>
											{project.description}
										</p>
										<p className={classes['project__item--skills']}>
											{project.skills.map((skill, index) => (
												<span
													key={index}
													className={`tools__icon-timeline tools__icon--${skill}`}
												>
													{skill}
												</span>
											))}
										</p>
									</div>
								</figure>
							</a>
						</li>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Project;
