import type { formStoreValueType } from '../../types'

export default function isBase64(field : string, store: formStoreValueType):formStoreValueType {
  const base64Regex = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
  if (base64Regex.test(field)) {
    store.errors[field]['isBase64'] = `Error: invalid base64 format`
  } 
  return store
}
