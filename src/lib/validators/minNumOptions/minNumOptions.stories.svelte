<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
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

<Template let:args>
  <FastForm initValues={{ icecream: [] }}
    handleSubmit={({values, errors}) => {
    myValues = values
    myErrors = errors
  }}
  validate={({minNumOptions}) => {
    minNumOptions('icecream', args.min)
  }}>
    <Field name='icecream' type='checkbox' values={['Vanilla', 'Chocolate', 'Cookies \'N Cream']} />
    <button type='submit'>Submit</button>
  </FastForm>
  <hr/>
  <pre>{JSON.stringify(myValues, null, 2)}</pre>
  <pre style="color:red">{JSON.stringify(myErrors, null, 2)}</pre>
</Template>


<Story
  name="minNumOptions"
  args={{
    min: 1
  }}
/>
