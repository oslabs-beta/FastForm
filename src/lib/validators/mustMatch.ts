import { formStore } from '$lib/store.js';

export default function mustMatch<T>(value : T, valueToMatch : T) {
    let newStore : any;
        formStore.subscribe((store: any) => {
        newStore = store;
    });

    if (newStore.values[value] !== newStore.values[valueToMatch]) {
        newStore.errors[value] ??= {}
        newStore.errors[value]['mustMatch'] = `Error. ${value} must match value provided.`
    } else {
        if (newStore.errors[value]?.mustMatch) delete newStore.errors[value]['mustMatch'];
        
    }
    formStore.set(newStore);
}
