import React from 'react';

const Content = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center px-5 text-white text-4xl">
      <h1> Lorem ipsum dolor sit</h1>
      <p>lorem</p>
      <a href="#about" className="btn">
        <i className="fa-solid fa-circle-chevron-right"></i> Read More
      </a>
    </div>
  );
};

export default Content;
