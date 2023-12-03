import React from 'react';
import Navbar from '../navbar/navbar';
import HeroImage from '../../assets/Images/Hero/Skyscape-Backdrop.jpg';
import Overlay from '../../atoms/overlay/overlay';
import Content from '../../atoms/heroContent/hero-content';

const Hero = () => {
  return (
    <>
      <Navbar
        navItems={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about-page' },
          { name: 'Services', url: '/services-page' },
          { name: 'Work', url: '/work-page' },
          { name: 'Contact', url: '/contact-page' },
        ]}
      />
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

// function Hero(props) {
//   const { title, description, buttonText } = props;

//   return (
//     <>
//       <div className="flex flex-col h-full items-center justify-center text-center px-5">
//         <h1>{title}</h1>
//         <p>{description}</p>
//         <a href="#about" className="btn">
//           <i className="fa-solid fa-circle-chevron-right"></i> {buttonText}
//         </a>
//       </div>
//     </>
//   );
// }

// // Export the landing page component
// export default Hero;

// display: flex;
// flex-direction: column;
// height: 100%; /* Of container hero*/
// align-items: center; /* Align vertically */
// justify-content: center; /* Align Horizontally */
// text-align: center;
// padding: 0 20px;
