import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Content = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center px-5 text-white text-4xl">
      <h1 className="z-10 text-6xl">Welcome To CityScape</h1>
      <p className="z-10">lorem Ipsum</p>
      <a
        href="#about"
        className="cursor-pointer inline-block py-[10px] px-[30px] bg-secondary text-lg text-white z-10 rounded-md hover:opacity-90"
      >
        <FontAwesomeIcon icon={faCaretRight} /> Read More
      </a>
    </div>
  );
};

export default Content;
