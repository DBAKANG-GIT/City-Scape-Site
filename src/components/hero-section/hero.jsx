import HeroImage from '../../assets/image/hero/skyscape-backdrop.jpg';
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
