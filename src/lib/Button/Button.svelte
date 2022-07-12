<script>
  import { createEventDispatcher } from 'svelte';

  export let primary = false;
  export let size = 'medium';
  export let label = '';

  const dispatch = createEventDispatcher();
   /**
   * Button click handler
   */
   function onClick(event) {
    dispatch('click', event);
  }
</script>

<button
  type="button"
  class={['sveltio-button', `sveltio-button--${size}`,
   `sveltio-button--${primary?'primary':'secondary'}`].join(' ')
   }
  on:click={onClick}>
  {label}
</button>