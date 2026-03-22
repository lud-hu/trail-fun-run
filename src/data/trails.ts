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
		id: '14.5',
		title: 'Trail S',
		specs: '14 km - 500 hm',
		description:
			'Andiamo zum Piccolo, einer gemütlichen 14 km Strecke mit 500 Höhenmetern, perfetto für den Einstieg. Andiamo Ragazzi!',
		iframeLink:
			'https://www.komoot.com/de-de/tour/2805521776/embed?share_token=aabwxOyRAX2yr0b73fUPrXYnkXv25vVZDnf1P0oI7WQiQ8l8YT&profile=1',
		supportStations: [], // ['6 km: Berggasthof Hocheck'],
		durationEstimate: 2 * 60 * 60
	},
	{
		id: '21.10',
		title: 'Trail M',
		specs: '21 km - 1000 hm',
		description:
			'Packe deine Trailschuhe ein und starte in den Medio, einer 21 km Strecke mit 1000 Höhenmetern durch die bellissima Landschaft. Andiamo Ragazzi!',
		iframeLink:
			'https://www.komoot.com/de-de/tour/2805524803/embed?share_token=agNKp8Gznwap1XLyeOU2aEvUFCGYcI1P51wDsIq5IP67tlO4Rf&profile=1',
		supportStations: [], // ['6 km: Berggasthof Hocheck', '12 km: Brünnsteinhaus'],
		durationEstimate: 3.25 * 60 * 60
	},
	{
		id: '34.16',
		title: 'Trail L',
		specs: '34 km - 1600 hm',
		description:
			"Un po' anspruchsvoller wird es mit dem Grande, einer 35 km Rundtour mit 1800 Höhenmetern, wo man die Natura in vollen Zügen genießen kann. Andiamo Ragazzi!",
		iframeLink:
			'https://www.komoot.com/de-de/tour/2805532359/embed?share_token=a8dWEzou61xqzQYhsGz3RRegDUk7Z4Pra36WVzqu0TLHYLAUat&profile=1',
		supportStations: [],
		// [
		// 	'17 km: Berggasthof Hummelei',
		// 	'18 km: Trinkwasserbrunnen in Wall',
		// 	'22 km: Brünnsteinhaus',
		// 	'28 km: Café Dörfl'
		// ],
		durationEstimate: 5.25 * 60 * 60
	},
	{
		id: '42.24',
		title: 'Trail XL',
		description:
			"Jetzt wird's veramente wild bei der Più Grande, mit 42 km und 2400 Höhenmetern. Für alle, die una sfida grande suchen und keine Angst haben! Andiamo Ragazzi!",
		specs: '42 km - 2400 hm',
		iframeLink:
			'https://www.komoot.com/de-de/tour/2805535643/embed?share_token=acBZ38kMmK5CzEGYsesEgEFuVWWzGX61ey5PDq762223NE9jRj&profile=1',
		supportStations: [],
		// [
		// 	'6 km: Berggasthof Hocheck',
		// 	'15 km: Brünnsteinhaus',
		// 	'16 km: Trinkwasserbrunnen',
		// 	'26 km: Trinkwasserbrunnen',
		// 	'36 km: Café Dörfl'
		// ],
		durationEstimate: 7.25 * 60 * 60
	},
	{
		id: '55.30',
		title: 'Trail XXL',
		specs: '55 km - 3000 hm',
		description:
			'Uno, due, cin cin! Der Brutale, mit 55 km und 3000 Höhenmetern, nur für die echten Montagna-Liebhaber, die ein bisschen pazzo sind. Andiamo Ragazzi!',
		iframeLink:
			'https://www.komoot.com/de-de/tour/2070337065/embed?share_token=aNOlY7L9zzDRQHnvSRNxWN64w8xjDy5l3K7rMmzQVRnyu1Fjus&profile=1',
		supportStations: [],
		// [
		// 	'6 km: Berggasthof Hocheck',
		// 	'15 km: Brünnsteinhaus',
		// 	'16 km: Trinkwasserbrunnen',
		// 	'26 km: Trinkwasserbrunnen',
		// 	'51 km: Café Dörfl'
		// ],
		durationEstimate: 9.25 * 60 * 60
	},
	{
		id: '77.43',
		title: 'Trail XXXL',
		specs: '77 km - 4300 hm',
		description:
			'Mamma mia! Der Estremo, mit 77 km und 4200 Höhenmetern, nur für die veramente harten Bergfexen, die assolutamente pazzo sind. Den ein oder anderen Espresso brauchts dann schon. Andiamo Ragazzi!',
		iframeLink:
			'https://www.komoot.com/de-de/tour/2841769627/embed?share_token=aVq7EXlLyo2xmlvdMf38IEM53TRS3PXB7M2ehZgxEgiJZEceRg&profile=1',
		supportStations: [],
		// [
		// 	'19 km: Berggasthof Hummelei',
		// 	'20 km: Trinkwasserbrunnen in Wall',
		// 	'33 km: Brünnsteinhaus',
		// 	'34 km: Trinkwasserbrunnen',
		// 	'48 km: Trinkwasserbrunnen',
		// 	'73 km: Café Dörfl'
		// ],
		durationEstimate: 13 * 60 * 60
	}
];
