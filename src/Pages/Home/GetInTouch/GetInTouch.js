import React from 'react';
import './GetInTouch.css'

const GetInTouch = () => {
    return (
        <div className='get-in-touch-container'>
            <h2 className='text-center my-3'>Get In Touch</h2>
            <textarea name="comment" id="comment" cols="20" rows="10" placeholder='Please Share your contact-info with message'></textarea>
            <div className='btn-div'>
                <button className='submit-btn'>SUBMIT</button>
            </div>
        </div>
    );
};

export default GetInTouch;