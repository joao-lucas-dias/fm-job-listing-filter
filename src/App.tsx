import classes from "./App.module.css";
import JobsList from "./components/JobsList/JobsList";

const App = () => {
	return (
		<div className={classes.wrapper}>
			<header className={classes.header}></header>
			<main className={classes.main}>
				<div className={classes.filter_wrapper}></div>
				<JobsList />
			</main>
		</div>
	);
};

export default App;
