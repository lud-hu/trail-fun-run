<script lang="ts">
	import { EVENT_DATE } from '../data/statics';

	let now = $state(Date.now());
	let end = EVENT_DATE.getTime();

	let count = $derived(Math.round((end - now) / 1000));
	let d = $derived(Math.floor(count / (3600 * 24)));
	let h = $derived(Math.floor((count % (3600 * 24)) / 3600));
	let m = $derived(Math.floor((count % 3600) / 60));
	let s = $derived(count % 60);

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

	$effect(() => {
		const interval = setInterval(() => {
			now = Date.now();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	$effect(() => {
		if (count <= 0) {
			now = end;
		}
	});
</script>

<div aria-label={'Countdown bis zum ' + EVENT_DATE.toLocaleDateString()}>
	{#if count > 0}
		{#each Object.entries({ d, h, m, s }) as [key, value], i (key)}
			{#if count >= 60 ** (1 - i)}
				<span class="mr-1 text-4xl font-bold">{padValue(value)}</span><span class="mr-4 text-xl"
					>{key}</span
				>
			{/if}
		{/each}
	{:else}
		<span class="text-primary-500 text-3xl font-bold">Das Event ist vorbei.</span>
	{/if}
</div>
