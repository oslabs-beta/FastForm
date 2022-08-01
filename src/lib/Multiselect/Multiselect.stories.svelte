<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { FastForm, Field } from '../index'

  let myValues = {}
  let myErrors = {}
</script>


<Meta
  title="Field/Multi-Select"
  component={Field}
  argTypes={{
    validateOnBlur: { control: false },
    validateOnChange: { control: false },
    type: { control: 'text' }
  }}
/>


<Template let:args>
  <FastForm initValues={{icecream: ''}}
  handleSubmit={({values, errors}) => {
    myValues = values
    myErrors = errors
  }}
  >
    <Field name='icecream' type={args.type} values={args.values}/>
    <button type='submit'>Submit</button>
  </FastForm>
  <hr/>
  <pre>{JSON.stringify(myValues, null, 2)}</pre>
  <pre style="color:red">{JSON.stringify(myErrors, null, 2)}</pre>
</Template>


<Story
  name="Multi-Select"
  args={{
    values: ['Vanilla', 'Chocolate', 'Cookies \'N Cream'],
    type: 'multiselect'
  }}
/>
