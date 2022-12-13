import type { formStoreValueType } from '../../types'

export default function isAlpha(field : string, store: formStoreValueType):formStoreValueType {
  const alphaRegex = /^[A-Za-z]+$/;
  if (alphaRegex.test(field)) {
    store.errors[field]['isAlpha'] = `Error: Please enter all letters`
  } 
  return store
}
