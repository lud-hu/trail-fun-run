<script lang="ts">
	import '../css/main.css';
	import Countdown from '../components/Countdown.svelte';
	import TrailDetails from '../components/TrailDetails.svelte';
	import Header from '../components/Header.svelte';
	import { trails } from '../data/trails';

	const GOAL_TIME = new Date(2024, 9, 7, 15, 0);
</script>

<svelte:head>
	<title>Trail Fun Run 2024</title>
	<meta name="author" content="Ludwig Hubert" />
	<meta
		name="description"
		content="Der Trail Fun Run 2024 ist ein entspanntes Trail Running Event für alle, die die Berge lieben und das Berglaufen in der Natur genießen wollen. Freut euch auf atemberaubende Ausblicke, eine anspornende Atmosphäre und natürlich jede Menge Spaß."
	/>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<div class="flex justify-center flex-col items-center">
	<Header />
	<main
		id="entry"
		class="w-full flex-1 flex flex-col gap-8 pt-14 max-w-screen-lg px-4 lg:px-0 mb-8"
	>
		<h1 class="h1 uppercase font-bold">Trail Fun Run 2024</h1>
		<p>
			Servus, liebe Bergfexn! Seid gegrüßt zum Trail Fun Run, dem entspannten Event für alle, die
			die Berge lieben und das Berglaufen in der Natur genießen wollen. Schnappt euch eure
			Lederhosen und Wanderschuhe, denn hier erwartet euch ein Tag voller Gaudi und Abenteuer! Wir
			haben ein paar zünftige Trails für euch vorbereitet, von klein bis groß ist alles dabei!
			Freuts euch auf atemberaubende Ausblicke, eine anspornende Atmosphäre und natürlich jede Menge
			Spaß.<br />Auf geht's, des wird a Gaudi!
		</p>
		<h2 class="h2 uppercase font-bold">Das Event</h2>
		<p>
			Das Ziel ist es, Spaß zu haben! Kein Regelwerk. Kein Stress. Kein Trubel. Wir laufen einfach
			frühs los (je nach Distanz früher oder später) und kommen nachmittags wieder am Parkplatz an.
			Die Strecke an sich ist selbstversorgt, heißt ihr müsst euch selbst um eure Verpflegung
			kümmern. Unten seht ihr aber für jede Distanz, welche Möglichkeiten es unterwegs gibt.<br /> Am
			Ziel gibt's dann Verpflegung, Getränke und einen See zum runterkühlen. Das Datum suchen wir gemeinsam
			aus. Klingt gut? Dann meld dich an!
		</p>
		<a
			href="https://docs.google.com/forms/d/e/1FAIpQLSem6Ry7K2Gn3toIl8yXz1DQbLPSQT9RS9nVC3NvM5oSs7LT5A/viewform?usp=sf_link"
			class="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
			target="_blank"
		>
			Zur Anmeldung <span
				class="inline-block w-3 h-3 border-inherit border-r-4 border-b-4 transform -rotate-45 -translate-x-1/2 ml-1"
			>
			</span>
		</a>
		<h2 class="h2 uppercase font-bold">Countdown</h2>
		<section class="text-center">
			<Countdown />
			<p class="pt-3">Am <strong>07. September 2024</strong> geht's los.</p>
		</section>
		<h2 class="h2 uppercase font-bold">Die Strecken</h2>
		<nav>
			<ul class="ml-8">
				{#each trails as trail}
					<li class="my-2">
						<a href={'#' + trail.id}>
							<span
								class="w-3 h-3 border-primary-500 border-t-2 border-r-2 transform rotate-45 inline-block mr-2"
							></span>
							{trail.title}: {trail.specs}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		{#each trails as trail}
			<hr class="pt-1 my-3 w-1/4 mx-auto bg-primary-500" />
			<TrailDetails {trail} goalTime={GOAL_TIME} />
		{/each}
	</main>
	<footer class="pb-8">
		<a href="https://ludwig-hubert.de/imprint.html" target="_blank">Impressum</a>
	</footer>
</div>
