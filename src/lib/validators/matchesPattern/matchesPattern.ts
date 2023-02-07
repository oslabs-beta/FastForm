import type { formStoreValueType } from '../../types'

export default function matchesPattern(field : string, pattern: string, store: formStoreValueType):formStoreValueType {
  const regex = new RegExp(pattern)
  if (regex.test(field)) {
    store.errors[field]['matchesPattern'] = `Error: input does not match regex pattern: ${pattern}`
  } 
  return store
}
