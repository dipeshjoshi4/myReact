import React from "react";
import "./Hero.css";


const Hero = ({title,price,img}) => {
    return (
 <div className="hero">       
            <div className="one">      
                <div className="shoesPic">
                    <img src={img} alt="shoes" style={{ width: "350px" }}/>
                </div>   
                 <div className="shoesDetails">
                    <p>{title}</p>
                    <p>{price}</p>
                </div> 
            </div>
 </div>
    )
}

export default Hero;