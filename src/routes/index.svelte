<script>
  //@ts-ignore
  import FastForm from "$lib/FastForm/FastForm.svelte"
  import Field from '$lib/Field/Field.svelte'
  import Select from '$lib/Field/Select.svelte'
  // import Field from '../lib/Field/Field.svelte'
  let initValues = {
    icecream: []
  }

  function handleSubmit(values) {
    console.log(values)
  }
</script>

<FastForm initValues={initValues} handleSubmit={handleSubmit}>
  <Field name='icecream' type='checkbox' values={['1', '2', '3']}/>
  <Field name='' type='select' values={['1', '2', '3']} />
  <button type='submit'>Submit!</button>
</FastForm>
