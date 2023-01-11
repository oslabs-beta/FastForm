import type { formStoreValueType } from '../../types'

export default function isJSON(field : string, store: formStoreValueType):formStoreValueType {
  try {
    JSON.parse(field)
  } catch (e) {
    store.errors[field]['isJSON'] = `Error: Not a valid JSON format`
  }
  return store
}
