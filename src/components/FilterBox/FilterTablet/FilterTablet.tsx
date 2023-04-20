import RemoveIcon from "../../../assets/images/icon-remove.svg";

import classes from "./FilterTablet.module.css";

const FilterTablet: React.FC<{
	label: string;
	removeFilter: (filter: string) => void;
}> = (props) => {
	return (
		<li className={classes.container}>
			<span className={classes.label}>{props.label}</span>
			<button onClick={() => props.removeFilter(props.label)} className={classes.button}>
				<img src={RemoveIcon} alt="Remove Icon" />
			</button>
		</li>
	);
};

export default FilterTablet;
