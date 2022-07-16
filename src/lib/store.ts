import { writable } from 'svelte/store';


/* form.update(form => form['confirm-email'] = 'griffinbrlw@gmail.com')
<input name='name' bind:value={$form.name}/>
<input name='email' bind:value={$form.email}/> */
export const form = writable({});
