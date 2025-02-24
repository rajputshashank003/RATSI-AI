import LandingVideoAnimation from '../LandingVideoAnimation.jsx/LandingVideoAnimation'
import UnderlineSvg from '../UnderLineSvg'

const Page2 = () => {
  return (
    <div  className="h-[300vh] relative w-full ">
        <div className="absolute cursor-pointer duration-200 top-[5%] sm:top-[8%] w-fit flex flex-col justify-center items-center left-[5%] text-[3rem] sm:text-[4rem] font-bold bg-gradient-to-t from-green-800 via-green-300 to-green-100 bg-clip-text text-transparent font-sans">
          FastLearning
          <UnderlineSvg/>
        </div>
        <div className="absolute cursor-pointer duration-200 top-[25%] sm:top-[18%] z-[9] w-fit flex flex-col justify-center items-center right-[5%] text-[3rem] sm:text-[4rem] font-bold bg-gradient-to-t from-green-800 via-green-300 to-green-100 bg-clip-text text-transparent font-sans">
          InstantSolve
          <UnderlineSvg/>
        </div>
        <div className="absolute cursor-pointer duration-200 top-[45%] sm:top-[38%] w-fit flex flex-col justify-center items-center left-[5%] text-[3rem] sm:text-[4rem] font-bold bg-gradient-to-t from-green-800 via-green-300 to-green-100 bg-clip-text text-transparent font-sans">
          QuickLogic
          <UnderlineSvg/>
        </div>
        <div className="absolute cursor-pointer duration-200 top-[65%] sm:top-[58%] z-[9] w-fit flex flex-col justify-center items-center right-[5%] text-[3rem] sm:text-[4rem] font-bold bg-gradient-to-t from-green-800 via-green-300 to-green-100 bg-clip-text text-transparent font-sans">
          RapidDebug
          <UnderlineSvg/>
        </div>
        <div className="h-[20rem] w-[25rem]  sm:h-[30rem] max-sm:w-full sticky top-[33%] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 ">
          <LandingVideoAnimation/>
        </div>
      </div>
  )
}

export default Page2