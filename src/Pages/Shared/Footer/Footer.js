import React from 'react';
import './Footer.css'
const Footer = () => {
    let year = new Date().getFullYear();
    console.log(year);
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div>
                    <h2>Who We Are</h2>
                    <p>You’ve worked very hard planning for your “Big Day”. You almost want everything to go flawless. There will be so much happening that day. The last thing you should worry about if everything is being documented properly. That’s why we recommend you full day coverage package – one less thing for you to worry about. We will be with you from the very beginning of your day till the end. That means, you just enjoy to the fullest and look fabulous.</p>
                </div>
                <div>
                    <h2>Contact With Us</h2>
                    <p>Address: House 08, Road 08, Block D, Mirpur 2, Dhaka 1216</p>
                    <p>Phone: +880171200000</p>
                    <p>Email: support@pics-diary.com</p>
                    <p>Office Schedule: SAT - THUS (10 AM - 7 PM)</p>
                </div>
            </div>
            <p className='text-center pb-2'>Copyright © {year} Pics Diary</p>
        </div>
    );
};

export default Footer;