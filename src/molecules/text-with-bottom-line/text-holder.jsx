import PropTypes from 'prop-types';

const TextHolder = ({ text1, text2 }) => {
  return (
    <div className="text-center w-full text-4xl lg:text-6xl leading-[3.5rem] lg:leading-[4.5rem]">
      <span className=" font-semibold ">
        {text1}
        <br />
      </span>
      <span className="text-secondary leading-10">{text2}</span>
    </div>
  );
};

TextHolder.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default TextHolder;
