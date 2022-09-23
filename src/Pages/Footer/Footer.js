import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='mainFooter'>
                <div>
                    <h2>University</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, beatae consequatur? Eaque perspiciatis aliquid commodi aut libero mollitia.</p>
                </div>
                <div className='footerLink'>
                    <h3>Quick Link</h3>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Course</p>
                    <p>Pages</p>
                </div>

                <div>
                    <h3>Blog</h3>
                    <p>University Content</p>
                    <p>University Content</p>
                    <p>University Content</p>
                </div>
                <div>
                    <h3>Contact Information</h3>
                    <p>Dhaka ,Bangladesh</p>
                    <p>+2 9873 4353535534</p>
                    <p>education.bd@gmail.com</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;