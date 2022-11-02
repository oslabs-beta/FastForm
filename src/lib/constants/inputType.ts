import Input from '../Input/Input.svelte' 
import Radio from '../Radio/Radio.svelte' 
import Checkbox from '../Checkbox/Checkbox.svelte'
import Select from '../Select/Select.svelte'
import Multiselect from '../Multiselect/Multiselect.svelte' 

export  const typeSelect = {
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