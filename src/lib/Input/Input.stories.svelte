<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { FastForm, Field } from '../index'

  let myValues = {}
  let myErrors = {}
</script>


<Meta
  title="Field/Input"
  component={Field}
  argTypes={{
    validateOnBlur: { control: false },
    validateOnChange: { control: false },
    type: { control: 'text' }
  }}
/>


<Template let:args>
  <FastForm initValues={{name: ''}}
  handleSubmit={({values, errors}) => {
    myValues = values
    myErrors = errors
  }}
  >
    <Field name='name' type={args.type} autocomplete='off'/>
    <button type='submit'>Submit</button>
  </FastForm>
  <hr/>
  <pre>{JSON.stringify(myValues, null, 2)}</pre>
  <pre style="color:red">{JSON.stringify(myErrors, null, 2)}</pre>
</Template>


<Story
  name="Input"
  args={{
    type: 'text'
  }}
/>
