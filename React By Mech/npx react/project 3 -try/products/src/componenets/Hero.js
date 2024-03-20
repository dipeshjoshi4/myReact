
import React from 'react';
import "./Hero.css"
import Trigger from "../Assests/Trigger.avif"

const Hero = () => {
    return (
        <div className='Hero'>

            <div className='Product-list'>
                <div className="shoes">
                    <h2>Trigger Shoes</h2>
                    <img src={Trigger} alt="Trigger" className="Trigger" />
                    <div className='shoes-Price'>
                        <div className='descreption'>Trigger Shoes For Men</div>
                        <div> $399 </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero