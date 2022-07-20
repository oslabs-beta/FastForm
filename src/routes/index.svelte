<script>
  import FastForm from "$lib/FastForm/FastForm.svelte"
  import Field from '$lib/Field/Field.svelte'
  import { formStore } from '$lib/store'
  // import Field from '../lib/Field/Field.svelte'
  let initValues = {
    name: 'Griffin',
    name2: 'Angel',
    icecream: []
  }

  let v
  let e

  function handleSubmit(values) {
    console.log(values)
  }
</script>

<FastForm 
initValues={initValues} 
handleSubmit={handleSubmit}
validate = {({values, errors, required, mustMatch, minNumOptions, maxNumOptions}) => {
  required('name')
  mustMatch('name', 'name2')
  maxNumOptions('icecream', 2)
  minNumOptions('icecream', 1)
  }}>
  <Field name='name' type='text' autocomplete='off'/>
  <Field name='name2' type='text' autocomplete='off'/>
  <Field name='icecream' type='checkbox' values={['Chocolate', 'Vanilla', 'Cookies N Cream']}/>
  <button type='submit'>Submit!</button>
</FastForm>

<p>{JSON.stringify($formStore.values, null, 2)}</p>
<p>{JSON.stringify($formStore.errors, null, 2)}</p>
