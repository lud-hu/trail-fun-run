<script lang="ts">
	let { url }: { url: string } = $props();
</script>

<iframe src={url} title="Route" width="100%" height="700" frameborder="0" scrolling="no"></iframe>
