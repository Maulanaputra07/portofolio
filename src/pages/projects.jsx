import sipren from "../assets/icons/siprenIcon.png"
import siprenMockUp from "../assets/siprenMockup.png"
import sjp from "../assets/icons/sjpIcon.png"
import sjpMockup from "../assets/sjpMockup.png"
import situlus from "../assets/icons/situlusIcon.png"
import situlusMockup from "../assets/situlusMockup.png"
import athena from "../assets/icons/athenaIcon.png"
import athenaMockUp from "../assets/athenaMockup.png"
import athenaChatbot from "../assets/icons/athenaChatbotIcon.png"
import athenaChatbotMockup from "../assets/athenaChatbotMockup.png"
import img1 from "../assets/img1.png";

export default function Projects(){
    return(
        <div className="h-full min-h-screen w-full py-10">
            <div className="w-full h-fit p-5 flex items-center !justify-center">
                <div className="py-5 relative w-fit select-none">
                    <p className="text-9xl font-staatliches" style={{ color: "transparent", WebkitTextStroke: "2px black" }}>
                    PROJECTS
                    </p>
                    <p className="font-staatliches absolute top-2 -left-2 z-20 font-black text-5xl -rotate-3">01</p>
                    <p className="font-staatliches absolute bottom-0 left-1/4 z-20 font-black text-5xl -rotate-3">02</p>
                    <p className="font-staatliches absolute top-0 left-1/2 z-20 font-black text-5xl rotate-3">03</p>
                    <p className="font-staatliches absolute bottom-0 right-1/4 z-20 font-black text-5xl -rotate-3">04</p>
                    <p className="font-staatliches absolute top-0 right-2 z-20 font-black text-5xl rotate-6">05</p>
                </div>
                <div className="flex">
                </div>
            </div>
            <div className="flex items-center justify-center gap-10 w-full h-fit px-32 mt-12">
                <div className="relative group w-[90rem] overflow-visible cursor-pointer hover:scale-105 transition-transform duration-300">
                    <img
                        src={siprenMockUp}
                        alt=""
                        className="absolute -top-20 left-0 w-[800px] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 -z-30 transform origin-center"
                    />
                    <div className="flex flex-col items-center justify-center p-5 relative w-full overflow-visible group-hover:translate-y-2 transition-all duration-500">
                        <img src={sipren} alt="SIPREN Logo" className="mb-2" width={100}/>
                        <p className="font-normal text-sm font-didact w-full absolute top-28 text-center px-4 py-2 opacity-0 group-hover:opacity-100 z-50">A web-based attendance and scheduling system for schools, where students can check in using RFID cards. The platform provides real-time attendance tracking, schedule management, and an admin dashboard for school staff.</p>
                        <p className="font-semibold text-2xl py-3 font-didact group-hover:translate-y-16 transition-all duration-300">SIPREN</p>
                    </div>
                </div>
                <div className="relative group w-[90rem] overflow-visible cursor-pointer hover:scale-105 transition-transform duration-300">
                    <img
                        src={sjpMockup}
                        alt=""
                        className="absolute -top-28 left-0 w-[800px] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 -z-10 transform origin-center"
                    />
                    <div className="flex flex-col items-center justify-center p-5 group-hover:translate-y-2 transition-all duration-500">
                        <img src={sjp} alt="SIPREN Logo" className="" width={100} />
                        <p className="font-normal text-sm font-didact w-full absolute top-28 text-center px-4 py-2 opacity-0 group-hover:opacity-100 z-50">A promotional and blogging website for a local artisan, showcasing handcrafted services and publishing updates, stories, and news about recent works and events.</p>
                        <p className="font-semibold text-2xl py-3 font-didact group-hover:translate-y-16 transition-all duration-300">Sinar Jaya Prasasti</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-10 w-full h-fit px-32 mt-12">
                <div className="relative group w-full overflow-visible cursor-pointer hover:scale-105 transition-transform duration-300">
                        <img
                            src={athenaMockUp}
                            alt=""
                            className="absolute -top-20 left-0 w-[400px] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 -z-10 transform origin-center"
                        />
                        <div className="flex flex-col items-center justify-center p-5 group-hover:translate-y-2 transition-all duration-500">
                            <img src={athena} alt="SIPREN Logo" className="" width={100} />
                            <p className="font-normal text-sm font-didact w-full absolute top-28 text-center px-4 py-2 opacity-0 group-hover:opacity-100 z-50">An online student admission system that allows applicants to register digitally, with an admin panel for managing applicant data and automatic email delivery of registration documents.</p>
                            <p className="font-semibold text-2xl py-3 font-didact group-hover:translate-y-16 transition-all duration-300">Athena</p>
                        </div>
                </div>
                <div className="relative group w-full overflow-visible cursor-pointer hover:scale-105 transition-transform duration-300">
                        <img
                            src={athenaChatbotMockup}
                            alt=""
                            className="absolute -top-20 left-10 w-[300px] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 -z-10 transform origin-center"
                        />
                        <div className="flex flex-col items-center justify-center p-5 group-hover:translate-y-2 transition-all duration-500">
                            <img src={athenaChatbot} alt="SIPREN Logo" className="" width={100} />
                            <p className="font-normal text-sm font-didact w-full absolute top-28 text-center px-4 py-2 opacity-0 group-hover:opacity-100 z-50">A WhatsApp-integrated chatbot designed to assist prospective students by providing real-time updates and information about the school.</p>
                            <p className="font-semibold text-2xl py-3 font-didact group-hover:translate-y-16 transition-all duration-300">Athena Chatbot</p>
                        </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-10 w-full h-fit px-32 mt-12">
                <div className="relative group w-full overflow-visible cursor-pointer hover:scale-105 transition-transform duration-300">
                    <img
                        src={situlusMockup}
                        alt=""
                        className="absolute -top-24 left-1/4 w-[400px] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 -z-10 transform origin-center"
                    />
                    <div className="flex flex-col items-center justify-center p-5 group-hover:translate-y-2 transition-all duration-500">
                        <img src={situlus} alt="SIPREN Logo" className="" width={100} />
                        <p className="font-normal text-sm font-didact w-full absolute top-28 text-center px-4 py-4 opacity-0 group-hover:opacity-100 z-50">A desktop application built to scan QR codes and record student attendance during a school graduation event in real-time.</p>
                        <p className="font-semibold text-2xl py-3 font-didact group-hover:translate-y-4 transition-all duration-300">SiTulus</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center mt-12 pb-12">
                <img src={img1} width={150} alt="" />
                <h1 className="font-caveat text-xl">Next content coming soon... waiting for the coffee to be ready.  ^_^</h1>
            </div>
        </div>
    )
}