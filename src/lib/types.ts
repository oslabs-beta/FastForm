import type { Writable } from 'svelte/store'; 

// export type formStoreType = {
    
//     subscribe: any
//     // type subscribe = {} 
//     // type set: any 
//     // type update: any 
//     required: (
//         field : string
//     ) => void
//     mustMatch: (
//         field: string, 
//         fieldToMatch: string
//     ) => void
//     maxNumOptions: (
//         field: string, 
//         max: number
//     ) => void
//     minNumOptions: (
//         field: string, 
//         min: number
//     ) => void
// }
export type formStoreValueType = {
    values: {
        [index: string]: any
    }
    errors: {
      [index: string] : {
          [index : string] : string
      }    
    }
}

export type formStoreType = {
    subscribe: Writable<formStoreValueType>["subscribe"]
    set: any
    update: any
    required: (
        field : string
    ) => void
    mustMatch: (
        field: string, 
        fieldToMatch: string
    ) => void
    maxNumOptions: (
        field: string, 
        max: number
    ) => void
    minNumOptions: (
        field: string, 
        min: number
    ) => void
}
