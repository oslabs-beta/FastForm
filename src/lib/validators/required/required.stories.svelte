<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { FastForm, Field } from '../../index'

  let myValues = {}
  let myErrors = {}
</script>

<Meta
  title="Validators/Examples"
  argTypes={{
    handleSubmit: { control: false},
    validate: { control: false }
  }}
/>

<Story name='required'>
  <FastForm initValues={{ name: '' }}
    handleSubmit={({values, errors}) => {
    myValues = values
    myErrors = errors
  }}
  validate={({required}) => {
    required('name')
  }}>
    <Field name='name' type='text' placeholder='test'/>
    <button type='submit'>Submit</button>
  </FastForm>
  <hr/>
  <pre>{JSON.stringify(myValues, null, 2)}</pre>
  <pre style="color:red">{JSON.stringify(myErrors, null, 2)}</pre>
</Story>
