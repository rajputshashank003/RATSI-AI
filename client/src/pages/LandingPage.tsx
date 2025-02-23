import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Page1 from "../components/LandingPage/Page1";
import Page2 from "../components/LandingPage/Page2";
import Page3 from "../components/LandingPage/Page3";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    }
  }, []);

  return (
    <div className="min-h-screen w-full relative" >
      <Page1/>
      <Page2/>
      <Page3/>
    </div>
  )
}

export default LandingPage