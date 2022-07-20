/* import { writable } from 'svelte/store';

export const formStore = writable({
    values: {},
    errors: {}
  });
 */
  import { writable } from 'svelte/store';
  import { required } from './validators';

  function createFormStore() {
    const { subscribe, set, update } = writable({
      values: {},
      errors: {}
    });
  
    return {
      subscribe,
      set,
      update,
      required: (field:any) => update(store => required(field, store))
    };
  }
  
  export const formStore = createFormStore();