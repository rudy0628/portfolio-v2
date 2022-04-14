import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import classes from './ProjectItem.module.scss';
import { FiChevronDown } from 'react-icons/fi';
import { BsGithub, BsLink45Deg } from 'react-icons/bs';

const ProjectItem = props => {
	const [textBoxIsShow, setTextBoxIsShow] = useState(false);

	const toggleTextBoxHandler = () => {
		setTextBoxIsShow(prevState => !prevState);
	};

	return (
		<div className={classes.project}>
			<div className={classes['project__box']}>
				<div className={classes['project__img-box']}>
					<picture>
						<source srcSet={props.projectWebPic} type="image/webp" />
						<source srcSet={props.projectMinPic} type="image/png" />
						<img src={props.projectWebPic} alt={props.description} />
					</picture>
				</div>
				<div className={classes['project__link-box']}>
					<a
						href={props.site}
						className={classes['project__link']}
						target="_blank"
						rel="noreferrer"
					>
						<BsLink45Deg className={classes['project__icon--site']} />
					</a>
					{props.github && (
						<a
							href={props.github}
							className={classes['project__link']}
							target="_blank"
							rel="noreferrer"
						>
							<BsGithub className={classes['project__icon--site']} />
						</a>
					)}
					<button
						onClick={toggleTextBoxHandler}
						className={classes['project__link--toggle']}
					>
						<FiChevronDown
							className={
								textBoxIsShow
									? `${classes['project__icon--rotate']}`
									: `${classes['project__icon']}`
							}
						/>
					</button>
				</div>
				<CSSTransition
					in={textBoxIsShow}
					timeout={400}
					mountOnEnter
					unmountOnExit
					classNames={{
						enter: '',
						enterActive: 'ModalOpen',
						exit: '',
						exitActive: 'ModalClose',
					}}
				>
					<div className={classes['project__text-box']}>
						<p className={classes['project__tags']}>
							{props.tag.map(tag => (
								<span className={`pills--${tag}`}>{tag}</span>
							))}
						</p>
						<h3 className="heading__tertiary">{props.title}</h3>
						<p className={classes['project__description']}>
							{props.description}
						</p>
						<p className={classes['project__tools']}>
							開發工具：{props.skills}
						</p>
					</div>
				</CSSTransition>
			</div>
		</div>
	);
};

export default ProjectItem;
