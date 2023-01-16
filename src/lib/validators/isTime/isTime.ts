import type { formStoreValueType } from '../../types'

export default function isTime(field : string, store: formStoreValueType):formStoreValueType {
  //this verifies HH:MM format in a 24-hour clock
  const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
  if (timeRegex.test(field)) {
    store.errors[field]['isTime'] = `Error: invalid time format`
  } 
  return store
}
