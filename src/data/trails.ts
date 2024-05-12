export interface Trail {
	id: string;
	title: string;
	specs: string;
	description: string;
	iframeLink: string;
	supportStations: string[];
	/**
	 * Duration estimate in seconds
	 */
	durationEstimate: number;
}

export const trails: Trail[] = [
	{
		id: '15.8',
		title: 'Kinderspui',
		specs: '15 km - 800hm',
		description:
			"Auf geht's zum Kinderspui, einer gemütlichen 15 km Strecke mit 800 Höhenmetern, perfekt für den Einstieg. Auf geht's die Wadln!",
		iframeLink:
			'https://www.komoot.com/de-de/tour/1557811189/embed?share_token=ax7yQBJ6q9e9wqsDei57b2BHmrnN1naX1qqK6WTqRSIXBj8R28&profile=1',
		supportStations: [],
		durationEstimate: 2 * 60 * 60
	},
	{
		id: '20.10',
		title: 'Höhenluft-Hüpfer',
		specs: '20 km - 1200hm',
		description:
			"Pack die Lederhos ein und starte in den Höhenluft-Hüpfer, einer 20 km Strecke mit 1200 Höhenmetern durchs wunderschöne Oberland. Auf geht's die Wadln!",
		iframeLink:
			'https://www.komoot.com/de-de/tour/1557786276/embed?share_token=azmJweGFsZMMpUJjlymFg7J7501FRlJ4k3UMhv2M3wAlyBvWHn&profile=1',
		supportStations: ['km 15: Trinkwasserstelle Niederleger'],
		durationEstimate: 3 * 60 * 60
	},
	{
		id: '30.20',
		title: 'Berg-Brezn',
		specs: '30 km - 1700hm',
		description:
			"An bisserl zünftiger wirds bei der Berg-Brezn, einer 30 km Rundtour mit 1700 Höhenmetern, wo man die Natur in vollen Zügen genießen kann. Auf geht's die Wadln!",
		iframeLink:
			'https://www.komoot.com/de-de/tour/1576509271/embed?share_token=a5SgvvLOkTw1t2uN2m49hRTdIU4pe1CLrx0CyOJChWOqPBg6eC&profile=1',
		supportStations: ['km 15: Tölzer Hütte', 'km 22: Trinkwasserstelle Niederleger'],
		durationEstimate: 5 * 60 * 60
	},
	{
		id: '42.25',
		title: 'Gipfel-Gaudi',
		description:
			"Jetzt wird's gscheid wild bei der Gipfel-Gaudi, mit 42 km und 2500 Höhenmetern. Für alle, die's wissen wollen und eine Herausforderung ned scheu'n! Auf geht's die Wadln!",
		specs: '42 km - 2500hm',
		iframeLink:
			'https://www.komoot.com/de-de/tour/1557817955/embed?share_token=aBIYqA97DPlZX656sV9FmZb3MtK65plGAWmZr9EQwLwYGNO7G1&profile=1',
		supportStations: ['km 15: Tölzer Hütte', 'km 22: Trinkwasserstelle Niederleger'],
		durationEstimate: 7.5 * 60 * 60
	},
	{
		id: '60.40',
		title: 'Trail T-Rex',
		specs: '60 km - 4000hm',
		description:
			"Oans, zwoa, g'suffa! Der Trail T-Rex, mit 60 km und 4000 Höhenmetern, nur für die ganz harten Bergfexn, die scho a bisserl depperd san. Auf geht's die Wadln!",
		iframeLink:
			'https://www.komoot.com/de-de/tour/1557829457/embed?share_token=a0wHlrHDt8x91iJyQ3sDAlyq80T77vbr9Y3Oykr9ChsHYEM4rw&profile=1',
		supportStations: [
			'km 15: Tölzer Hütte',
			'km 31: Trinkwasserstelle Niederleger',
			'km 35: Möglichkeit für Dead-Drop an Forstweg',
			'km 50: Möglichkeit für Dead-Drop an Bundesstraße'
		],
		durationEstimate: 11 * 60 * 60
	}
];
