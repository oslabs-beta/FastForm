import type { formStoreValueType } from '../../types'

export default function isAlphaNumeric(field : string, store: formStoreValueType):formStoreValueType {
  const alphanumericRegex = /^[a-z0-9]+$/i;
  if (alphanumericRegex.test(field)) {
    store.errors[field]['isAlphaNumeric'] = `Error: invalid input, must be alpha-numeric`
  } 
  return store
}
