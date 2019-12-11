import React, { Component } from 'react';

class Thanks extends Component {
    render() {
        return (
            <div id='thanksPopup' className='thanksPopup'>
                <h2>Thanks for adding a poll!</h2>
                <button onClick={this.props.resetForm} className='resetForm'>Add another?</button>
            </div>
        )
    }
}

export default Thanks;