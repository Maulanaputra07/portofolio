import {EnvelopeSimpleIcon, GithubLogoIcon, InstagramLogoIcon} from '@phosphor-icons/react'
import profile from '../assets/profile2.png';
import backgroundImage from '../assets/bg1.png'
import paperBackground from '../assets/paper.jpg'
import { useState } from 'react';
import TextPressure from '../bits/TextAnimations/TextPressure/TextPressure';


export default function Home(){
    const [cursorColor, setCursorColor] = useState("rgba(0,0,0,0.7)");
    
    const handleMouseEnterAboutMe = () => {
        setCursorColor("rgba(255, 255, 255, 0.7)");
    };
    
    const handleMouseLeaveAboutMe = () => {
        setCursorColor("rgba(0, 0, 0, 0.7)");
    };
    
    return(
        <div className='p-[2rem] w-full h-screen bg-[#f7f7f7]'>
            <div className='absolute bg-transparent border-black/30 rounded-lg border-2 w-[98%] h-[95%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
        
            <section className="w-full relative px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-max mx-auto">
                <div className="relative rounded-full w-full">
                    <div 
                        className="absolute inset-0 rounded-sm bg-black opacity-30" 
                        style={{ backgroundImage: `url(${paperBackground})`, backgroundSize: 'contain', backgroundPosition: 'center' }}
                    ></div>
                    <div className="relative z-10 p-6 w-full select-none">
                        <div className='font-caveat text-4xl sm:text-6xl -rotate-6 text-gray-500'>
                            <p>Welcome to my corner</p>
                            <p>on internet :)</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className='w-[30%] rounded-xl absolute right-28' style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'center'}}>
                    {/* <img src={profile}  alt="" className='rounded-full' style={{
                    }}/> */}
                </div>

                <div className='select-none relative -rotate-3 -top-10 sm:-right-52 -right-10 bg-[#FEF49C] max-w-max p-5 sm:text-lg text-sm rounded-lg border transition-all duration-300 ease-in-out hover:shadow-xl hover:-rotate-6 hover:scale-105 hover:-translate-y-1'>
                    <p className='font-semibold'>to do:</p>
                    <ul className='text-start'>
                        <li className='line-through'>Wake up</li>
                        <li>land my dream programming job</li>
                        <li>Drink coffe</li>
                        <li>watch a good movie</li>
                        <li>Build that banger spotify playlist</li>
                        <li>Remember to touch grass today</li>
                        <li>Write code that actually works</li>
                        <li>Finish grad collage without losing my mind</li>
                    </ul>
                </div>

                {/* <p className='text-8xl font-brink -rotate-6 text-[#30588C] select-none'>Scroll Down!!</p> */}

                {/* <div className="mt-16 relative bottom-[-25%] h-16 w-max">
                    <h3
                    className="pt-5 text-4xl md:text-8xl font-normal font-righteous text-white"
                    style={{
                        WebkitTextStroke: "2px rgba(0, 0, 0, 1)",
                        textShadow: "5px 5px 0px rgba(0, 0, 0, 0.5)"
                    }}
                    >
                    PORTOFOLIO
                    </h3>
                    <h3
                    className="absolute top-[100%] text-4xl md:text-8xl font-normal font-righteous" // Posisi menumpuk
                    style={{
                        textShadow: "5px 5px 0px rgba(0, 0, 0, 0.5)",
                    }}
                    >
                    PORTOFOLIO
                    </h3>
                </div> */}
                <div className="absolute sm:bottom-0 bottom-12 h-5 right-5 w-max">
                    <div style={{position: 'relative', height: '300px'}}>
                        <TextPressure
                            text="Portofolio."
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={true}
                            textColor="#000000"
                            strokeColor="#ff0000"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}