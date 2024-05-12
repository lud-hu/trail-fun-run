<script lang="ts">
	import KomootIframe from './KomootIframe.svelte';
	import { type Trail } from '../data/trails';

	export let trail: Trail;
</script>

<article id={trail.id}>
	<h3 class="h3 uppercase font-bold">{trail.title}</h3>
	<div>{trail.specs}</div>
	<p class="py-3">{trail.description}</p>
	{#if trail.supportStations.length}
		<h4>Verpflegungsmöglichkeiten:</h4>
		<ul>
			{#each trail.supportStations as station}
				<li class="pl-4">- {station}</li>
			{/each}
		</ul>
	{/if}
	<div style="max-width: 1080px;"><KomootIframe url={trail.iframeLink} /></div>
</article>
