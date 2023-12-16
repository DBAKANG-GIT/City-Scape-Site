import PropTypes from 'prop-types'; // ES6

const InputField = ({ type, id, placeholder }) => (
  <input
    className="w-full h-10 border border-black py-2 px-4 mb-4"
    type={type}
    id={id}
    placeholder={placeholder}
    required
  />
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

// Export the InputField class as the default export
export default InputField;
