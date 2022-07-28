<script lang="ts">
    import { formStore } from '../store'
    export let initValues;

    export type validate = (input: formStoreType) => void;
    export type handleSubmit = (userInput: formStoreValueType) => void;
    export let validate: validate; 
    export let handleSubmit: handleSubmit;
    
    $formStore.values = {...initValues}

    //default validate and handleSubmit function
    if (typeof validate !== 'function'){
      validate = () => {};
    };
    if (typeof handleSubmit !== 'function'){
      handleSubmit = () => {};
    }

    //on submit, run the validator function first before running the handleSubmit;
    function onSubmit(){
        //When a validator function is passed in, run the validator function;
        if (typeof validate === 'function'){
        validate({
          values: $formStore.values,
          errors: $formStore.errors,
          required: formStore.required,
          mustMatch: formStore.mustMatch,
          minNumOptions: formStore.minNumOptions,
          maxNumOptions: formStore.maxNumOptions
        })};
        handleSubmit($formStore);
    }

</script>

<form on:submit|preventDefault={onSubmit}>
    <slot></slot>
</form>
