import type { Writable } from 'svelte/store'; 

export type formStoreType = {
    subscribe: any
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