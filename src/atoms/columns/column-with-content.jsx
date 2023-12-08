import React from 'react';

const ColumnWithContent = ({ title, subTitle, content, btnText }) => {
  return (
    /* Flex Columns */
    <div className="flex flex-col basis-full flex-1">
      <div className="h-full flex flex-col items-start justify-center p-8 bg-secondary text-white">
        <h4 className="mb-3">{title}</h4>
        <h2 className="text-4xl font-thin">{subTitle}</h2>
        <p className="my-5">{content}</p>
        <a
          href="#"
          className="cursor-pointer inline-block py-2 px-8 text-white bg-secondary rounded-md bg-transparent border border-white"
        >
          <i className="fa fa-circle-chevron-right"></i> {btnText}
        </a>
      </div>
    </div>
  );
};

export default ColumnWithContent;
