import React, { Component } from 'react';
import SubmitButton from './SubmitButton';

class SignInPage extends Component {
    render() {
        return (
            <div className='signIn'>
                <form action=''>
                    <h2>Sign In</h2>
                    <label htmlFor='email'>Enter email</label>
                    <input type='email' id='email' required />
                    <label htmlFor='password'>Enter password</label>
                    <input type='password' id='password' required/>
                    <SubmitButton label='Sign in' />
                </form>
            </div>
        );
    }
}

export default SignInPage;