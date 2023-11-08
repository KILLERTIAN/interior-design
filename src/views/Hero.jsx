import react, { useState } from "react";

// local imports
import heroImage from "../assets/hero-image.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {
  return <div
    className="h-screen relative flex flex-col items-center" style={{
      background: `url(${heroImage})`,
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  >
    <div classname="relative w-full max-w-[1490px] flex items-center justify-between pt-10 mx-auto px-10">
      <img src={logo} alt="" />
      <ul classname="hidden md:flex items-center gap-10 lg:gap=[68px]">
        <NavLink to="services">Services</NavLink>
        <NavLink to="products">Shop</NavLink>
        <NavLink to="reference">Reference</NavLink>
        <NavLink to="care">Care</NavLink>

      </ul>

    </div>

  </div >;

}

export default Hero;
