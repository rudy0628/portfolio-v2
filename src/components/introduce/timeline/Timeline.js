import { useContext } from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ThemeContext } from '../../../store/theme-Context';

import { timelineContent } from '../../../config/sectionContent';
import classes from './Timeline.module.scss';

const TimeLine = () => {
	const themeCtx = useContext(ThemeContext);

	return (
		<VerticalTimeline
			lineColor="#ccc"
			className={classes['timeline__container']}
		>
			{timelineContent.map(timeline => (
				<VerticalTimelineElement
					key={timeline.id}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: '#374a96',
						color: themeCtx.isDark ? '#fff' : '#374a96',
					}}
					contentArrowStyle={{ borderRight: '7px solid  #374a96' }}
					date={timeline.date}
					iconStyle={{ background: '#374a96', color: '#374a96' }}
				>
					<h3 className="vertical-timeline-element-title">{timeline.title}</h3>
					<h4 className="vertical-timeline-element-subtitle">
						{timeline.date}
					</h4>
					<p>{timeline.description}</p>
					<p>
						{timeline.skills &&
							timeline.skills.map((skill, index) => (
								<span
									key={index}
									className={`tools__icon-timeline tools__icon--${skill}`}
								>
									{skill}
								</span>
							))}
					</p>
				</VerticalTimelineElement>
			))}
		</VerticalTimeline>
	);
};

export default TimeLine;
