<script lang="ts">
	import '../css/main.css';
	import Countdown from '../components/Countdown.svelte';
	import TrailDetails from '../components/TrailDetails.svelte';
	import Header from '../components/Header.svelte';
	import { trails } from '../data/trails';
	import { EVENT_DATE } from '../data/statics';
</script>

<svelte:head>
	<title>Trail Fun Run 2025</title>
	<meta name="author" content="Ludwig Hubert" />
	<meta
		name="description"
		content="Der Trail Fun Run 2025 ist ein entspanntes Trail Running Event für alle, die die Berge lieben und das Berglaufen in der Natur genießen wollen. Freut euch auf atemberaubende Ausblicke, eine anspornende Atmosphäre und natürlich jede Menge Spaß."
	/>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<Header />
	<main
		id="entry"
		class="mb-8 flex w-full max-w-screen-lg flex-1 flex-col gap-8 px-4 pt-14 lg:px-0"
	>
		<h1 class="h1 font-bold uppercase">Trail Fun Run {EVENT_DATE.getFullYear()}</h1>
		<p>
			Ciao, liebe Bergfreunde! Mamma mia, endlich geht es in die zweite Runde vom Trail Fun Run! Wir
			haben wieder ein paar fantastico Trails für euch vorbereitet, von Piccolo bis Estremo ist
			alles dabei. Freut euch auf bellissimo Ausblicke, eine anspornende Atmosphäre und natürlich
			jede Menge Spaß. Andiamo Ragazzi!
		</p>
		<h2 class="h2 font-bold uppercase">Das Event</h2>
		<p>
			Das Ziel ist es, Spaß zu haben. Niente Regelwerk, Stress oder Trubel. Wir laufen einfach frühs
			los (je nach Distanza früher oder später) und kommen nachmittags wieder am Startpunkt an. Die
			Strecke an sich ist selbstversorgt, heißt ihr müsst euch selbst um eure Verpflegung kümmern.
			Unten seht ihr aber für jede Distanza, welche Möglichkeiten es unterwegs gibt.
			<br /><br />
			Am Ziel gibt's dann Verpflegung, Espressi und einen See zum runterkühlen. Perfetto, oder? Dann
			meld dich an!
			<br /><br />
			Eine freiwillige Teilnahmegebühr ermöglicht eine Spende an die associazione
			<a href="https://amaddata.com/" target="_blank" class="underline">Amaddata</a> und die Verpflegung
			am Ziel.
		</p>
		<a
			href="https://forms.gle/wWCMGfnPafQhhQQ87"
			class="rounded bg-primary-500 px-4 py-2 font-bold text-white hover:bg-primary-700"
			target="_blank"
		>
			Zur Anmeldung <span
				class="ml-1 inline-block h-3 w-3 -translate-x-1/2 -rotate-45 transform border-b-4 border-r-4 border-inherit"
			>
			</span>
		</a>
		<h2 class="h2 font-bold uppercase">Countdown</h2>
		<section class="text-center">
			<Countdown />
			<p class="pt-3">
				Am <strong
					>{EVENT_DATE.getDate()}. {EVENT_DATE.toLocaleString('de', { month: 'long' })}
					{EVENT_DATE.getFullYear()}</strong
				> geht's los. Sarà fantastico!
			</p>
		</section>
		<h2 class="h2 font-bold uppercase">Die Streckenvorschläge</h2>
		<nav>
			<ul class="ml-8">
				{#each trails as trail}
					<li class="my-2">
						<a href={'#' + trail.id}>
							<span
								class="mr-2 inline-block h-3 w-3 rotate-45 transform border-r-2 border-t-2 border-primary-500"
							></span>
							{trail.title}: {trail.specs}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		{#each trails as trail}
			<hr class="mx-auto my-3 w-1/4 bg-primary-500 pt-1" />
			<TrailDetails {trail} goalTime={EVENT_DATE} />
		{/each}
	</main>
	<footer class="pb-8">
		<a href="https://ludwig-hubert.de/imprint.html" target="_blank">Impressum</a>
	</footer>
</div>
