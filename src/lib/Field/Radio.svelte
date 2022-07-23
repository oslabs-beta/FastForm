<script lang='ts'>

  import { formStore } from '../store';
  export let type:string;
  export let values:string[];
  export let name:string;
  export let handleBlur:()=>void;
  export let handleOnChange:()=>void;

</script>

{#each values as value }
  <input type="radio" name={name} value={value} bind:group={$formStore.values[name]} on:blur={handleBlur} on:input={handleOnChange}>
  <label for={value}>{value}</label>
{/each}