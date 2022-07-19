import { formStore } from '$lib/store.js';



export default function maxNumOptions(value : string, maxValue : number) {
    let newStore : any; 
    formStore.subscribe((store : any) => {
        newStore = store;
    }); 

    if (newStore.values[value].length > maxValue) {
        newStore.errors[value] ??= {}
        newStore.errors[value]['maxNumOptions'] = `Error. Maximum number of options has exceeded.`

    } else {
        if (newStore.errors[value]?.maxNumOptions) delete newStore.errors[value]['maxNumOptions'];
    }

    formStore.set(newStore);
   
}

