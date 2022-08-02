import type { formStoreValueType } from '../../types'

export default function mustMatch(field : string, fieldToMatch : string, store: formStoreValueType):formStoreValueType {
  if (store.values[field] !== store.values[fieldToMatch]) {
    store.errors[field] ??= {}
    store.errors[field]['mustMatch'] = `Error: ${field} must match value provided.`
  } 
  return store
}
