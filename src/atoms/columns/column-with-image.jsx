import React from 'react';

const ColumnWithImage = ({ imageUrl, altText }) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="h-full">
        <img src={imageUrl} alt={altText} />
      </div>
    </div>
  );
};

export default ColumnWithImage;
