import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// This is a React component that displays a background image and some text.
// The background image and the text size change based on the viewport width.
const TextWithBackgroundImage = ({
  desktopRectangle,
  mobileRectangle,
  desktopCurveImage,
  mobileCurveImage,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // This effect runs once when the component mounts and sets up an event listener
  // for the 'resize' event to update the viewport width when the viewport is resized.
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    // The event listener is removed when the component unmounts.
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative pb-40 md:pb-60 lg:pb-80">
      <img
        src={windowWidth > 768 ? desktopRectangle : mobileRectangle}
        alt="Background"
        className="w-full"
      />{' '}
      <div className="absolute top-0 left-0 p-5">
        <p
          className="sm:text-2xl lg:text-3xl
          font-normal leading-[3rem] text-white"
        >
          At Cityscape Health and Wellbeing, we are dedicated to enhancing the
          vitality and resilience of individuals and corporations alike. Our
          bespoke wellness programs seamlessly blend on-site personal training
          with invigorating corporate classes such as yoga and pilates,
          fostering a culture of health and balance in both personal and
          professional realms.
        </p>
      </div>
      <img
        src={windowWidth > 768 ? desktopCurveImage : mobileCurveImage}
        alt="Curve"
        className="absolute top-[34rem] md:top-48 lg:top-56 left-0 w-full"
      />
    </div>
  );
};

TextWithBackgroundImage.propTypes = {
  desktopRectangle: PropTypes.string.isRequired,
  mobileRectangle: PropTypes.string.isRequired,
  desktopCurveImage: PropTypes.string.isRequired,
  mobileCurveImage: PropTypes.string.isRequired,
};

export default TextWithBackgroundImage;
