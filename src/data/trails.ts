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
		id: '13.5',
		title: 'Klein',
		specs: '13 km - 500 hm',
		description:
			"Auf geht's zum Kinderspui, einer gemütlichen 15 km Strecke mit 800 Höhenmetern, perfekt für den Einstieg. Auf geht's die Wadln!",
		iframeLink:
			'https://www.komoot.com/de-de/tour/2070307687/embed?share_token=aEc4LJCtvH4olvMWcCAHi87A75mn1AARBbTtZ0Bv4lu7DdMxz7&profile=1',
		supportStations: [],
		durationEstimate: 1.75 * 60 * 60
	},
	{
		id: '20.10',
		title: 'Mittel',
		specs: '20 km - 1000 hm',
		description:
			"Pack die Lederhos ein und starte in den Höhenluft-Hüpfer, einer 20 km Strecke mit 1200 Höhenmetern durchs wunderschöne Oberland. Auf geht's die Wadln!",
		iframeLink:
			'https://www.komoot.com/de-de/tour/2088303526/embed?share_token=ao3tZSlEEM2WM4Zv8r9RqkkXEReM5HafrCeY1W9TvgVGBFwuFt&profile=1',
		supportStations: [],
		durationEstimate: 3.25 * 60 * 60
	},
	{
		id: '34.18',
		title: 'Groß',
		specs: '34 km - 1800 hm',
		description:
			"An bisserl zünftiger wirds bei der Berg-Brezn, einer 30 km Rundtour mit 1700 Höhenmetern, wo man die Natur in vollen Zügen genießen kann. Auf geht's die Wadln!",
		iframeLink:
			'https://www.komoot.com/de-de/tour/2070299830/embed?share_token=aUIpc6LbSkdiv1I07D9ao9IOzkcxDtuUABEncwz9dxh6hAugZE&profile=1',
		supportStations: [],
		durationEstimate: 5.5 * 60 * 60
	},
	{
		id: '41.24',
		title: 'Größer',
		description:
			"Jetzt wird's gscheid wild bei der Gipfel-Gaudi, mit 42 km und 2500 Höhenmetern. Für alle, die's wissen wollen und eine Herausforderung ned scheu'n! Auf geht's die Wadln!",
		specs: '41 km - 2400 hm',
		iframeLink:
			'https://www.komoot.com/de-de/tour/2070330140/embed?share_token=amhtrljF2qTfTBbPhyLOd8MhYInTydMyxtI71wlZtMy9o3wtz8&profile=1',
		supportStations: [],
		durationEstimate: 7 * 60 * 60
	},
	{
		id: '55.30',
		title: 'Brutal',
		specs: '55 km - 3000 hm',
		description:
			"Oans, zwoa, g'suffa! Der Trail T-Rex, mit 60 km und 4000 Höhenmetern, nur für die ganz harten Bergfexn, die scho a bisserl depperd san. Auf geht's die Wadln!",
		iframeLink:
			'https://www.komoot.com/de-de/tour/2070337065/embed?share_token=aNOlY7L9zzDRQHnvSRNxWN64w8xjDy5l3K7rMmzQVRnyu1Fjus&profile=1',
		supportStations: [],
		durationEstimate: 9 * 60 * 60
	},
	{
		id: '77.42',
		title: 'Extrem',
		specs: '77 km - 4200 hm',
		description:
			"Oans, zwoa, g'suffa! Der Trail T-Rex, mit 60 km und 4000 Höhenmetern, nur für die ganz harten Bergfexn, die scho a bisserl depperd san. Auf geht's die Wadln!",
		iframeLink:
			'https://www.komoot.com/de-de/tour/2266462453/embed?share_token=amghjnA08gTFRI0dVLSYN5LCPL6t3N7Wp1oxcNeBh2OvzDVQ7g&profile=1',
		supportStations: [],
		durationEstimate: 13 * 60 * 60
	}
];
