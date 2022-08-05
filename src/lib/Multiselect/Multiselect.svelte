<script lang="ts">
import { formStore } from '../store'

// import type { validateType } from '../types';
export let name: string
export let handleOnBlur:()=>void
export let handleOnChange:()=>void  
export let values: string[]

$formStore.values[name] ??= []
</script>

<select bind:value={$formStore.values[name]} name={name} on:blur={handleOnBlur} on:input={handleOnChange} multiple>
  {#each values as value, i}
  	<option value={value}>
    	{value}
  	</option>
  {/each}
</select>