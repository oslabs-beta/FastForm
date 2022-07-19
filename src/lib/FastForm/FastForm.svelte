<script>
    import { formStore } from '../store.ts'
    export let initValues;
    export let validate; 
    export let handleSubmit;

    $formStore.values = {...initValues}

    //on submit, run the validator function first before running the handleSubmit;
    function onSubmit(){
        validate($formStore);
        handleSubmit($formStore);
    }

</script>

<form on:submit|preventDefault={onSubmit}>
    <slot></slot>
</form>
