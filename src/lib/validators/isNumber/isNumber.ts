import type { formStoreValueType } from '../../types'

export default function isNumber(field : string, store: formStoreValueType):formStoreValueType {
  if (!isNaN(Number(store.values[field]))) {
    store.errors[field]['isNumber'] = `Error: invalid number input`
  } 
  return store
}
