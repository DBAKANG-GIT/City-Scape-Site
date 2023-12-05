import React from 'react';
import Navbar from '../navbar/navbar';
import HeroImage from '../../assets/Images/Hero/Skyscape-Backdrop.jpg';
import Overlay from '../../atoms/overlay/overlay';
import Content from '../../atoms/heroContent/hero-content';

const Hero = () => {
  return (
    <>
      <header
        className="bg-no-repeat bg-center bg-cover h-screen relative text-white w-screen"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <Overlay />
        <Content />
      </header>
    </>
  );
};
export default Hero;
