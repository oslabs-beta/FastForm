<script>

  import { formStore } from '../store'

  //prop components
  export let type;
  export let name;  
  //selects the input type
  function setType(node) {
    node.type = type;
  }
  let userInput = '';
 
    
  
</script>

<input use:setType bind:value={$formStore.values[name]} {...$$props}>
