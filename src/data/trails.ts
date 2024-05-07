export interface Trail {
	id: string;
	title: string;
	specs: string;
	description: string;
	iframeLink: string;
}

export const trails: Trail[] = [
	{
		id: '15.8',
		title: "Starters' Trail",
		specs: '15 km - 800hm',
		description:
			'Eine ideale Einführung für Anfänger: Erklimme die Gipfel auf dieser zugänglichen 15 km Strecke mit 800 Höhenmetern und spüre den Nervenkitzel des Aufstiegs!',
		iframeLink:
			'https://www.komoot.com/de-de/tour/1557811189/embed?share_token=ax7yQBJ6q9e9wqsDei57b2BHmrnN1naX1qqK6WTqRSIXBj8R28&profile=1'
	},
	{
		id: '20.10',
		title: 'Medium Trail',
		specs: '20 km - 1200hm',
		description:
			'Begib dich auf eine abenteuerliche Reise durch Täler und über Hügel auf dieser 20 km Strecke mit 1200 Höhenmetern, perfekt für fortgeschrittene Läufer, die eine Herausforderung suchen.',
		iframeLink:
			'https://www.komoot.com/de-de/tour/1557786276/embed?share_token=azmJweGFsZMMpUJjlymFg7J7501FRlJ4k3UMhv2M3wAlyBvWHn&profile=1'
	},
	{
		id: '30.20',
		title: 'Advanced Trail',
		specs: '30 km - 2000hm',
		description:
			'Erlebe die majestätische Schönheit der Berge auf diesem 30 km Trail mit 2000 Höhenmetern, ideal für erfahrene Läufer, die nach einer anspruchsvollen Strecke suchen.',
		iframeLink:
			'https://www.komoot.com/de-de/tour/1557790992/embed?share_token=aRXoL4txKNznS1XDkotErLLXO4wh65X7Nm4YXLqccpPsCU7Dig&profile=1'
	},
	{
		id: '42.25',
		title: 'Expert Trail',
		description:
			'Fordere dich selbst heraus und erobere die Gipfel auf dieser epischen 42 km Strecke mit 2500 Höhenmetern, geeignet für erfahrene Trail-Runner, die ihre Grenzen testen möchten.',
		specs: '42 km - 2500hm',
		iframeLink:
			'https://www.komoot.com/de-de/tour/1557817955/embed?share_token=aBIYqA97DPlZX656sV9FmZb3MtK65plGAWmZr9EQwLwYGNO7G1&profile=1'
	},
	{
		id: '60.40',
		title: 'Extreme Trail',
		specs: '60 km - 4000hm',
		description:
			'Nur für die mutigsten und erfahrensten Läufer: Bezwing die wildesten Gipfel auf dieser anspruchsvollen 60 km Strecke mit 4000 Höhenmetern und zeig, dass du ein absoluter Vollprofi bist!',
		iframeLink:
			'https://www.komoot.com/de-de/tour/1557829457/embed?share_token=a0wHlrHDt8x91iJyQ3sDAlyq80T77vbr9Y3Oykr9ChsHYEM4rw&profile=1'
	}
];
