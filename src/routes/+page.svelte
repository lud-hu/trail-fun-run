<script lang="ts">
	import '../css/main.css';
	import KomootIframe from '../components/KomootIframe.svelte';
	import Header from '../components/Header.svelte';

	const routes = [
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
</script>

<div style="display: flex; justify-content: center; flex-direction: column; align-items: center;">
	<Header />
	<main
		id="entry"
		style="flex: 1; max-width: 1000px"
		class="w-full flex-1 flex flex-col gap-8 pt-14"
	>
		<h1 class="h1 uppercase font-bold">1. Trail Fun Run</h1>
		<p>
			Bist du bereit, deine Laufschuhe zu schnüren und gemeinsam auf eine unvergessliche Reise zu
			gehen? Willkommen beim Trail Fun Run, wo der Spaß genauso wichtig ist wie der Lauf! Tauche ein
			in die atemberaubende Natur, trotze den Herausforderungen der wilden Pfade und erlebe die pure
			Freude des Trailrunning. Egal, ob du ein erfahrener Trail-Profi oder ein Neuling bist, hier
			zählt vor allem eines: unsere gemeinsame Leidenschaft für das Laufen in der Natur. Freu dich
			auf spannende Strecken, unvergessliche Erlebnisse entlang des Weges und freudigem
			Beisammensein danach.<br /><br />Also los! Der Trail Fun Run wartet darauf, von dir mit
			Freundschaft, Abenteuerlust und einem Hauch von Heldenmut gefüllt zu werden. Auf geht's die
			Wadln!
		</p>
		<h2 class="h2 uppercase font-bold">Die Strecken</h2>
		<nav>
			<ul class="ml-8">
				{#each routes as entry}
					<li class="my-2">
						<a href={'#' + entry.id}>
							<span
								class="w-3 h-3 border-primary-500 border-t-2 border-r-2 transform rotate-45 inline-block mr-2"
							></span>
							{entry.title}: {entry.specs}</a
						>
					</li>
				{/each}
			</ul>
		</nav>

		{#each routes as entry}
			<hr class="pt-1 my-3 w-1/4 mx-auto bg-primary-500" />
			<article id={entry.id}>
				<h3 class="h3 uppercase font-bold">{entry.title}</h3>
				<div>{entry.specs}</div>
				<p class="pt-3">{entry.description}</p>
				<!-- <div style="max-width: 1080px;"><KomootIframe url={entry.iframeLink} /></div> -->
			</article>
		{/each}
	</main>
</div>
