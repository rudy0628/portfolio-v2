import { useState, useContext } from 'react';
import { projectContent } from '../../config/sectionContent';
import { ThemeContext } from '../../store/theme-Context';

import ProjectItem from './ProjectItem';
import BubbleBg from '../UI/bubbleBg/BubbleBg';
import classes from './Projects.module.scss';

const Project = () => {
	const themeCtx = useContext(ThemeContext);

	const [filterProjectContent, setFilterProjectContent] =
		useState(projectContent);

	const searchChangeHandler = e => {
		if (e.target.value.trim().length === 0) {
			setFilterProjectContent(projectContent);
		} else {
			setFilterProjectContent(
				projectContent.filter(project =>
					project.title.toLowerCase().startsWith(e.target.value.toLowerCase())
				)
			);
		}
	};

	const style = themeCtx.isDark
		? `${classes['section-project']} ${classes.dark}`
		: `${classes['section-project']}`;

	return (
		<section className={style} id="section-project">
			<BubbleBg />
			<div className="container">
				<span className="subheading">Projects</span>
				<h2 className="heading__secondary">作品集</h2>
			</div>
			<div className="container">
				<div className={classes.search}>
					<input
						type="text"
						placeholder="請輸入標題 ex.Shoppingsite、disney page clone..."
						onChange={searchChangeHandler}
					/>
				</div>
				{filterProjectContent.map(project => (
					<ProjectItem
						key={project.id}
						title={project.title}
						description={project.description}
						skills={project.skills}
						site={project.site}
						github={project.github}
						flow={project.flow}
						projectWebPic={project.projectWebPic}
						projectMinPic={project.projectMinPic}
						tag={project.tag}
					/>
				))}
			</div>
		</section>
	);
};

export default Project;
