<script>
    import { formStore } from '../store.ts'
    export let initValues;
    export let handleSubmit;

    $formStore.values = {...initValues}
</script>
<!-- <form on:submit|preventDefault={handleSubmit($formStore)} >
    <slot></slot>
</form>
 -->