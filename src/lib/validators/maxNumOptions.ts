import type { formStoreValueType } from '../types'

export default function maxNumOptions(field : string, max : number, store : formStoreValueType ) : formStoreValueType {
  if (Array.isArray(store.values[field]) === false) {
    throw new Error('Error: maxNumOptions is being used with a non-array type.')
  }
  if (store.values[field].length > max) {
    store.errors[field] ??= {}
    store.errors[field]['maxNumOptions'] = 'Error. Maximum number of options has exceeded'
  }
  return store
}
