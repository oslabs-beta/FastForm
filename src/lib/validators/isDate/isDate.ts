import type { formStoreValueType } from '../../types'

export default function isDate(field : string, fieldToMatch : string, store: formStoreValueType):formStoreValueType {
  const date = new Date(field)
  if (!isNaN(date.getTime())) {
    store.errors[field]['isDate'] = `Error: invalid Date input`
  } 
  return store
}
