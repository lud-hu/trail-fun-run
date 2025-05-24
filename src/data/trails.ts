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
		title: 'Piccolo',
		specs: '13 km - 500 hm',
		description:
			'Andiamo zum Piccolo, einer gemütlichen 13 km Strecke mit 500 Höhenmetern, perfetto für den Einstieg. Andiamo Ragazzi!',
		iframeLink:
			'https://www.komoot.com/de-de/tour/2070307687/embed?share_token=aEc4LJCtvH4olvMWcCAHi87A75mn1AARBbTtZ0Bv4lu7DdMxz7&profile=1',
		supportStations: ['6 km: Berggasthof Hocheck'],
		durationEstimate: 1.75 * 60 * 60
	},
	{
		id: '20.10',
		title: 'Medio',
		specs: '20 km - 1000 hm',
		description:
			'Packe deine Trailschuhe ein und starte in den Medio, einer 20 km Strecke mit 1200 Höhenmetern durch die bellissima Landschaft. Andiamo Ragazzi!',
		iframeLink:
			'https://www.komoot.com/de-de/tour/2088303526/embed?share_token=ao3tZSlEEM2WM4Zv8r9RqkkXEReM5HafrCeY1W9TvgVGBFwuFt&profile=1',
		supportStations: ['6 km: Berggasthof Hocheck', '12 km: Brünnsteinhaus'],
		durationEstimate: 3.25 * 60 * 60
	},
	{
		id: '34.18',
		title: 'Grande',
		specs: '34 km - 1800 hm',
		description:
			"Un po' anspruchsvoller wird es mit dem Grande, einer 30 km Rundtour mit 1700 Höhenmetern, wo man die Natura in vollen Zügen genießen kann. Andiamo Ragazzi!",
		iframeLink:
			'https://www.komoot.com/de-de/tour/2070299830/embed?share_token=aUIpc6LbSkdiv1I07D9ao9IOzkcxDtuUABEncwz9dxh6hAugZE&profile=1',
		supportStations: [
			'17 km: Berggasthof Hummelei',
			'18 km: Trinkwasserbrunnen in Wall',
			'22 km: Brünnsteinhaus',
			'28 km: Café Dörfl'
		],
		durationEstimate: 5.5 * 60 * 60
	},
	{
		id: '41.24',
		title: 'Più Grande',
		description:
			"Jetzt wird's veramente wild bei der Più Grande, mit 42 km und 2500 Höhenmetern. Für alle, die una sfida grande suchen und keine Angst haben! Andiamo Ragazzi!",
		specs: '41 km - 2400 hm',
		iframeLink:
			'https://www.komoot.com/de-de/tour/2070330140/embed?share_token=amhtrljF2qTfTBbPhyLOd8MhYInTydMyxtI71wlZtMy9o3wtz8&profile=1',
		supportStations: [
			'6 km: Berggasthof Hocheck',
			'15 km: Brünnsteinhaus',
			'16 km: Trinkwasserbrunnen',
			'26 km: Trinkwasserbrunnen',
			'25 km: Café Dörfl'
		],
		durationEstimate: 7 * 60 * 60
	},
	{
		id: '55.30',
		title: 'Brutale',
		specs: '55 km - 3000 hm',
		description:
			'Uno, due, cin cin! Der Brutale, mit 55 km und 3000 Höhenmetern, nur für die echten Montagna-Liebhaber, die ein bisschen pazzo sind. Andiamo Ragazzi!',
		iframeLink:
			'https://www.komoot.com/de-de/tour/2070337065/embed?share_token=aNOlY7L9zzDRQHnvSRNxWN64w8xjDy5l3K7rMmzQVRnyu1Fjus&profile=1',
		supportStations: [
			'6 km: Berggasthof Hocheck',
			'15 km: Brünnsteinhaus',
			'16 km: Trinkwasserbrunnen',
			'26 km: Trinkwasserbrunnen',
			'51 km: Café Dörfl'
		],
		durationEstimate: 9 * 60 * 60
	},
	{
		id: '77.42',
		title: 'Estremo',
		specs: '77 km - 4200 hm',
		description:
			'Mamma mia! Der Estremo, mit 77 km und 4200 Höhenmetern, nur für die veramente harten Bergfexen, die assolutamente pazzo sind. Den ein oder anderen Espresso brauchts dann schon. Andiamo Ragazzi!',
		iframeLink:
			'https://www.komoot.com/de-de/tour/2266462453/embed?share_token=amghjnA08gTFRI0dVLSYN5LCPL6t3N7Wp1oxcNeBh2OvzDVQ7g&profile=1',
		supportStations: [
			'19 km: Berggasthof Hummelei',
			'20 km: Trinkwasserbrunnen in Wall',
			'33 km: Brünnsteinhaus',
			'34 km: Trinkwasserbrunnen',
			'48 km: Trinkwasserbrunnen',
			'73 km: Café Dörfl'
		],
		durationEstimate: 13 * 60 * 60
	}
];
