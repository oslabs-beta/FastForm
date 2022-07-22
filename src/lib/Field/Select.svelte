<script lang="ts">
    import { formStore } from '../store'
    export let values:[];
    export let name:string;
    export let handleBlur:()=>void;
    export let handleOnChange:()=>void; 
</script>


<select bind:value={$formStore.values[name]} name={name} on:blur={handleBlur} on:change={handleOnChange}>
 {#each values as value, i}
 
 <option value={value}>
    {value}
</option>
{/each}
</select>