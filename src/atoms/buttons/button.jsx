import PropTypes from 'prop-types';

const Button = ({ value, type }) => (
  <input
    type={type}
    value={value}
    className="btn bg-black text-white w-full inline-block cursor-pointer border-none py-3 px-8 transition-all ease-in-out duration-500 hover:text-white hover:bg-secondary"
  />
);

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  value: 'Submit',
  type: 'button',
};

export default Button;
