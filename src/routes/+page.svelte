<script lang="ts">
	import '../css/main.css';
	import KomootIframe from '../components/KomootIframe.svelte';

	const routes = [
		{
			id: '15.8',
			name: '15 km - 800hm',
			iframeLink:
				'https://www.komoot.com/de-de/tour/1557811189/embed?share_token=ax7yQBJ6q9e9wqsDei57b2BHmrnN1naX1qqK6WTqRSIXBj8R28&profile=1'
		},
		{
			id: '20.10',
			name: '20 km - 1200hm',
			iframeLink:
				'https://www.komoot.com/de-de/tour/1557786276/embed?share_token=azmJweGFsZMMpUJjlymFg7J7501FRlJ4k3UMhv2M3wAlyBvWHn&profile=1'
		},
		{
			id: '30.20',
			name: '30 km - 2000hm',
			iframeLink:
				'https://www.komoot.com/de-de/tour/1557790992/embed?share_token=aRXoL4txKNznS1XDkotErLLXO4wh65X7Nm4YXLqccpPsCU7Dig&profile=1'
		},
		{
			id: '42.25',
			name: '42 km - 2500hm',
			iframeLink:
				'https://www.komoot.com/de-de/tour/1557817955/embed?share_token=aBIYqA97DPlZX656sV9FmZb3MtK65plGAWmZr9EQwLwYGNO7G1&profile=1'
		},
		{
			id: '60.40',
			name: '60 km - 4000hm',
			iframeLink:
				'https://www.komoot.com/de-de/tour/1557829457/embed?share_token=a0wHlrHDt8x91iJyQ3sDAlyq80T77vbr9Y3Oykr9ChsHYEM4rw&profile=1'
		}
	];
</script>

<div style="display: flex; justify-content: center;">
	<main style="flex: 1; max-width: 1000px">
		<h1>1. Trail-Fun-Run</h1>
		<nav>
			<ul>
				{#each routes as entry}
					<li>
						<a href={'#' + entry.id}>{entry.name}</a>
					</li>
				{/each}
			</ul>
		</nav>

		{#each routes as entry}
			<article id={entry.id}>
				<h2>{entry.name}</h2>
				<div style="max-width: 1080px;"><KomootIframe url={entry.iframeLink} /></div>
			</article>
		{/each}
	</main>
</div>
