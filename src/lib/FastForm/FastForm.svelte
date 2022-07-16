<script>
    import { formStore } from '../store.js'
    export let initValues;
    export let handleSubmit;

    $formStore.values = {...initValues}
</script>
<form on:submit|preventDefault={handleSubmit($formStore)} >
    <slot></slot>
</form>
