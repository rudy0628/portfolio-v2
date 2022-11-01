import { useContext } from 'react';
import { ThemeContext } from '../../../store/theme-Context';

import classes from './About.module.scss';
import webpMe from '../../../img/me.webp';
import minMe from '../../../img/me-min.jpg';
import Section from '../../UI/section/Section';

const About = () => {
	const themeCtx = useContext(ThemeContext);
	const style = themeCtx.isDark
		? `${classes.dark} ${classes['section-about']}`
		: `${classes['section-about']}`;

	return (
		<Section className={style} id="section-about">
			<div className="container">
				<span className="subheading">about</span>
				<h2 className="heading__secondary">自我介紹</h2>
			</div>

			<div className={`container ${classes.about}`}>
				<div className={classes['about__img-box']}>
					<picture>
						<source srcSet={webpMe} type="image/webp" />
						<source srcSet={minMe} type="image/jpg" />
						<img src={minMe} alt="the person rudy yeh" />
					</picture>
					<div className={classes['about__img-border']}></div>
				</div>

				<div className={classes['about__text-box']}>
					<div className={classes['about__text-titleBox']}>
						<p className={classes['about__text-title']}>網頁開發歷程</p>
						<p className={classes['about__text-year']}>
							1 Year Web Development Experience
						</p>
					</div>
					<p className={classes['about__text']}>
						曾經自行開發過訂購機票網站，使用 React 開發搭配 Redux
						管理資料流，串接第三方 API 獲得航班資訊，採用 Google
						API實現實時航班地圖及第三方登入，同時也支援 Facebook
						的第三方登入，開發前期利用 Firebase 儲存資料，後續改寫利用 Node.js
						搭配 Express 與 MongoDB 建構出完整後端 API。
					</p>
					<p className={classes['about__text']}>
						在開發期間，為了實現功能，嘗試了各式各樣的第三方
						API、第三方套件及工具，其中包括 React Animation、Stripe
						等第三方套件。
					</p>
					<p className={classes['about__text']}>
						自學期間，在 Udemy 上觀看影片時，從 Udemy
						的筆記功能中，意外獲得靈感，因此開發了
						Youtube-note-extension，一款可以在 Youtube
						時間軸上做文字筆記的擴充元件，也成功上架了 Google Chrome store。
					</p>
					<p className={classes['about__text']}>
						透過 Udemy 的網路課程、Youtube 的技術型 Youtuber
						，讓我獲得了強大的開發能力，未來也會持續透過社群交流及關注技術趨勢文章，來提升自己的開發經驗與能力。
					</p>
					<p className={classes['about__text-skills']}>
						HTML5 | CSS3 | Sass | JavaScript | React | NextJs | NodeJs | MongoDB
						| Git | GitHub
					</p>
				</div>
			</div>
		</Section>
	);
};

export default About;
