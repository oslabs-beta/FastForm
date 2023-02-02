import type { formStoreValueType } from '../../types'

export default function isStrongPassword(field : string, store: formStoreValueType):formStoreValueType {

  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(field);
  const hasLowerCase = /[a-z]/.test(field);
  const hasDigit = /[0-9]/.test(field);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(field);

  if (field.length < minLength) {
    store.errors[field]['passwordLength'] = `Error: Please enter password longer than 8 characters`
  }

  if (!hasUpperCase) {
    store.errors[field]['passwordUppercase'] = `Error: Please include an uppercase letter`
  }

  if (!hasLowerCase) {
    store.errors[field]['passwordLowercase'] = `Error: Please include a lowercase letter`
  }

  if (!hasDigit) {
    store.errors[field]['passwordHasDigit'] = `Error: Please include a number`
  }

  if (!hasSpecialChar) {
    store.errors[field]['passwordSpecialChar'] = `Error: Please include a special Character !@#$%^&*()`
  }

  return store
}
