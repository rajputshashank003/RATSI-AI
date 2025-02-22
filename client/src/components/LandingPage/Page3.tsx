import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Page3 = () => {
    const navigate = useNavigate();
    const [rotateVal, setRotate] = useState<number>(0);

    useEffect(() => {
        const handleMouseMove = (e : any) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const deltaX = mouseX - window.innerWidth / 2 ;
        const deltaY = mouseY - window.innerHeight / 2;

        const angle = Math.atan2(deltaY , deltaX) * (180 / Math.PI);
        setRotate(angle + 180);
        };

        window.addEventListener("mousemove" , handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    },[]);

    return (
        <div className="h-screen z-[99] w-full relative ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[12rem] w-[12rem]">
            <img src="/face_robo_for_eye_moment.svg" className="h-full absolute w-full" alt="" />
            <div style={{rotate : rotateVal + "deg"}} className="robo_eye absolute top-1/2 left-[25%] w-[30%] ">
                <div className="rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.7)] bg-white h-4 w-4"></div>
            </div>
            <div style={{rotate : rotateVal + "deg"}} className="robo_eye  absolute top-1/2 left-[45%] b w-[30%]">
                <div className="rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.7)] bg-white h-4 w-4"></div>
            </div>
            </div>
            <div className="absolute text-[2rem] bottom-[18%] max-sm:bottom-[28%] left-2 sm:left-[10%] text-white ">
            Join The
            </div>
            <div className="group">
            <div onClick={() => navigate("/tutors") }  className="absolute cursor-pointer group-hover:scale-110 duration-200 bottom-[12%] sm:bottom-[1.5%] left-2 sm:left-[10%]">
                <svg width="115" height="88" viewBox="0 0 115 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="path-anim path-anim-left" d="M2 2V68.7574C2 69.553 2.31607 70.3161 2.87868 70.8787L17.1213 85.1213C17.6839 85.6839 18.447 86 19.2426 86H62" stroke="url(#paint0_linear_2309_6569)" strokeWidth="2.5" strokeLinecap="round"></path>
                <path className="path-anim path-anim-right" d="M62 86H110C111.657 86 113 84.6569 113 83V15.2426C113 14.447 112.684 13.6839 112.121 13.1213L100.5 1.5" stroke="url(#paint1_linear_2309_6569)" strokeWidth="2.5" strokeLinecap="round"></path>
                <defs>
                <linearGradient id="paint0_linear_2309_6569" x1="1.5" y1="-1.3292e-06" x2="123" y2="86" gradientUnits="userSpaceOnUse">
                <stop stopColor="#26F4D0"></stop>
                <stop offset="0.634676" stopColor="#F8CF3E"></stop>
                </linearGradient>
                <linearGradient id="paint1_linear_2309_6569" x1="45" y1="81.5" x2="119" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0.436639" stopColor="#F8CF3E"></stop>
                <stop offset="1" stopColor="#FC6756"></stop>
                </linearGradient>
                </defs>
                </svg> 
            </div>
            <div onClick={() => navigate("/tutors") }  className="absolute cursor-pointer duration-200 bottom-[12%] sm:bottom-[1%] left-6 sm:left-[12%] text-[4rem] font-bold bg-gradient-to-r from-green-800 via-green-300 to-green-100  bg-clip-text text-transparent font-sans">
                AI
            </div>
            </div>
            <div className="group">
            <div onClick={() => navigate("/tutors") } className="absolute cursor-pointer group-hover:scale-110 duration-200 right-0 sm:left-[22%] -bottom-[2%] sm:bottom-[1%]">
                <svg className="max-sm:w-[70%]" width="421" height="96" viewBox="0 0 421 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="path-anim path-anim-2" d="M157.5 94H402.257C403.053 94 403.816 93.6839 404.379 93.1213L419 78.5" stroke="url(#paint0_linear_2309_6568)" strokeWidth="2.5" strokeLinecap="round"></path>
                <path className="path-anim path-anim-1" d="M2 77V19.2426C2 18.447 2.31607 17.6839 2.87868 17.1213L17.1213 2.87868C17.6839 2.31607 18.447 2 19.2426 2H417" stroke="url(#paint1_linear_2309_6568)" strokeWidth="2.5" strokeLinecap="round"></path>
                <defs>
                <linearGradient id="paint0_linear_2309_6568" x1="67.5" y1="101" x2="428.5" y2="75" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8CF3E"></stop>
                <stop offset="1" stopColor="#FC6756"></stop>
                <stop offset="1" stopColor="#FC6756"></stop>
                </linearGradient>
                <linearGradient id="paint1_linear_2309_6568" x1="416.5" y1="-9.50001" x2="25.7657" y2="-140.863" gradientUnits="userSpaceOnUse">
                <stop offset="0.236372" stopColor="#724CE8"></stop>
                <stop offset="1" stopColor="#26F4D0"></stop>
                </linearGradient>
                </defs>
                </svg>
            </div>
            <div onClick={() => navigate("/tutors") }  className="absolute cursor-pointer duration-200 left-[23%] max-sm:left-[2%] sm:bottom-[1%] bottom-[2%] text-[2rem] sm:text-[4rem] font-bold bg-gradient-to-r from-green-800 via-green-300 to-green-100 bg-clip-text text-transparent font-sans">
                REVOLUTION
            </div>
            </div>
        </div>
    )
}

export default Page3