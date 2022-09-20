<script lang="ts">
    import { formStore } from '../store'
    import type { validate, eventHandler, initValue } from '../types'
   
    //props for FastForm component
    //set default values for validate and handleSubmit to be empty functions 
    export let initValues: initValue = {}
    export let validate: validate = () =>{} 
    export let handleSubmit: eventHandler = () => {}
    export let handleChange: eventHandler = () => {}
    
    $formStore.values = {...initValues}

    function onChange() {
      handleChange($formStore)
    }

    function onVerify() {
      console.log('verifying')
    }

    //on submit, run the validator function first before running the handleSubmit;
    function onSubmit(){
      //When a validator function is passed in, run the validator function;
      
      $formStore.errors = {}
      validate({
        required: formStore.required,
        mustMatch: formStore.mustMatch,
        minNumOptions: formStore.minNumOptions,
        maxNumOptions: formStore.maxNumOptions,
        customValidator: formStore.customValidator
      })
      handleSubmit($formStore)
    }

</script>

<form on:submit|preventDefault={onSubmit} on:input={onChange}>
    <slot></slot>
</form>
