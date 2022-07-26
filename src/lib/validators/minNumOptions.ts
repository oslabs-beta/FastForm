import type { formStoreValueType } from "../types";

export default function minNumOptions(field : string, min : number, store : formStoreValueType ) : formStoreValueType {
  if (store.values[field].length < min) {
      store.errors[field] ??= {}
      store.errors[field]['minNumOptions'] = `Error: Must be at least ${min} number of items.`
  } else {
      if (store.errors[field]?.minNumOptions) {
          delete store.errors[field]['minNumOptions'];
      if (Object.keys(store.errors[field]).length === 0) delete store.errors[field]; 
  }
}
return store;
}
