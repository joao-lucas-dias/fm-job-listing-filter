
import Job from "../../models/job";
import JobItem from "../JobItem/JobItem";

import classes from "./JobsList.module.css";

const JobsList = () => {
	return (
		<ul className={classes.wrapper}>
			{data.map((job: Job) => (
				<JobItem key={job.id} jobData={job} />
			))}
		</ul>
	);
};

export default JobsList;
