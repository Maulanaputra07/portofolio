import ig from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import email from "../assets/icons/email.svg";
import linkedin from "../assets/icons/linkedin.svg";
import "../styles/Menu.css"

export default function Menu() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="group relative rounded-full menu-container cursor-pointer">
            <p className="text-white/50 mb-5 font-black text-3xl text-center group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
                . . . 
            </p>
        <div className="absolute p-10 gap-2 w-full h-full inset-0 flex items-center justify-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 text-lg font-semibold transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                <a href="https://www.instagram.com/mawl.o7/">
                    <img src={ig} width={50} alt="instagram" />
                </a>
            </div>
            <div className="flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                <a href="">
                    <img src={linkedin} width={50} alt="instagram" />
                </a>
            </div>
            <div className="flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-125 hover:-rotate-12 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                <img src={github} width={50} alt="github" />
            </div>
            <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                <img src={email} width={50} alt="email" />
            </div>
        </div>
      </div>
    </div>
  );
}
