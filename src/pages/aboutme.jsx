import React, { useState } from "react";
import tilt from '../assets/tilt.svg';
// import CustomCursor from "../components/customcursor";
// import tilt2 from '../assets/tilt.svg';

function Aboutme(){
    // const [cursorColor, setCursorColor] = useState("rgba(255,0,0,1)");
    return(
        <div className="h-screen bg-black">
            {/* <CustomCursor color={cursorColor}/> */}
            <section className="bg-black h-52">
                <img src={tilt} alt="" className="w-full"/>
            {/* <img src={tilt2} alt="" className="w-full"/> */}
            </section>
            {/* <h1>tes</h1> */}
        </div>
    )
}

export default Aboutme