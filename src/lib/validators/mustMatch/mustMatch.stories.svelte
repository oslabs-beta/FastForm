<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { FastForm, Field } from '../../index'

  let myValues = {}
  let myErrors = {}
</script>

<Meta
  title="Validators/mustMatch"
  argTypes={{
    handleSubmit: { control: false},
    validate: { control: false }
  }}
/>

<Story name='mustMatch'>
  <FastForm initValues={{ email: '', confirmEmail: '' }}
    handleSubmit={({values, errors}) => {
    myValues = values
    myErrors = errors
  }}
  validate={({mustMatch}) => {
    mustMatch('email', 'confirmEmail')
  }}>
    <Field name='email' type='text' placeholder='Email'/>
    <Field name='confirmEmail' type='text' placeholder='Confirm Email'/>
    <button type='submit'>Submit</button>
  </FastForm>
  <hr/>
  <pre>{JSON.stringify(myValues, null, 2)}</pre>
  <pre style="color:red">{JSON.stringify(myErrors, null, 2)}</pre>
</Story>
