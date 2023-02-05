import type { formStoreValueType } from '../../types'

export default function isMimeType(field : string, store: formStoreValueType):formStoreValueType {
  const urlRegex = /^(https?:\/\/)?((([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,})|(([0-9]{1,3}\.){3}[0-9]{1,3}))(:\d+)?(\/[^\s]*)?$/;
  if (urlRegex.test(field)) {
    store.errors[field]['isMimeType'] = `Error: invalid URL link`
  } 
  return store
}
