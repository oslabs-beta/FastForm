<script>
  //@ts-ignore
  import FastForm from "$lib/FastForm/FastForm.svelte"
 /*  import Field from '$lib/Field/Field.svelte' */
  // import Field from '../lib/Field/Field.svelte'
  let initValues = {
    name: 'Griffin',
    email: 'griffinbrlw@gmail.com'
  }

  function handleSubmit(values) {
    console.log(values)
  }
</script>

<FastForm initValues={initValues} handleSubmit={handleSubmit}>
  <Field name='name' type='text'/>
  <Field name='email' type='text'/>
  <button type='submit'>Submit!</button>
</FastForm>
