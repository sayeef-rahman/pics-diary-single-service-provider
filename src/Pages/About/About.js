import React from 'react';
import sayeef from '../../images/sayeef.jpg'
import './About.css'

const About = () => {
    return (
        <div className='text-center'>
            <h4>About Myself</h4>
            <img className='profile-image' src={sayeef} alt="" />
            <h6 className='mt-3'><strong>Sayeef Rahman</strong></h6>
            <p><small>Social Media Marketing Specialist @ Digitarly</small></p>
        </div>
    );
};

export default About;