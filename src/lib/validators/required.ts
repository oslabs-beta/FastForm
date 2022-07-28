import type { formStoreValueType } from "../types";

export default function required(field : string, store: formStoreValueType) : formStoreValueType {
  if (!store.values[field]) {
    store.errors[field] ??= {}
    store.errors[field].required = `Error: ${field} is a required field.`
  } else {
    if (store.errors[field]?.required) {
      delete store.errors[field].required
      if (Object.keys(store.errors[field]).length === 0) delete store.errors[field]; 
    };
    
  }
  return store;
}
