<script lang="ts">
	import { Checkbox } from 'bits-ui';

	interface Props {
		disabled: boolean;
	}

	let { disabled }: Props = $props();
	let checked = $state(false);
</script>

<div style="padding: 1rem; border: 1px solid #ccc;">
	<h3>bits-ui Checkbox:</h3>
	<Checkbox.Root bind:checked {disabled}>
		{#snippet children({ checked })}
			<div style="width: 20px; height: 20px; border: 1px solid black; display: flex; align-items: center; justify-content: center;">
				{checked ? '✓' : ''}
			</div>
		{/snippet}
	</Checkbox.Root>
	
	<p>State value: checked = {checked}</p>
	<p>Disabled: {disabled}</p>
	
	<h3>Native checkbox (for comparison):</h3>
	<input type="checkbox" bind:checked {disabled} />
</div>