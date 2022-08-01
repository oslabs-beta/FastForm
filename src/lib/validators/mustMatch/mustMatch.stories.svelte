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

<Story name='mustMatch'>
  <FastForm initValues={{ name: '', name2: '' }}
    handleSubmit={({values, errors}) => {
    myValues = values
    myErrors = errors
  }}
  validate={({mustMatch}) => {
    mustMatch('name', 'name2')
  }}>
    <Field name='name' type='text' placeholder='Enter Text Here'/>
    <Field name='name2' type='text' placeholder='Enter Text Here'/>
    <button type='submit'>Submit</button>
  </FastForm>
  <hr/>
  <pre>{JSON.stringify(myValues, null, 2)}</pre>
  <pre style="color:red">{JSON.stringify(myErrors, null, 2)}</pre>
</Story>
