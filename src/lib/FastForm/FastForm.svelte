<script>
    import { form } from '../store.ts'
    export let initValues;
    export let handleSubmit;

    form.set({...initValues})
</script>
<!-- <form on:submit|preventDefault={handleSubmit($form)} >
    <slot></slot>
</form>
 -->