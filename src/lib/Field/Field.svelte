<script lang="ts">
  import { formStore } from '../store'

  import type { validateType, formStoreValueType } from '../types'

  //IMPORT ALL COMPONENTS BELOW
  import Input from '../Input/Input.svelte' 
  import Radio from '../Radio/Radio.svelte' 
  import Checkbox from '../Checkbox/Checkbox.svelte'
  import Select from '../Select/Select.svelte'
  import Multiselect from '../Multiselect/Multiselect.svelte' 

  

  //import the following variables through props
  export let type:string
  export let validateOnBlur: boolean = true
  export let validateOnChange: boolean = validateOnBlur ? false : true
  export let handleChange: (store: formStoreValueType) => void = () => {}
  export let handleBlur: (store: formStoreValueType) => void = () => {}

  export let validate: ({}:validateType) => void = () =>{}

  interface typeSelectType {[key:string]:any}; 

  //typeSelect is all the input types that user can input and are available on FastForm
  const typeSelect: typeSelectType = {
    text: Input,
    email: Input,
    color: Input,
    number: Input, 
    password: Input, //minlength option
    tel: Input, //pattern option
    button: Input, //value required
    date: Input, //min/max option
    'datetime-local': Input, //min/max option
    file: Input, //accept types option
    hidden: Input,
    image: Input,
    month: Input, //min option
    reset: Input,
    search: Input,
    submit: Input,
    time: Input,
    url: Input,
    week: Input,
    radio: Radio,
    checkbox: Checkbox,
    select: Select,
    multiselect: Multiselect,
    range: Input
  }

  const renderDom:JSX.Element = typeSelect[type]
  //on blur validator function
  function handleOnBlur (){
    //Check if validate is a function, and will only run validate if it's passed in as a function
    //This is the default validation method unless specified not required.
    if (validateOnBlur){
      invokeValidate()
    }
    handleBlur($formStore)
  }
  //handleOnChange runs when the validate func is passed in with the onchange flag to be true.
  //the function validates each time as the input changes
  function handleOnChange(){
    if (validateOnChange){
      invokeValidate()
    }
    handleChange($formStore)
  }

  function invokeValidate() {
    $formStore.errors = {}
    validate({
      required: formStore.required,
      mustMatch: formStore.mustMatch,
      minNumOptions: formStore.minNumOptions,
      maxNumOptions: formStore.maxNumOptions,
      customValidator: formStore.customValidator
    })
      
  }
</script>

<!-- use svelte:component to dynamically choose the correct component,
we pass in all the props directly to the component -->
<svelte:component this={renderDom} {...$$props} {handleOnBlur} {handleOnChange}/>





