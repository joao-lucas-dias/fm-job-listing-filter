export default interface Job {
	id: number;
	company: {
		name: string;
		logo: string;
	};
	tags: {
		new: boolean;
		featured: boolean;
	};
	position: string;
	details: {
		postedAt: string;
		contract: string;
		location: string;
	};
	categories: string[];
}
