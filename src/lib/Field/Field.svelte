<script lang="ts">
  import { formStore } from '../store'

  import type { validateType, formStoreValueType } from '../types'
  import typeSelect from "../constants/inputType"  

  //import the following variables through props
  export let type:string
  export let validateOnBlur: boolean = true
  export let validateOnChange: boolean = validateOnBlur ? false : true
  export let handleChange: (store: formStoreValueType) => void = () => {}
  export let handleBlur: (store: formStoreValueType) => void = () => {}

  export let validate: ({}:validateType) => void = () =>{}

  interface typeSelectType {[key:string]:any}; 

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





