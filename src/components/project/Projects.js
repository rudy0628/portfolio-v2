import ProjectItem from './ProjectItem';
import classes from './Projects.module.scss';
import { projectContent } from '../../config/sectionContent';
import BubbleBg from '../UI/bubbleBg/BubbleBg';

const Project = () => {
	return (
		<section className={classes['section-project']} id="section-project">
			<BubbleBg />
			<div className="container">
				<span className="subheading">Projects</span>
				<h2 className="heading__secondary">作品集</h2>
			</div>
			<div className="container">
				{projectContent.map(project => (
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
