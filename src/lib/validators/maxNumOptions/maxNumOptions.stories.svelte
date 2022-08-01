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

<Story name='maxNumOptions'>
  <FastForm initValues={{ icecream: [] }}
    handleSubmit={({values, errors}) => {
    myValues = values
    myErrors = errors
  }}
  validate={({maxNumOptions}) => {
    maxNumOptions('icecream', 2)
  }}>
    <Field name='icecream' type='checkbox' values={['Vanilla', 'Chocolate', 'Cookies \'N Cream']} />
    <button type='submit'>Submit</button>
  </FastForm>
  <hr/>
  <pre>{JSON.stringify(myValues, null, 2)}</pre>
  <pre style="color:red">{JSON.stringify(myErrors, null, 2)}</pre>
</Story>
