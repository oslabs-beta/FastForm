<script>
// @ts-nocheck
  import { formStore } from '../store.ts';
  //IMPORT ALL COMPONENTS BELOW
  import Text from './Text.svelte';
  import Radio from './Radio.svelte'
  
  //$$props stores all props that were passed down to this component
  const {type} = $$props;

  //typeSelect is all the types that user can input and are available on FastForm
  const typeSelect = {
    text: Text,
    radio: Radio,
    email: Text
  }
  const renderDom = typeSelect[type]
</script>
<!-- use svelte:component to dynamically choose the correct component,
we pass in all the props directly to the component -->
<svelte:component this={renderDom} {...$$props}/>


<!-- BELOW FOR REFERENCE ONLY CAN BE DELETED -->
<!-- <input name={name} bind:value={$form[name]} />  --> 
<!-- <Field type='radio' name= 'Sex' value = {['Male', 'Female']} />  -->




