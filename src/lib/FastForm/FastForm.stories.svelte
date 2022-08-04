<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import { FastForm, Field } from '../index'

  let myValues = {}
  let myErrors = {}
</script>


<Meta
  title="Fastform/FastForm"
  component={FastForm}
  argTypes={{
    handleSubmit: { control: false},
    validate: { control: false }
  }}
/>


<Template let:args>
  <FastForm initValues= {args.initValues}
  validate={({required, mustMatch, minNumOptions, maxNumOptions}) => {
    args.nameRequired ? required('name') : null
    args.emailsMustMatch ? mustMatch('confirmEmail', 'email') : null
    minNumOptions('icecream', args.minIcecreamChoices)
    maxNumOptions('icecream', args.maxIcecreamChoices)
  }}
  handleSubmit={({values, errors}) => {
    myValues = values
    myErrors = errors
  }}
  >
    <Field name='name' type='text' autocomplete='off' placeholder='Name' />
    <Field name='email' type='text' autocomplete='off'placeholder='Email' />
    <Field name='confirmEmail' type='text' autocomplete='off' placeholder='Confirm Email' />
    <br/>
    <Field name='icecream' type='checkbox' values={args.values} />
    <button type='submit'>Submit</button>
  </FastForm>
  <hr/>
  <pre>{JSON.stringify(myValues, null, 2)}</pre>
  <pre style="color:red">{JSON.stringify(myErrors, null, 2)}</pre>
</Template>


<Story
  id="example"
  name="FastForm"
  args={{
    initValues: {
      name: '',
      email: '',
      confirmEmail: '',
      icecream: []
    },
    values: ['Vanilla', 'Chocolate', 'Cookies \'N Cream'],
    nameRequired: false,
    emailsMustMatch: false,
    minIcecreamChoices: 0,
    maxIcecreamChoices: 3
  }}
/>
