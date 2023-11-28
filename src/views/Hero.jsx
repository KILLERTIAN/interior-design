import { useState } from "react";

// local imports
import heroImage from "../assets/hero-image.svg";
import spacialogo from "../assets/spacia-logo.png";
import spacialogo2 from "../assets/spacia.png";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div
      className="h-screen relative flex flex-col items-center z-[-2] " style={{
        background: `url(${heroImage})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',


      }}
    >
      {/* <div className="absolute w-full h-full inset-0 bg-white bg-opacity-10 backdrop-blur-sm z-[-1]"></div> */}
      <div className="relative w-[95vw] h-[10vh] max-w-[1490px] flex items-center justify-between mt-5  p-10 mx-5 px-10 rounded-full  inset-0 bg-black bg-opacity-30 backdrop-blur-md">
        <div className="flex flex-row items-center justify-center">
          <img src={spacialogo} alt="" className="h-[60px] w-[60px] mr-3" />
          <img src={spacialogo2} alt="" className="h-[60px] w-[140px]" />
        </div>

        {/* <div className="rounded-full  inset-0 bg-white bg-opacity-10 backdrop-blur-md"></div> */}

        <ul className="hidden md:flex items-center gap-10 lg:gap=[68px]">
          <NavLink to="services">Services</NavLink>
          <NavLink to="products">Shop</NavLink>
          <NavLink to="reference">Reference</NavLink>
          <NavLink to="care">Care</NavLink>
        </ul>
        <img src={cartIcon} alt="" className="hidden md:block cursor-pointer" />
        <HiMenuAlt3 size={30} className="block md:hidden cursor-pointer text-white " onClick={() => setShowMobileMenu((prev) => !prev)} />

        <div className={`block md:hidden w-full fixed ${!showMobileMenu ? "-top-[450px]" : "top-0"} left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl  py-12 rounded-b-xl`}>
          <AiOutlineClose size={25} className="absolute top-5 right-5 cursor-pointer" onClick={() => setShowMobileMenu(false)} />
          <ul className="pt-[60px] items-center flex flex-col gap-8" >
            <NavLink to="services" mobileMenu>Services</NavLink>
            <NavLink to="products" mobileMenu>Shop</NavLink>
            <NavLink to="reference" mobileMenu>Reference</NavLink>
            <NavLink to="care" mobileMenu>Care</NavLink>
          </ul>
        </div>
      </div>
      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="z-8 mt-[90px] text-center text-5xl font-{800} leading-tight xs:text-[64px] max-w-[1050px] text-orange 
        ">
          {heroTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" padding fullWidth>
        <h2 className="z-8 mt-6 text-center text-5xl xs:text-[54px] max-w-[1000px] text-white ">
          {heroSubtitle}
        </h2>
      </FadeIn>
      <FadeIn delay={0.2} direction="up" padding fullWidth bgndBlur>
        <div className="relative w-full xs:w-[460px] mt-11 " >
          <input type="text" placeholder="Search" className="rounded-full w-full pl-6 pr-[68px] py-4 bg-black outline-none text-white text-base xs:text-lg placeholder-white backdrop-blur-md bg-opacity-30" />
          <img src={searchIcon} alt="" className="absolute top-2/4 -translate-y-2/4 right-3 h-11 w-11 cursor-pointer" />
        </div>

      </FadeIn>
      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_FFF_100%]"></div>
    </div>

  );


}

export default Hero;
