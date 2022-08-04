import type { formStoreValueType } from '../../types'

export default function required(field : string, store: formStoreValueType) : formStoreValueType {
  if (!store.values[field]) {
    store.errors[field] ??= {}
    store.errors[field].required = `Error: '${field}' is a required field.`
  } 
  return store
}
