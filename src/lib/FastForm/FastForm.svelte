<script lang="ts">
    import { formStore } from '../store'
    import type { validate, handleSubmit, initValue } from '../types'
   
    //props that need to be passed in 
    export let initValues: initValue;
    export let validate: validate; 
    export let handleSubmit: handleSubmit;
    
    $formStore.values = {...initValues}

   

    //on submit, run the validator function first before running the handleSubmit;
    function onSubmit(){
        //When a validator function is passed in, run the validator function;
        if (typeof validate === 'function'){
        $formStore.errors = {}
        validate({
          required: formStore.required,
          mustMatch: formStore.mustMatch,
          minNumOptions: formStore.minNumOptions,
          maxNumOptions: formStore.maxNumOptions,
          customValidator: formStore.customValidator
        })};
        handleSubmit($formStore);
    }

</script>

<form on:submit|preventDefault={onSubmit}>
    <slot></slot>
</form>
