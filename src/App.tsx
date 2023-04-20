import { useState } from "react";
import data from "../data.json";
import classes from "./App.module.css";
import FilterBox from "./components/FilterBox/FilterBox";
import Job from "./models/job";
import JobItem from "./components/JobItem/JobItem";

const App = () => {
	const [filters, setFilters] = useState<string[]>([]);

	const parsedData: Job[] = data.map((job) => {
		const categories = [job.role, job.level, ...job.languages, ...job.tools];

		return {
			id: job.id,
			company: {
				name: job.company,
				logo: job.logo
			},
			tags: {
				new: job.new,
				featured: job.featured
			},
			position: job.position,
			details: {
				postedAt: job.postedAt,
				contract: job.contract,
				location: job.location
			},
			categories: categories
		};
	});

	const filteredJobs = parsedData.filter((job) =>
		filters.every((filter) => job.categories.includes(filter))
	);

	const addFilterHandler = (filterToAdd: string) => {
		if (filters.find((filter) => filter === filterToAdd) === undefined) {
			setFilters((currFilters) => [...currFilters, filterToAdd]);
		}
	};

	const removeFilterHandler = (filterToRemove: string) => {
		setFilters((currFilters) =>
			currFilters.filter((filter) => filter !== filterToRemove)
		);
	};

	const clearFiltersHandler = () => {
		setFilters([]);
	};

	return (
		<div className={classes.wrapper}>
			<header className={classes.header}></header>
			<main className={classes.main}>
				<div
					className={`${classes.content_wrapper} ${
						filters.length > 0 && classes.translate
					}`}
				>
					{filters.length > 0 && (
						<FilterBox
							filterList={filters}
							onFilterRemove={(filter: string) => removeFilterHandler(filter)}
							onClearFilters={clearFiltersHandler}
						/>
					)}
					<ul className={classes.job_list}>
						{filteredJobs.map((job: Job) => (
							<JobItem
								key={job.id}
								jobData={job}
								onFilterClick={(filter: string) => addFilterHandler(filter)}
							/>
						))}
					</ul>
				</div>
			</main>
		</div>
	);
};

export default App;
