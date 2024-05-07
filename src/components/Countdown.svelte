<script lang="ts">
	import { onDestroy } from 'svelte';

	const EVENT_DATE = new Date(2024, 8, 6);

	let now = Date.now();
	let end = EVENT_DATE.getTime();

	$: count = Math.round((end - now) / 1000);
	$: d = Math.floor(count / (3600 * 24));
	$: h = Math.floor((count % (3600 * 24)) / 3600);
	$: m = Math.floor((count % 3600) / 60);
	$: s = count % 60;

	function updateTimer() {
		now = Date.now();
	}

	let interval = setInterval(updateTimer, 1000);
	$: if (count === 0) clearInterval(interval);

	/**
	 * Pads a number with a given character to a given length.
	 * @param value The number to pad.
	 * @param length The desired length of the padded number.
	 * @param char The character to pad the number with.
	 */
	function padValue(value: number, length = 2, char = '0') {
		const { length: currentLength } = value.toString();
		if (currentLength >= length) return value.toString();
		return `${char.repeat(length - currentLength)}${value}`;
	}

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div aria-label={'Countdown bis zum ' + EVENT_DATE.toLocaleDateString()}>
	{#if count > 0}
		{#each Object.entries({ d, h, m, s }) as [key, value], i}
			{#if count >= 60 ** (1 - i)}
				<span class="h1 mr-1 text-primary-500 font-bold">{padValue(value)}</span><span
					class="h4 mr-4">{key}</span
				>
			{/if}
		{/each}
	{:else}
		<span class="h2 text-primary-500 font-bold">Das Event ist vorbei.</span>
	{/if}
</div>
