import { formStore } from '$lib/store.js';

export default function minNumOptions(field: string, min: number): void {
  let newStore : any
  formStore.subscribe(store => {
    newStore = store; 
  })
  if (newStore.values[field].length < min) {
      newStore.errors[field] ??= {}
      newStore.errors[field]['minNumOptions'] = `Error. Must be at least ${min} ${field}`
  } else {
    if (newStore.errors[field]['minNumOptions']) delete newStore.errors[field]['minNumOptions']
  }
}
