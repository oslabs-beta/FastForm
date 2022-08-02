<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { FastForm, Field } from '../index'

  let myValues = {}
  let myErrors = {}
</script>


<Meta
  title="FastForm/Examples"
  component={FastForm}
  argTypes={{
    handleSubmit: { control: false},
    validate: { control: false }
  }}
/>


<Template let:args>
  <FastForm {...args} 
  handleSubmit={({values, errors}) => {
    myValues = values
    myErrors = errors
  }}
  >
    <Field name='name' type='text' autocomplete='off' placeholder='Name' />
    <Field name='email' type='text' autocomplete='off'placeholder='Email' />
    <Field name='confirmEmail' type='text' autocomplete='off' placeholder='Confirm Email' />
    <button type='submit'>Submit</button>
  </FastForm>
  <hr/>
  <pre>{JSON.stringify(myValues, null, 2)}</pre>
  <pre style="color:red">{JSON.stringify(myErrors, null, 2)}</pre>
</Template>


<Story
  name="No Validation"
  args={{
    initValues: {
      name: '',
      email: '',
      confirmEmail: ''
    }
  }}
/>

<Story
  name="Name Required"
  args={{
    initValues: {
      name: '',
      email: '',
      confirmEmail: ''
    },
    validate: ({required}) => {
      required('name')
    }
  }}
/>

<Story
  name="Emails Must Match"
  args={{
    initValues: {
      name: '',
      email: '',
      confirmEmail: ''
    },
    validate: ({mustMatch}) => {
      mustMatch('confirmEmail', 'email')
    }
  }}
/>
