<script>
  import { formStore } from '../store'
  export let type;
  export let name;
  
  function setType(node) {
    node.type = type;
  }
  let userInput = '';
  //set the name as a property within store
  
  //sendToStore is going to update the store with it  
  
</script>

<input type:type bind:value={$formStore.values[name]}>
