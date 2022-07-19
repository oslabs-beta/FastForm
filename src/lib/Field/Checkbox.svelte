<script>
  import { formStore } from '$lib/store'

  export let values
  export let name
</script>

{#each values as value}
  <label for={value}>{value}</label>
  <input type='checkbox' bind:group={$formStore.values[name]} name={name} value={value} />
{/each}