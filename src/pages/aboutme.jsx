import React, { useState } from "react";
import tilt from '../assets/tilt.svg';
// import CustomCursor from "../components/customcursor";
// import tilt2 from '../assets/tilt.svg';

function Aboutme(){
    // const [cursorColor, setCursorColor] = useState("rgba(255,0,0,1)");
    return(
        <div className="bg-black">
            {/* <CustomCursor color={cursorColor}/> */}
            <section className="bg-black h-52">
                <img src={tilt} alt="" className="w-full"/>
            {/* <img src={tilt2} alt="" className="w-full"/> */}
            </section>
            <div className="text-white">
                <h1 className="text-4xl font-semibold mt-4 py-5">My Project</h1>
                <div className="flex flex-wrap justify-center p-3 gap-2">
                    <div className="w-1/3 h-80 rounded bg-slate-200"></div>
                    <div className="w-1/3 h-80 rounded bg-slate-200"></div>
                    <div className="w-1/3 h-80 rounded bg-slate-200"></div>
                    <div className="w-1/3 h-80 rounded bg-slate-200"></div>
                    <div className="w-1/3 h-80 rounded bg-slate-200"></div>
                    <div className="w-1/3 h-80 rounded bg-slate-200"></div>
                </div>
            </div>
            {/* <h1>tes</h1> */}
        </div>
    )
}

export default Aboutme