<script lang="ts">
  // import { formStore } from '../store.ts';

  //IMPORT ALL COMPONENTS BELOW
  import Input from './Input.svelte'; //CHECK IF FILE PATH IS CORRECT BEFORE DELETING THIS COMMENT
  import Radio from './Radio.svelte'; //CHECK IF FILE PATH IS CORRECT BEFORE DELETING THIS COMMENT
  import Checkbox from './Checkbox.svelte'//CHECK IF FILE PATH IS CORRECT BEFORE DELETING THIS COMMENT
  import Select from './Select.svelte' //CHECK IF FILE PATH IS CORRECT BEFORE DELETING THIS COMMENT
  // import Range from './Range.svelte'//CHECK IF FILE PATH IS CORRECT BEFORE DELETING THIS COMMENT
  import { formStore } from '../store'
  import type { SvelteComponentTyped } from 'svelte'

  //check the type of this Field element through props.  
  export let type:string;
  //Access validate from props;
  type validateType = {
    values?: object,
    errors?: object,
    required?: (field:string, store:any)=>void,
    mustMatch?: (field: string, fieldToMatch: string, store:any)=>void,
    minNumOptions?: (field:string, min:number, store:any)=>void,
    maxNumOptions?: (field:string, min:number, store:any)=>void
    }
  export let validate: ({}:validateType) => {}

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
    // range: Range,
  };

  const renderDom:JSX.Element = typeSelect[type];

  //on blur validator function
  function handleBlur (){
    //check if validate is a function, and will only run validate if it's passed in as a function
    if (typeof validate ==='function'){
      validate({
          values: $formStore.values,
          errors: $formStore.errors,
          required: formStore.required,
          mustMatch: formStore.mustMatch,
          minNumOptions: formStore.minNumOptions,
          maxNumOptions: formStore.maxNumOptions
        });
    }
  }
</script>

<!-- use svelte:component to dynamically choose the correct component,
we pass in all the props directly to the component -->
<svelte:component this={renderDom} {...$$props} {handleBlur}/>





