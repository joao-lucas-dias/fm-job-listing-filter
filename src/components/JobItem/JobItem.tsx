import Job from "../../models/job";
import Category from "./Category/Category";

import classes from "./JobItem.module.css";

const JobItem: React.FC<{ jobData: Job; onFilterClick: (filter: string) => void }> = (
	props
) => {
	const job: Job = props.jobData;

	const generateImageName = () => {
		return props.jobData.company.name
			.replace(/\s+/g, "-")
			.replace(/\./g, "")
			.toLowerCase();
	};

	return (
		<li className={`${classes.container} ${job.tags.featured && classes.featured}`}>
			<div className={classes.header}>
				<img
					src={`/images/${generateImageName()}.svg`}
					alt="Company Logo"
					className={classes.logo}
				></img>
				<div className={classes.header_body}>
					<p className={`${classes.body_row} ${classes.title}`}>
						<span className={classes.company}>{job.company.name}</span>
						<span className={classes.tags}>
							{job.tags.new && (
								<span className={`${classes.tag} ${classes.tag_new}`}>NEW!</span>
							)}
							{job.tags.featured && (
								<span className={`${classes.tag} ${classes.tag_featured}`}>FEATURED</span>
							)}
						</span>
					</p>
					<p className={classes.position}>{props.jobData.position}</p>
					<p className={`${classes.body_row} ${classes.details}`}>
						<span>{job.details.postedAt}</span>
						<span className={classes.dot}></span>
						<span>{job.details.contract}</span>
						<span className={classes.dot}></span>
						<span>{job.details.location}</span>
					</p>
				</div>
			</div>
			<span className={classes.line}></span>
			<ul className={classes.category_list}>
				{job.categories.map((category) => (
					<Category
						key={category}
						label={category}
						addFilter={(filter: string) => props.onFilterClick(filter)}
					/>
				))}
			</ul>
		</li>
	);
};

export default JobItem;
