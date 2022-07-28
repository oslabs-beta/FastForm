export default function maxNumOptions(field : string, max : number, store : any ) : any {
    if (store.values[field].length > max) {
        store.errors[field] ??= {}
        store.errors[field]['maxNumOptions'] = `Error. Maximum number of options has exceeded`
    } else {
        if (store.errors[field]?.maxNumOptions) {
            delete store.errors[field]['maxNumOptions'];
        if (Object.keys(store.errors[field]).length === 0) delete store.errors[field]; 
    }
  }
  if (Array.isArray(store.values[field]) === false) {
    throw new Error('Error: maxNumOptions is being used with a non-array type.')
  }


  return store;
}
