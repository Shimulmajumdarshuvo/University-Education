import React from 'react';
import './Information.css';
import { MdOutgoingMail, MdAvTimer, MdPhoneCallback } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";




const Information = () => {
    return (
        <div>
            <div className="Information">
                <div>
                    <div className="info">

                        <div>
                            <label for="fname">Name</label> <br />
                            <input className='inputValue' type="text" name="name" id="" />
                        </div>

                        <div>
                            <label for="fname">Phone</label> <br />
                            <input className='inputValue' type="text" name="number" id="" />
                        </div>
                        <div>
                            <label for="fname">Email</label> <br />
                            <input className='inputValue' type="text" name="email" id="" />
                        </div>

                    </div>
                    <br />
                    <label for="fname">Message</label> <br />
                    <input className='inputSection' type="text" name="number" id="" />
                    <br />
                    <button className='submit'>Submit</button>
                </div>

                <div className="subInformation">

                    <h2>Contact Information</h2>

                    <div className='information'>
                        <span><ImLocation2></ImLocation2></span>
                        <p>Khulna,Dhaka,Bangladesh.</p>
                    </div>
                    <div className='information'>
                        <span><MdPhoneCallback></MdPhoneCallback></span>
                        <p> + 88 01745-900915</p>
                    </div>
                    <div className='information'>
                        <span><MdOutgoingMail></MdOutgoingMail></span>
                        <p> info@ruoudomain.com</p>
                    </div>
                    <div className='information'>
                        <span><MdAvTimer></MdAvTimer></span>
                        <p>Monday-Friday 8.00am - 5.00pm</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Information;