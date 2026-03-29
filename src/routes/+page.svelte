<script lang="ts">
	import '../css/main.css';
	import TrailDetails from '../components/TrailDetails.svelte';
	import Header from '../components/Header.svelte';
	import { trails } from '../data/trails';
	import { EVENT_DATE } from '../data/statics';
</script>

<svelte:head>
	<title>Trail Fun Run 2026</title>
	<meta name="author" content="Ludwig Hubert" />
	<meta
		name="description"
		content="Der Trail Fun Run 2026 ist ein entspanntes Trail Running Event für alle, die die Berge lieben und das Berglaufen in der Natur genießen wollen. Freut euch auf atemberaubende Ausblicke, eine anspornende Atmosphäre und natürlich jede Menge Spaß."
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
		<h1 class="text-4xl font-bold uppercase">Trail Fun Run {EVENT_DATE.getFullYear()}</h1>
		<p>
			Na endlich geht es in die dritte Runde vom Trail Fun Run! Auch dieses Jahr hat der
			Spenden-Spaßlauf alles dabei, was ihr auch aus den Vorjahren kennt: Knackige Trails,
			Wahnsinns-Ausblicke und natürlich jede Menge Spaß. Auf geht's!
		</p>
		<h2 class="text-3xl font-bold uppercase">Das Event</h2>
		<p>
			Ohne Regelwerk und Trubel darf sich jede:r selbstverantwortlich auf die Trails begeben, die
			Beine malträtieren und ordentlich die Glykogenspeicher leeren. Wichtig ist nur: Spaß! Daher
			gibt's keine Regeln und keine Zeitnahme, sondern nur die glücklichen Gesichter anderer
			Trail-Suchtis.<br />
			Und das Wichtigste: Am Ende gibt's kalte Getränke, Snacks und einen See zum runterkühlen.
			<br /><br />
			Die freiwillige Teilnahmegebühr ermöglicht eine Spende an
			<a href="https://amaddata.com/" target="_blank" class="underline"
				>Amaddata - für Nepals Kinder</a
			> und die Verpflegung am Ziel. Pay what you want.
		</p>
		<a
			href="https://chat.whatsapp.com/DpyXcnKuQru2YcFv0LCnuM?mode=gi_t"
			class="bg-primary-500 hover:bg-primary-700 flex items-center justify-between rounded px-4 py-2 font-bold text-white"
			target="_blank"
		>
			<span>
				<span class="text-2xl">Ich bin dabei!</span>
				<br />
				<span class="text-xs">(Link zur WhatsApp-Gruppe)</span>
			</span>
			<span
				class="ml-1 inline-block h-3 w-3 -translate-x-1/2 -rotate-45 transform border-r-4 border-b-4 border-inherit"
			>
			</span>
		</a>
		<h2 class="text-3xl font-bold uppercase">Countdown</h2>
		<section class="mb-6 text-center">
			<p>
				Am
				<strong class="text-primary-500 mr-1 text-4xl font-bold"
					>{EVENT_DATE.getDate()}. {EVENT_DATE.toLocaleString('de', { month: 'long' })}
					{EVENT_DATE.getFullYear()}</strong
				>
				geht's los!<br /><br />
				Es gibt keine genauen Startzeiten - der Plan ist, dass alle gegen 14 Uhr im Ziel ankommen. So
				können wir das Event gemeinsam am See ausklingen lassen.
			</p>
		</section>
		<h2 class="text-3xl font-bold uppercase">Die Streckenvorschläge</h2>
		<p>
			Ein paar Vorschläge aus dem Oberaudorfer Trail-Eldorado gibt es hier - es findet sich bestimmt
			auch für jede Route eine Mitstreiter:in. Generell gilt aber: Selbstverantwortlich,
			selbstversorgt & selbstverständlich mit dem nötigen Sicherheitsequipment.
		</p>
		<nav>
			<ul class="ml-8">
				{#each trails as trail (trail.id)}
					<li class="my-2">
						<a href={'#' + trail.id}>
							<span
								class="border-primary-500 mr-2 inline-block h-3 w-3 rotate-45 transform border-t-2 border-r-2"
							></span>
							{trail.title}: {trail.specs}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		{#each trails as trail (trail.id)}
			<hr class="bg-primary-500 mx-auto my-3 w-1/4 pt-1" />
			<TrailDetails {trail} goalTime={EVENT_DATE} />
		{/each}
	</main>
	<footer class="pb-8">
		<a href="https://ludwig-hubert.de/imprint.html" target="_blank">Impressum</a>
	</footer>
</div>
