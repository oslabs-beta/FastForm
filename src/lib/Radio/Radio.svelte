<script lang='ts'>
  import { formStore } from '../store'

  export let values:string[]
  export let name:string
  export let handleOnBlur:()=>void
  export let handleOnChange:()=>void

  $formStore.values[name] ??= ''
</script>

{#each values as value }
  <input type="radio" name={name} value={value} bind:group={$formStore.values[name]} on:blur={handleOnBlur} on:input={handleOnChange}>
  <label for={value}>{value}</label>
{/each}