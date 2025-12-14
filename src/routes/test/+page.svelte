<script lang="ts">
	import { Checkbox } from 'bits-ui';
	import { getData } from './test.remote';

	let { data } = $props();

	const items = await getData();

	let checked = $state(false);
</script>

<h1>Test Page</h1>

<p>Layout timestamp: {data.timestamp}</p>
<p>Items from remote: {items.items.join(', ')}</p>

<div style="padding: 1rem; border: 1px solid #ccc;">
	<h3>bits-ui Checkbox (should change icon when checked):</h3>
	<Checkbox.Root bind:checked>
		{#snippet children({ checked })}
			<div style="width: 20px; height: 20px; border: 1px solid black; display: flex; align-items: center; justify-content: center;">
				{checked ? '✓' : ''}
			</div>
		{/snippet}
	</Checkbox.Root>
	
	<p>State value: checked = {checked}</p>
	
	<h3>Native checkbox (for comparison):</h3>
	<input type="checkbox" bind:checked />
</div>

<p><a href="/">Back to home</a></p>