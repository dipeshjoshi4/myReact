import React from "react";
import "./Hero.css"
import shoes from "../Assests/shoes.avif";


const Hero = () => {
    return (
 <div className="hero">       
            <div className="one">      
                
            <div className="shoesPic">
                <img src={shoes} alt="shoes" style={{ width: "350px" }}/>
                </div>
                
            <div className="shoesDetails">
                <p>FlexFocus Lite Unisex Running Shoes</p>
                <p>₹3,569</p>
            </div>
                
        </div>
</div>
    )
}

export default Hero;