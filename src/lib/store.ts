/* import { writable } from 'svelte/store';

export const formStore = writable({
    values: {},
    errors: {}
  });
 */
  import { writable } from 'svelte/store';
  import { required, mustMatch, maxNumOptions, minNumOptions } from './validators';
  // import type { Writable } from 'svelte/store';
  import type { formStoreType } from './types';

  function createFormStore() : formStoreType {
    const { subscribe, set, update } = writable({
      values: {},
      errors: {}
    });
  
    return {
      subscribe,
      set,
      update,
      required: (field) => update(store => required(field, store)),
      mustMatch: (field, fieldToMatch) => update(store => mustMatch(field, fieldToMatch, store)),
      minNumOptions: (field, min) => update(store => minNumOptions(field, min, store)),
      maxNumOptions: (field, max) => update(store => maxNumOptions(field, max, store))
    };
  }
  
  export const formStore = createFormStore();