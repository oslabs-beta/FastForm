import type { formStoreValueType } from '../../types'

export default function isFileSize(field : number, maxSize: number = 5000000, store: formStoreValueType):formStoreValueType {
  //file size default at 5MB
  if (field>maxSize) {
    store.errors[field]['isFileSize'] = `Error: filesize is too large`
  } 
  return store
}
