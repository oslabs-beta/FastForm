<script>
    import { formStore } from '../store'
    export let values = [];
    export let name;
     
</script>

<select bind:value={$formStore.values[name]} name={name}>
 {#each values as value, i}
 
 <option value={value}>
    {value}
</option>
{/each}
</select>