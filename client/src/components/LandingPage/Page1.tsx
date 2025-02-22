import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useNavigate } from 'react-router-dom'
import { Robo_3d } from '../Robo_3d/Robo_3d'
import CameraController from './CameraController'

const Page1 = () => {
    const navigate = useNavigate();
  return (
    <div className="h-fit relative">
        <div className="absolute cursor-pointer duration-200 top-[5%] sm:top-[8%] w-full flex flex-col justify-center items-center sm:left-1/2 sm:-translate-x-1/2 text-[1rem] sm:text-[1.5rem] font-bold bg-gradient-to-t from-green-800 via-green-300 to-green-100 bg-clip-text text-transparent font-sans">
          <span className="text-[3rem] max-sm:text-center max-sm:px-2 sm:text-[4rem] ">
            Introducing Ratsi 
          </span>
          <span>
            The Future of DSA Learning is Here!
          </span>
        </div>
        <div className="group">
          <div onClick={() => navigate("/tutors") } className="absolute cursor-pointer group-hover:scale-110 duration-200 top-[60%] sm:top-[24%] max-sm:left-2 sm:left-[10%]">
            <svg className="max-sm:w-[96%]" width="421" height="96" viewBox="0 0 421 96" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div onClick={() => navigate("/tutors") }  className="absolute cursor-pointer duration-200 top-[60.5%] left-6 sm:top-[23.5%] sm:left-[12%] text-[3rem] sm:text-[4rem] font-bold bg-gradient-to-r from-green-800 via-green-300 to-green-100 bg-clip-text text-transparent font-sans">
            DSA TUTORS
          </div>
        </div>
        <div className="group">
          <div onClick={() => navigate("/tutors") }  className="absolute cursor-pointer group-hover:scale-110 duration-200 top-[65.5%] left-2 sm:top-[30%] sm:left-[10%]">
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
          <div onClick={() => navigate("/tutors") }  className="absolute cursor-pointer duration-200 top-[65%] left-6 sm:top-[29.5%] sm:left-[12%] text-[4rem] font-bold bg-gradient-to-r from-green-800 via-green-300 to-green-100  bg-clip-text text-transparent font-sans">
            AI
          </div>
        </div>
        <div  className="robo_3d_canv z-[9] pointer-events-none relative h-[250vh] par w-full ">
          <Canvas camera={{ position: [-4 , 1 ,63], fov: 30 }}
            gl={{ antialias: true, pixelRatio: Math.min(window.devicePixelRatio, 2) }}
            style={{ pointerEvents: 'none' }}
          >
            <ambientLight intensity={2} />
            <Environment preset="sunset" />
            <Robo_3d scale={0.016} />
            <CameraController />
            <directionalLight position={[10, 10, 10]} intensity={5} castShadow />
            <directionalLight position={[0, 150 , 10]} intensity={6} castShadow />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          </Canvas>
        </div>
      </div>
  )
}

export default Page1