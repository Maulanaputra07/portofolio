import NavbarSticky from './components/navbar';
import profile from './assets/profile2.png';
import backgroundImage from './assets/bg1.png'
import paperBackground from './assets/paper.jpg'
import Aboutme from './pages/aboutme';
import CustomCursor from './components/customcursor';
import {EnvelopeSimpleIcon, GithubLogoIcon, InstagramLogoIcon} from '@phosphor-icons/react'
import './App.css';
import { useState } from 'react';

function App() {
  const [cursorColor, setCursorColor] = useState("rgba(0,0,0,0.7)");

  const handleMouseEnterAboutMe = () => {
    setCursorColor("rgba(255, 255, 255, 0.7)");
  };

  const handleMouseLeaveAboutMe = () => {
    setCursorColor("rgba(0, 0, 0, 0.7)");
  };

  return (
    <div>
      <CustomCursor color={cursorColor}/>
      <div className='p-[2rem]'>
        <div className='absolute bg-transparent border-black border-2 w-[98%] h-[95%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
        <NavbarSticky/>
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <div className="relative rounded-full">
          <div 
            className="absolute inset-0 rounded-[25%] bg-black opacity-30" 
            style={{ backgroundImage: `url(${paperBackground})`, backgroundSize: 'contain', backgroundPosition: 'center' }}
          ></div>
          <div className="relative z-10 p-6">
            <span className="block mb-2 text-xs md:text-base text-black font-medium">
              Hi, Everyone!!
            </span>
            <h3 className="text-4xl md:text-6xl font-semibold">
              I am Maulana Putra Pamungkas
            </h3>
            <p className="text-base md:text-lg text-slate-700 my-4 md:my-2">
            I love exploring tech—building web, mobile, AI, and desktop apps that simply work.
            </p>
            <div className='flex gap-2 justify-center m-2'>
              <a href='https://github.com/Maulanaputra07' className="cursor-none border rounded-full border-black bg-white px-2 py-2 text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-full hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                <GithubLogoIcon size={24} />
              </a>
              <a href='https://github.com/Maulanaputra07' className="cursor-none border rounded-full border-black bg-white px-2 py-2 text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-full hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5]">
                <InstagramLogoIcon size={24} />
              </a>
              <a href='maulanaputra280807@gmail.com' className="cursor-none border rounded-full border-black bg-white px-2 py-2 text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-full hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                <EnvelopeSimpleIcon size={24}/>
              </a>
            </div>
            {/* <button className="cursor-none rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              Contact me
            </button> */}
          </div>
        </div>
          {/*  */}
          <div className='w-[30%] rounded-xl absolute right-28' style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'center'}}>
            {/* <img src={profile}  alt="" className='rounded-full' style={{
            }}/> */}
          </div>
          <div className="mt-16 relative bottom-[-25%] h-16 w-max">
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
          </div>
        </section>
      </div>
      <div onMouseEnter={handleMouseEnterAboutMe} onMouseLeave={handleMouseLeaveAboutMe}>
        <Aboutme/>
      </div>
    </div>
  );
}

export default App;
