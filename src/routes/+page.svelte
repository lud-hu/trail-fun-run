<script lang="ts">
	import '../css/main.css';
	import TrailDetails from '../components/TrailDetails.svelte';
	import Header from '../components/Header.svelte';
	import { trails } from '../data/trails';
</script>

<div class="flex justify-center flex-col items-center">
	<Header />
	<main
		id="entry"
		class="w-full flex-1 flex flex-col gap-8 pt-14 max-w-screen-lg px-4 lg:px-0 mb-8"
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
			<TrailDetails {trail} />
		{/each}
	</main>
</div>
