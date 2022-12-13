import type { formStoreValueType } from '../../types'

export default function isURL(field : string, store: formStoreValueType):formStoreValueType {
  const urlRegex = /^(https?:\/\/)?((([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,})|(([0-9]{1,3}\.){3}[0-9]{1,3}))(:\d+)?(\/[^\s]*)?$/;
  if (urlRegex.test(field)) {
    store.errors[field]['isURL'] = `Error: invalid URL link`
  } 
  return store
}
