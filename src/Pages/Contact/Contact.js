import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="subContact">
                    <div className='contactTitle'>
                        <h2>Create Cool Website</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, repudiandae!</p>
                    </div>
                    <div className='inputContact'>
                        <input className='input' type="email" name="email" id="" value='Enter Your Email' />
                        <button className='butn'>Subscribe</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;