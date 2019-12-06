import React, { Component } from 'react';
import SubmitButton from './SubmitButton';

class SignUp extends Component {
    render() {
        return (
            <form className='signUp' action="">
                <h2>Sign Up</h2>
                <label htmlFor='email'>Enter email</label>
                <input type='email' id='email' required />
                <label htmlFor='password'>Enter password</label>
                <input type='password' id='password' minLength={6} required />
                <SubmitButton label='Sign up' />
            </form>
        );
    }
}

export default SignUp;













// import React, { Component } from 'react';
// import SubmitButton from './SubmitButton';
// import firebase from 'firebase';

// class SignUp extends Component {

//     // import React, { Component } from 'react';
// import SubmitButton from './SubmitButton';

// class SignUp extends Component {
//     render() {
//         return (
//             <form className='signUp' action="">
//                 <h2>Sign Up</h2>
//                 <label htmlFor='email'>Enter email</label>
//                 <input type='email' id='email' required/>
//                 <label htmlFor='password'>Enter password</label>
//                 <input type='password' id='password' minLength={6} required />
//                 <SubmitButton label='Sign up' />
//             </form>
//         );
//     }
// }

// export default SignUp;

//     render() {
//         return (
//             <form className='signUp' action="">
//                 <h2>Sign Up</h2>
//                 <label htmlFor='email'>Enter email</label>
//                 <input type='email' id='email' onChange={this.handleChange} value={this.state.email} required/>
//                 <label htmlFor='password'>Enter password</label>
//                 <input type='password' id='password' minLength={6} onChange={this.handleChange} value={this.state.password} required />
//                 <SubmitButton label='Sign up' />
//             </form>
//         );
//     }
// }

// export default SignUp;