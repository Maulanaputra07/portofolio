import NavbarSticky from './components/navbar';
import CustomCursor from './components/customcursor';
import './App.css';
import { useState } from 'react';
import Home from './pages/home';
import Aboutme from './pages/aboutme';
import Menu from './components/menu';
import Projects from './pages/projects';


function App() {
  const [cursorColor, setCursorColor] = useState("rgba(42, 42, 42,0.7)");
    
    const handleMouseEnterAboutMe = () => {
        setCursorColor("rgba(255, 255, 255, 0.7)");
    };
    
    const handleMouseLeaveAboutMe = () => {
        setCursorColor("rgba(0, 0, 0, 0.7)");
    };

  return(
    <div  className='bg-[#f7f7f7]'>
      <div className="hidden md:block">
        <CustomCursor color={cursorColor}/>
      </div>
      <Menu />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <Aboutme />
        </section>

        <section>
          <Projects/>
        </section>
      </main>
    </div>
  )
}

export default App;
