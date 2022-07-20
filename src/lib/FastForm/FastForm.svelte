<script>
    import { formStore } from '../store'
    export let initValues;
    export let validate; 
    export let handleSubmit;

    $formStore.values = {...initValues}

    //on submit, run the validator function first before running the handleSubmit;
    function onSubmit(){
        validate({
          values: $formStore.values,
          errors: $formStore.errors,
          required: formStore.required,
          mustMatch: formStore.mustMatch,
          minNumOptions: formStore.minNumOptions,
          maxNumOptions: formStore.maxNumOptions
        });
        handleSubmit();
    }

</script>

<form on:submit|preventDefault={onSubmit}>
    <slot></slot>
</form>
