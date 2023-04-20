import classes from "./Category.module.css";

const Category: React.FC<{ label: string; addFilter: (filter: string) => void }> = (props) => {
	return (
		<li>
			<button onClick={() => props.addFilter(props.label)} className={classes.category}>
				{props.label}
			</button>
		</li>
	);
};

export default Category;
