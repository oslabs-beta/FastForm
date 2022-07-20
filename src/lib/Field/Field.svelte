<script lang="ts">
  // import { formStore } from '../store.ts';

  //IMPORT ALL COMPONENTS BELOW
  import Input from './Input.svelte'; //CHECK IF FILE PATH IS CORRECT BEFORE DELETING THIS COMMENT
  // import Radio from './Radio.svelte'; //CHECK IF FILE PATH IS CORRECT BEFORE DELETING THIS COMMENT
  import Checkbox from './CheckBox.svelte'//CHECK IF FILE PATH IS CORRECT BEFORE DELETING THIS COMMENT
  import Select from './Select.svelte' //CHECK IF FILE PATH IS CORRECT BEFORE DELETING THIS COMMENT
  // import Range from './Range.svelte'//CHECK IF FILE PATH IS CORRECT BEFORE DELETING THIS COMMENT
  

  //check the type of this Field element through props.  
  export let type:string;

  //typeSelect is all the input types that user can input and are available on FastForm
  const typeSelect:any = {
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
    // radio: Radio,
    checkbox: Checkbox,
    select: Select,
    // range: Range,
  };

  const renderDom:JSX.Element = typeSelect[type];

</script>

<!-- use svelte:component to dynamically choose the correct component,
we pass in all the props directly to the component -->
<svelte:component this={renderDom} {...$$props}/>





