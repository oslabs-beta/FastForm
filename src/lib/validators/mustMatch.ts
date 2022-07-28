import type { formStoreValueType } from "../types";

export default function mustMatch(field : string, fieldToMatch : string, store: formStoreValueType):formStoreValueType {
    if (store.values[field] !== store.values[fieldToMatch]) {
        store.errors[field] ??= {}
        store.errors[field]['mustMatch'] = `Error: ${field} must match value provided.`
    } else {
        if (store.errors[field]?.mustMatch) {
            delete store.errors[field]['mustMatch'];
            if (Object.keys(store.errors[field]).length === 0) delete store.errors[field]; 
    }
}
    return store
}
