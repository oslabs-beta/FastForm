import type { formStoreValueType } from "../types";

export default function maxNumOptions(field : string, max : number, store : formStoreValueType ) : formStoreValueType {
    if (store.values[field].length > max) {
        store.errors[field] ??= {}
        store.errors[field]['maxNumOptions'] = `Error. Maximum number of options has exceeded`
    } else {
        if (store.errors[field]?.maxNumOptions) {
            delete store.errors[field]['maxNumOptions'];
        if (Object.keys(store.errors[field]).length === 0) delete store.errors[field]; 
    }
  }
  return store;
}
