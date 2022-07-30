<script lang='ts'>
  import { formStore } from '../store'

  export let values:string[]
  export let name:string
</script>

{#each values as value}
  <label for={value}>{value}</label>
  <input type='checkbox' bind:group={$formStore.values[name]} name={name} value={value} />
{/each}