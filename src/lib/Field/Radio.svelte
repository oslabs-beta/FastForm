<script>

  import { formStore } from '../store';
  export let type;
  export let values;
  export let name;

</script>

{#each values as value }
  <input type="radio" name={name} value={value} bind:group={$formStore.values[name]}>
  <label for={value}>{value}</label>
{/each}