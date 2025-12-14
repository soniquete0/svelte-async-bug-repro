<script lang="ts">
	import { getData } from './test.remote';
	import Child from './Child.svelte';

	let { data } = $props();

	const items = await getData();

	let consent = $state(false);
</script>

<h1>Test Page</h1>

<p>Layout timestamp: {data.timestamp}</p>

<p>Items from remote: {items.items.join(', ')}</p>

<h2>Local checkbox:</h2>
<label>
	<input type="checkbox" bind:checked={consent} />
	Consent (checked: {consent})
</label>

<h2>Child component:</h2>
<Child disabled={!consent} />

<p><a href="/">Back to home</a></p>