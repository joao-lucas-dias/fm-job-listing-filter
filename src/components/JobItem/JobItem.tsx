import Job from "../../models/job";

import classes from "./JobItem.module.css";
import Tag from "./Tag/Tag";

const JobItem: React.FC<{ jobData: Job }> = (props) => {
	const generateImageName = () => {
		return props.jobData.company.replace(/\s+/g, "-").toLowerCase();
	};

	let tagList: string[] = [];
	tagList.push(props.jobData.role);
	tagList.push(props.jobData.level);
	props.jobData.languages.map((language) => tagList.push(language));
	props.jobData.tools.map((tool) => tagList.push(tool));

	return (
		<li className={`${classes.container} ${props.jobData.featured && classes.featured}`}>
			<img
				src={`../../../src/assets/images/${generateImageName()}.svg`}
				alt="Company Logo"
				className={classes.logo}
			></img>
			<div className={classes.info}>
				<p className={classes.header}>
					<span className={classes.company}>{props.jobData.company}</span>
					{props.jobData.new && <span className={classes.tag_new}></span>}
					{props.jobData.featured && <span className={classes.tag_featured}></span>}
				</p>
				<p className={classes.position}>{props.jobData.position}</p>
				<p className={classes.details}>
					<span>{props.jobData.postedAt}</span>
					<span className={classes.dot}></span>
					<span>{props.jobData.contract}</span>
					<span className={classes.dot}></span>
					<span>{props.jobData.location}</span>
				</p>
			</div>
			<span className={classes.line}></span>
			<ul className={classes.tag_list}>
				{tagList.map((tag) => (
					<Tag key={tag} label={tag} />
				))}
			</ul>
		</li>
	);
};

export default JobItem;
