import classes from "./App.module.css";
import FilterBox from "./components/FilterBox/FilterBox";
import JobsList from "./components/JobsList/JobsList";

const DUMMY_FILTERS: string[] = ["Frontend", "CSS", "JavaScript", "HTML"];

const App = () => {
	return (
		<div className={classes.wrapper}>
			<header className={classes.header}></header>
			<main className={classes.main}>
				<div
					className={`${classes.content_wrapper} ${
						DUMMY_FILTERS.length > 0 && classes.translate
					}`}
				>
					{DUMMY_FILTERS.length > 0 && <FilterBox filterList={DUMMY_FILTERS} />}
					<JobsList />
				</div>
			</main>
		</div>
	);
};

export default App;
