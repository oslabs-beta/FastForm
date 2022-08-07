import type { Writable } from 'svelte/store'

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
  subscribe: Writable<formStoreValueType>['subscribe']
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
  customValidator: (
    func: (store: formStoreValueType) => formStoreValueType
  ) => void
}

export type validateType = {
  required: (field: string) => void,
  mustMatch: (field: string, fieldToMatch: string) => void,
  minNumOptions: (field: string, min: number) => void,
  maxNumOptions: (field: string, min: number) => void,
  customValidator: (func: (store: formStoreValueType) => formStoreValueType) => void
}
//FastForm.svelte variable types
export type validate = (input: validateType) => void;
export type eventHandler = (userInput: formStoreValueType) => void;
export type initValue = {
  [key: string]: any
}