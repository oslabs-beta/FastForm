<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { FastForm, Field } from '../../index'

  let myValues = {}
  let myErrors = {}
</script>

<Meta
  title="Validators/verifyEmail"
  argTypes={{
    handleSubmit: { control: false},
    validate: { control: false }
  }}
/>

<Template let:args>
  <FastForm initValues={''}
    handleSubmit={({values, errors}) => {
    myValues = values
    myErrors = errors
  }}
  validate={({verifyEmail}) => {
    verifyEmail('icecream', args.repeatEmail)
  }}>
    <Field name='icecream' type='email' values={'ilija@gmail.com'} />
    <button type='submit'>Submit</button>
  </FastForm>
  <hr/>
  <pre>{JSON.stringify(myValues, null, 2)}</pre>
  <pre style="color:red">{JSON.stringify(myErrors, null, 2)}</pre>
</Template>


<Story
  name="emailVerification"
  args={{
    min: 1
  }}
/>
