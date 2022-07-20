<script>
  import FastForm from "$lib/FastForm/FastForm.svelte"
  import Field from '$lib/Field/Field.svelte'
  import { formStore } from '$lib/store'
  // import Field from '../lib/Field/Field.svelte'
  let initValues = {
    name: 'Griffin',
    icecream: ''
  }

</script>

<FastForm 
initValues={initValues} 
handleSubmit={handleSubmit}
validate = {({values, errors, store}) => {
  store.required('name')
  }}>
  <Field name='name' type='text' autocomplete='off'/>
  <Field name='icecream' type='radio' values={['1', '2', '3']}/>
  <button type='submit'>Submit!</button>
</FastForm>

<p>{JSON.stringify($formStore.values)}</p>
<p>{JSON.stringify($formStore.errors)}</p>
