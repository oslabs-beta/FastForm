import { formStore } from '$lib/store.ts';

export function required(value) {
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
}
