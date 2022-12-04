import type { formStoreValueType } from '../../types'

export default function verifyEmail(field : string, max : number, store : formStoreValueType ) : formStoreValueType {
  if (isValidEmail(store.values[field]) === false) {
    throw new Error('Error: invalid e-mail format')
  }
  return store
}

function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
