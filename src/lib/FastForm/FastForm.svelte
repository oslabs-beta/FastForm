<script>
    import { formStore } from '../store'

    export let initValues;
    export let validate; 
    export let handleSubmit;

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
