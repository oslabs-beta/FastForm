/* import { writable } from 'svelte/store';

export const formStore = writable({
    values: {},
    errors: {}
  });
 */
  import { writable } from 'svelte/store';
  import { required, mustMatch, maxNumOptions, minNumOptions } from './validators';

  function createFormStore() {
    const { subscribe, set, update } = writable({
      values: {},
      errors: {}
    });
  
    return {
      subscribe,
      set,
      update,
      required: (field:any) => update(store => required(field, store)),
      mustMatch: (field:any, fieldToMatch:any) => update(store => mustMatch(field, fieldToMatch, store)),
      minNumOptions: (field:any, min:any) => update(store => minNumOptions(field, min, store)),
      maxNumOptions: (field:any, max:any) => update(store => maxNumOptions(field, max, store))
    };
  }
  
  export const formStore = createFormStore();