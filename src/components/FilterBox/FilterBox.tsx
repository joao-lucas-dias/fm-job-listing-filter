import classes from "./FilterBox.module.css";
import FilterTablet from "./FilterTablet/FilterTablet";

const FilterBox: React.FC<{ filterList: string[] }> = (props) => {
	return (
		<div className={classes.container}>
			<ul className={classes.filter_list}>
        {props.filterList.map((filter) => (
          <FilterTablet key={filter} label={filter} />
        ))}
      </ul>
			<button className={classes.button}>Clear</button>
		</div>
	);
};

export default FilterBox;
