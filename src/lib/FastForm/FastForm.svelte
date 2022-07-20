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
          store: formStore
        });
        handleSubmit();
    }

</script>

<form on:submit|preventDefault={onSubmit}>
    <slot></slot>
</form>
