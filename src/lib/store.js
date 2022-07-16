import { writable } from 'svelte/store';


/* form.update(form => form['confirm-email'] = 'griffinbrlw@gmail.com')
<input name='name' bind:value={$form.name}/>
<input name='email' bind:value={$form.email}/> */
export const formStore = writable({
    values: {
        first_name: '',
        last_name: '',
        birthDate: '',
        gender: '',
        team: '',
        income: 0,
        rating: 0,
        fruits: [], 
        email: ''

    },
    errors: {
        // first_name: {
        //     required: 
        // }, 
        // last_name: {
        //     required: 'Last name is a required field.'
        // },
        // birthDate: {
        //     required: 'Date of Birth is a required field', 
        //     invalidDate: 'Date of Birth entered is not a valid date.',
        //     dateRange: 'Date of Birth must be within valid range.'
        // },
        // gender: {
        //     required: 'Gender is a required field.'
        // },
        // team: {
        //     required: 'Team is a required field.'
        // }, 
        // income: {
        //     required: 'Income is a required field.'
        // },
        // rating: {
        //     required: 'Rating is a required field.'
        // },
        // fruits: {
        //     required: 'Fruits is a required field. Please check at least 1 fruit.',
        //     checkBox: 'Maximum fruits exceeded. Only up to 3 fruits may be checked.'
        // },
        // email: {
        //     required: 'E-mail address is required.', 
        //     validEmail: 'Please enter a valid e-mail address.'
        // }
    }});
