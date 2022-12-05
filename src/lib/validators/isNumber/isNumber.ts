import type { formStoreValueType } from '../../types'

export default function isNumber(field : string, fieldToMatch : string, store: formStoreValueType):formStoreValueType {
  if (!isNaN(Number(store.values[field]))) {
    store.errors[field]['isNumber'] = `Error: Not a number`
  } 
  return store
}
