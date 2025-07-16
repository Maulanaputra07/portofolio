import { motion } from "framer-motion";
import asset1 from "../assets/asset1.png";

export default function AboutMe() {
  return (
    <div className="bg-[#f7f7f7] text-[#2A2A2A] w-full h-screen">
      <div className="w-full h-[80vh] relative">
        <h1 className="text-2xl text-[#941b0c] font-bold mt-4 py-5 font-didact">About Me</h1>

        <div className="h-auto border border-black text-[#FAFAFA] text-center bg-[#BB2233] bg-opacity-90 select-none flex flex-col justify-center items-center py-16 relative overflow-hidden">
          <div>
            <p className="text-9xl font-caveat leading-tight">Maulana</p>
            <p className="font-playfair text-4xl pl-32 -mt-10 tracking-wide">Putra Pamungkas</p>
          </div>

          <div className="w-1/2 text-justify mt-2 leading-snug">
            <p>Hi! I'm Maulana, a passionate learner and aspiring developer. I enjoy creating clean, functional, and user-friendly interfaces, as well as exploring how technology can solve real-world problems. Currently, I work as a <span className="font-semibold">Fullstack Web Developer</span>, with a growing interest in <span className="font-semibold">Android development</span> and building impactful mobile experiences.</p>
          </div>

          <div className="absolute top-0 -right-12">
            <img src={asset1} alt="" />
          </div>

          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 800, bottom: 400 }}
            className="absolute top-5 left-5 -rotate-3"
          >
            <iframe
              className="rounded-lg shadow-md max-w-md w-full"
              src="https://open.spotify.com/embed/track/2FZIabCRMEWAYfN69Ijn1U?utm_source=generator&theme=0"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>

        <div className="py-12">
          <p className="font-caveat">!!!</p>
          <h1 className="font-caveat text-xl">Work in progress… waiting for the coffee to be ready.  ^_^</h1>
          <p className="font-caveat">!!!</p>
        </div>
      </div>
    </div>
  );
}
