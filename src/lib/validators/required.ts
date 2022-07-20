/* import { formStore } from '../store'; */

/* export default function required(value) {
  let newStore
  formStore.subscribe(store => {
    newStore = store; 
  })
  if (!newStore.values[value]) {
    if (!newStore.errors[value]) {
      newStore.errors[value] = {
        required: `Error. ${value} is a required field.`
      } 
    } else {
      newStore.errors[value].required = `Error. ${value} is a required field.`
    }
    formStore.set(newStore)    
  }
} */

export default function required(field : any, store: any) : any {
  console.log(field)
  console.log(store)
  if (!store.values[field]) {
    store.errors.test = 'dsjghfaski'
  }
  return store
}
