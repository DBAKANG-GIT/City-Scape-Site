import PropTypes from 'prop-types';

const ColumnWithImage = ({ imageUrl, altText }) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="h-full">
        <img src={imageUrl} alt={altText} />
      </div>
    </div>
  );
};

ColumnWithImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default ColumnWithImage;
