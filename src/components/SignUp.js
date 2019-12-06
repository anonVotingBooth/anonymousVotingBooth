import React, { Component } from 'react';
import SubmitButton from './SubmitButton';
import firebase from 'firebase';

class SignUp extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         email: '',
    //         password: '',
    //         name: '',
    //         signedUp: false
    //     }
    // }

    // createUser = (event) => {
    //     event.preventDefault();

    //     const functionToCallAlert = this.props.signUpAlert;
    //     const nickname = this.state.name;
    //     const nicknameFirstFiveLetters = nickname.toLowerCase().substring(0, 5);

    //     if (nicknameFirstFiveLetters === 'guest') {
           
    //         functionToCallAlert();
            
    //     } else {
            
    //         const databaseRef = firebase.database().ref();

    //         databaseRef.once('value').then( (snapshot) => {
                
    //             const databaseData = snapshot.val()
    //             const arrayPromises = []
    //             for (let user in databaseData) {
    //                 if (user !== 'generalConfig') {
    
    //                     const userRef = firebase.database().ref(`${user}/settings/nickname`);
    //                     arrayPromises.push(userRef.once('value'));
    //                 }
    //             }

    //             Promise.all(arrayPromises).then( (values) => {
    //                 const existingNicknames = values.map( (item) => {
    //                     return item.val()
    //                 });

    //                 if (existingNicknames.includes(nickname)) {

    //                     functionToCallAlert();
    //                 } else {
    //                     firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then( (result) => {
                            
    //                         const data = {
    //                             'settings': {
    //                                 'nickname': this.state.name,
    //                                 'email': this.state.email
    //                             }
    //                         }
                
    //                         firebase.database().ref(`${result.user.uid}`).update(data);
                
    //                         result.user.sendEmailVerification().then(function () {
                
    //                         })
            
    //                         result.user.updateProfile({
    //                             displayName: this.state.name
    //                         })
    //                     }).catch( () => {
    //                         functionToCallAlert();
    //                     })
    //                 }
    //             })
    
    //         })
    //     }
    // }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     })
    // }

    render() {
        return (
            <form className='signUp' action="">
                <h2>Sign Up</h2>
                <label htmlFor='email'>Enter email</label>
                <input type='email' id='email' onChange={this.handleChange} value={this.state.email} required/>
                <label htmlFor='password'>Enter password</label>
                <input type='password' id='password' minLength={6} onChange={this.handleChange} value={this.state.password} required />
                <SubmitButton label='Sign up' />
            </form>
        );
    }
}

export default SignUp;