import React, { Component } from 'react';
import SubmitButton from './SubmitButton';

class SignUp extends Component {
    render() {
        return (
            <form className='signUp' action="">
                <h2>Sign Up</h2>
                <label htmlFor='email'>Enter email</label>
                <input type='email' id='email' required/>
                <label htmlFor='password'>Enter password</label>
                <input type='password' id='password' minLength={6} required />
                <SubmitButton label='Sign up' />
            </form>
        );
    }
}

export default SignUp;