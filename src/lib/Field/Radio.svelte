<script lang='ts'>

  import { formStore } from '../store';
  export let type:string;
  export let values:string[];
  export let name:string;

</script>

{#each values as value }
  <input type="radio" name={name} value={value} bind:group={$formStore.values[name]}>
  <label for={value}>{value}</label>
{/each}