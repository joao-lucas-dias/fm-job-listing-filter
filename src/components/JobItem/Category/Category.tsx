import classes from "./Category.module.css";

const Category: React.FC<{ label: string }> = (props) => {
	return (
		<li>
			<button className={classes.category}>{props.label}</button>
		</li>
	);
};

export default Category;
