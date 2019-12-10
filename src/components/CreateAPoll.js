import React, { Component } from 'react';
import firebase from './firebase';
import Swal from 'sweetalert2';
import Thanks from './Thanks';

class CreateAPoll extends Component {
  constructor(){
    super();
    this.state = {
      question: '',
      answer1: '',
      answer2: '',
      thanksPopup: null
    }
  }

  componentDidMount() {
    // Connecting app to firebase
    const dbRef = firebase.database().ref();
    // Storing firebase into variable for use
    dbRef.on('value', (response) => {
      const poll = response.val();
      const newPoll = []
        for ( let key in poll ) {
          const eachPoll = {
            pollID: key,
            pollName: poll[key]
          }
        newPoll.push(eachPoll)
        }
        // Converting the object into an array and storing into state
        this.setState({
          pollList: newPoll
        });
    });
  }

  // Binding the input, and setting new values in state
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  // On submitting a poll, grab user's inputs from the form, add them to firebase
  handleSubmit = (e) => {
    e.preventDefault();  
    const pollToAdd = {
      question: this.state.question,
      answer1: this.state.answer1,
      answer2: this.state.answer2,
      votes1: 0,
      votes2: 0,
      alreadyVoted: false
    };
    const publicPollsRef = firebase.database().ref('/publicPolls');
    if (this.state.answer1 === this.state.answer2) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Are you trying to swing the polls? Your answers cannot be the same!!',
      })
    } else if (pollToAdd.question !== '') {
      publicPollsRef.push(pollToAdd);
      this.setState({
        question: '',
        answer1: '',
        answer2: '',
        thanksPopup: 'showThankYou',
      });
    }
  }
  // resets form to add more and sets thanks state to null
  resetForm = (e) => {
    this.setState ({
        thanksPopup: null,
    })
  }
  render() {
    return (
      <div className='wrapper'>
        {this.state.thanksPopup !== 'showThankYou' ? 
        <form className='createPoll' id='createPoll' onSubmit={this.handleSubmit}>
          <h2>Add your poll below</h2>
          <label htmlFor='question'></label>
          <input id='question' maxlength='120' placeholder='Add your question' type='text' onChange={this.handleChange} value={this.state.question} autoComplete='off' required></input>
          <label htmlFor='answer1'></label>
          <input id='answer1' maxlength='20' placeholder='Answer Option One' type='text' onChange={this.handleChange}value={this.state.answer1} autoComplete='off' required></input>
          <label htmlFor='answer2'></label>
          <input id='answer2' maxlength='20' placeholder='Answer Option Two' type='text' onChange={this.handleChange}value={this.state.answer2} autoComplete='off' required></input>
          <button className='addPollButton' type='submit'>Add Poll!</button>
        </form> : <Thanks resetForm={this.resetForm}/>
        }
      </div>
    );
  };
};

export default CreateAPoll;