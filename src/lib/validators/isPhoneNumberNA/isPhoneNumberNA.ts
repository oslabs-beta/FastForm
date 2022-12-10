import type { formStoreValueType } from '../../types'

export default function isPhoneNumberNA(field : string, store: formStoreValueType):formStoreValueType {
  // This is only valid for North American phone numbers
  const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  if (phoneRegex.test(field)) {
    store.errors[field]['isPhoneNumber'] = `Error: invalid phone number`
  } 
  return store
}
