import type { formStoreValueType } from '../../types'

export default function isInRange(field : number, min : number, max: number, store: formStoreValueType):formStoreValueType {

  if (field < min || field > max) {
    store.errors[field]['outOfRange'] = `Error: Number must be within range`
  } 
  return store
}
