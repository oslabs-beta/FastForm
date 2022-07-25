<script>
    import { formStore } from '../store'
    export let initValues;
    export let validate; 
    export let handleSubmit;

    $formStore.values = {...initValues}

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
        console.log('about to run handlesubmit')
        handleSubmit($formStore);
    }

</script>

<form on:submit|preventDefault={onSubmit}>
    <slot></slot>
</form>
