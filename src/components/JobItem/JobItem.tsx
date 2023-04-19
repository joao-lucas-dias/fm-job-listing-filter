import Job from "../../models/job";

const JobItem: React.FC<{ jobData: Job }> = (props) => {
  return (
    <li>
      <p>{props.jobData.position}</p>
    </li>
  )
};

export default JobItem;