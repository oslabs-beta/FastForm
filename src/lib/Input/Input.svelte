<script lang="ts">

  import { formStore } from '../store'

  type node = {
    type:string
  }
  //prop components
  export let type:string
  export let name:string  
  export let handleOnBlur:()=>void
  export let handleOnChange:()=>void

  $formStore.values[name] ??= '';
  //selects the input type
  function setType(node:node) {
    node.type = type
  }
  
</script>

<input use:setType bind:value={$formStore.values[name]} {...$$restProps} on:blur={handleOnBlur} on:input={handleOnChange}>
