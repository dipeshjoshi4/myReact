
import React from 'react';
import "./Hero.css"
// import Trigger from "../Assests/Trigger.avif"

const Hero = ({ heading, img, descreption, price }) => {
    return (
        <div className='Hero'>

            <div className='Product-list'>
                <div className="shoes">
                    <h2>{heading}</h2>
                    <img src={img} alt="Trigger" className="Trigger" />
                    <div className='shoes-Price'>
                        <div className='descreption'>{descreption}</div>
                        <div> {price} </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero