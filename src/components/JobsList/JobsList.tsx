import data from "../../../data.json";
import Job from "../../models/job";
import JobItem from "../JobItem/JobItem";

const JobsList = () => {
	return (
		<ul>
			{data.map((job: Job) => (
				<JobItem key={job.id} jobData={job} />
			))}
		</ul>
	);
};

export default JobsList;
