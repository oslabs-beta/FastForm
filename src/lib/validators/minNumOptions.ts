import type { formStoreValueType } from "../types";

export default function minNumOptions(field : string, min : number, store : formStoreValueType ) : formStoreValueType {
  if (Array.isArray(store.values[field]) === false) {
    throw new Error('Error: minNumOptions is being used with a non-array type.')
  }
  if (store.values[field].length < min) {
      store.errors[field] ??= {}
      store.errors[field]['minNumOptions'] = `Error: Must be at least ${min} number of items.`
}
return store;
}
