import PropTypes from 'prop-types';

const TextWithBackgroundImage = ({ rectangle, curveImage }) => (
  <div className="relative pb-80">
    <img src={rectangle} alt="Rectangle" className="w-full" />
    <div className="absolute top-0 left-0 p-5">
      <p className="text-[2.25rem] font-normal leading-[3rem] text-white">
        At Cityscape Health and Wellbeing, we are dedicated to enhancing the
        vitality and resilience of individuals and corporations alike. Our
        bespoke wellness programs seamlessly blend on-site personal training
        with invigorating corporate classes such as yoga and pilates, fostering
        a culture of health and balance in both personal and professional
        realms.
      </p>
    </div>
    <img
      src={curveImage}
      alt="Curve"
      className="absolute top-72 left-0 w-full"
    />
  </div>
);

TextWithBackgroundImage.propTypes = {
  rectangle: PropTypes.string.isRequired,
  curveImage: PropTypes.string.isRequired,
};

export default TextWithBackgroundImage;
