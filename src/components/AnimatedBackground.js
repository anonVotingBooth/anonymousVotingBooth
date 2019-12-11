import React, { Component } from 'react';
import graphic1 from './../assets/backgroundImage1.svg';
import graphic2 from './../assets/backgroundImage2.svg';

class AnimatedBackground extends Component {
    render() {
        return (
            <div>
                <div className='animatedBackground'>
                    <img id='imageOne' className='animatedImage' alt='floating empty poll graphic' src={graphic1}></img>
                    <img id='imageTwo' className='animatedImage' alt='floating empty poll graphic' src={graphic2}></img>
                    <img id='imageThree' className='animatedImage' alt='floating empty poll graphic' src={graphic1}></img>
                    <img id='imageFour' className='animatedImage' alt='floating empty poll graphic' src={graphic2}></img>
                    <img id='imageFive' className='animatedImage' alt='floating empty poll graphic' src={graphic1}></img>
                    <img id='imageSix' className='animatedImage' alt='floating empty poll graphic' src={graphic2}></img>
                </div>
                <div className='animatedBackground'>
                    <img id='imageSeven' className='animatedImage2' alt='floating empty poll graphic' src={graphic1}></img>
                    <img id='imageEight' className='animatedImage2' alt='floating empty poll graphic' src={graphic2}></img>
                    <img id='imageNine' className='animatedImage2' alt='floating empty poll graphic' src={graphic1}></img>
                    <img id='imageTen' className='animatedImage2' alt='floating empty poll graphic' src={graphic2}></img>
                    <img id='imageEleven' className='animatedImage2' alt='floating empty poll graphic' src={graphic1}></img>
                    <img id='imageTwelve' className='animatedImage2' alt='floating empty poll graphic' src={graphic2}></img>
                </div>
                <div className='animatedBackground'>
                    <img id='imageThirteen' className='animatedImage3' alt='floating empty poll graphic' src={graphic1}></img>
                    <img id='imageFourteen' className='animatedImage3' alt='floating empty poll graphic' src={graphic2}></img>
                    <img id='imageFifteen' className='animatedImage3' alt='floating empty poll graphic' src={graphic1}></img>
                    <img id='imageSixteen' className='animatedImage3' alt='floating empty poll graphic' src={graphic2}></img>
                    <img id='imageSeventeen' className='animatedImage3' alt='floating empty poll graphic' src={graphic1}></img>
                    <img id='imageEighteen' className='animatedImage3' alt='floating empty poll graphic' src={graphic2}></img>
                </div>
            </div>
        )
    }
}

export default AnimatedBackground;