import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import classes from './Timeline.module.scss';

const TimeLine = () => {
	return (
		<VerticalTimeline
			lineColor="#ccc"
			className={classes['timeline__container']}
		>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: '#3B5BDB', color: '#3B5BDB' }}
				contentArrowStyle={{ borderRight: '7px solid  #3B5BDB' }}
				date="Sep, 2019"
				iconStyle={{ background: '#3B5BDB', color: '#3B5BDB' }}
			>
				<h3 className="vertical-timeline-element-title">初次接觸網頁開發</h3>
				<p>大學二年級修習網頁設計時，對於網頁的運作有濃厚的興趣。</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: '#3B5BDB', color: '#3B5BDB' }}
				contentArrowStyle={{ borderRight: '7px solid  #3B5BDB' }}
				date="Feb, 2021"
				iconStyle={{ background: '#3B5BDB', color: '#3B5BDB' }}
			>
				<h3 className="vertical-timeline-element-title">大學實務專題</h3>
				<p>大學專題植物の守衛取得系上專題比賽行動應用組第二名成績。</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: '#3B5BDB', color: '#3B5BDB' }}
				contentArrowStyle={{ borderRight: '7px solid  #3B5BDB' }}
				date="Jul, 2021"
				iconStyle={{ background: '#3B5BDB', color: '#3B5BDB' }}
			>
				<h3 className="vertical-timeline-element-title">專精開發網頁</h3>
				<p>趁著大學最後一年的空檔時間，專心學習於開發網頁。</p>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
};

export default TimeLine;
