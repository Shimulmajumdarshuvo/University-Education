import React from 'react';
import './Service.css';
import { GiPowerGenerator, GiAbstract044, GiAbstract121, GiBackpack } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";


const Service = () => {
    return (
        <div >
            <div className='serviceTitle'>
                <h1>School Services</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quis placeat saepe.</p>
            </div>
            <div className='service'>
                <div className='subService'>
                    <span><GiPowerGenerator></GiPowerGenerator></span>
                    <h4>Knowledge is Power</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, deserunt.</p>
                    <button className='ServiceBtn'>Read More <AiOutlineArrowRight></AiOutlineArrowRight></button>

                </div>
                <div className='subService'>
                    <span><GiAbstract121></GiAbstract121></span>
                    <h4>Knowledge is Power</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, deserunt.</p>
                    <button className='ServiceBtn'>Read More <AiOutlineArrowRight></AiOutlineArrowRight></button>

                </div>
                <div className='subService'>
                    <span><GiAbstract044></GiAbstract044></span>
                    <h4>Knowledge is Power</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, deserunt.</p>
                    <button className='ServiceBtn'>Read More <AiOutlineArrowRight></AiOutlineArrowRight></button>

                </div>
                <div className='subService'>
                    <span><GiBackpack></GiBackpack></span>
                    <h4>Knowledge is Power</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, deserunt.</p>
                    <button className='ServiceBtn'>Read More <AiOutlineArrowRight></AiOutlineArrowRight></button>

                </div>

            </div>

        </div>
    );
};

export default Service;