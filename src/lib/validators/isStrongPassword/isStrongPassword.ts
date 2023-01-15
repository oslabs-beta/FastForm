import type { formStoreValueType } from '../../types'

export default function isStrongPassword(field : string, store: formStoreValueType):formStoreValueType {

  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(field);
  const hasLowerCase = /[a-z]/.test(field);
  const hasDigit = /[0-9]/.test(field);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(field);

  if (field.length <= minLength && !hasUpperCase && !hasLowerCase && !hasDigit && !hasSpecialChar) {
    store.errors[field]['isStrongPassword'] = `Error: invalid password format, please enter a new password`
  } 
  return store
}
