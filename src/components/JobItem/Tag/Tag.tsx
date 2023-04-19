import classes from "./Tag.module.css";

const Tag: React.FC<{ label: string }> = (props) => {
	return (
		<li>
			<button className={classes.tag}>{props.label}</button>
		</li>
	);
};

export default Tag;
