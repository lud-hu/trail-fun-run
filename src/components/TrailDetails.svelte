<script lang="ts">
	import KomootIframe from './KomootIframe.svelte';
	import { type Trail } from '../data/trails';

	export let trail: Trail;
	export let goalTime: Date;

	$: startTime = new Date(goalTime.getTime() - trail.durationEstimate * 1000);

	const formatTime = (time: Date) =>
		time.toLocaleTimeString('de', { hour: '2-digit', minute: '2-digit' });
</script>

<article id={trail.id}>
	<h3 class="h3 font-bold uppercase">{trail.title}</h3>
	<div>{trail.specs}</div>
	<div class="flex flex-col gap-3 py-3">
		<!-- <p>{trail.description}</p> -->
		<div>
			<span class="italic">Startvorschlag:</span>
			{formatTime(startTime)} Uhr<br />
			<small
				>Für Zieleinlauf gegen
				{formatTime(goalTime)} Uhr</small
			>
		</div>
		{#if trail.supportStations.length}
			<h4 class="italic">Verpflegungsmöglichkeiten:</h4>
			<ul>
				{#each trail.supportStations as station}
					<li class="pl-4">- {station}</li>
				{/each}
			</ul>
		{:else}
			<h4 class="italic">Verpflegungsmöglichkeiten:</h4>
			<div class="pl-4">Info folgt</div>
		{/if}
	</div>
	<div style="max-width: 1080px;"><KomootIframe url={trail.iframeLink} /></div>
</article>
