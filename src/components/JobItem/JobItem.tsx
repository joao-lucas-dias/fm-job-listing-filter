import Job from "../../models/job";
import Category from "./Category/Category";

import classes from "./JobItem.module.css";

const JobItem: React.FC<{ jobData: Job }> = (props) => {
	const generateImageName = () => {
		return props.jobData.company.replace(/\s+/g, "-").replace(/\./g, "").toLowerCase();
	};

	let categoryList: string[] = [];
	categoryList.push(props.jobData.role);
	categoryList.push(props.jobData.level);
	props.jobData.languages.map((language) => categoryList.push(language));
	props.jobData.tools.map((tool) => categoryList.push(tool));

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
					<div className={classes.tags}>
						{props.jobData.new && (
							<span className={`${classes.tag} ${classes.tag_new}`}>NEW!</span>
						)}
						{props.jobData.featured && (
							<span className={`${classes.tag} ${classes.tag_featured}`}>FEATURED</span>
						)}
					</div>
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
			<ul className={classes.category_list}>
				{categoryList.map((category) => (
					<Category key={category} label={category} />
				))}
			</ul>
		</li>
	);
};

export default JobItem;
