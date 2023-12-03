import { faLetterboxd } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Define the Navbar component
function NavBar(props) {
  return (
    <>
      <div className="bg-primary h-12 w-screen sm:bg-yellow-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-secondary"></div>
      {/* // Navbar */}
      <nav
        id="navbar"
        className="flex flex-col items-center flex-wrap h-28 p-5 bg-silver justify-between md:gap-8 md:py-8 w-full md:h-[70px]fixed md:flex-row"
      >
        {/* Logo */}
        {/* Redirects */}
        <h1 id="logo" className="text-4xl">
          <span className="text-primary">
            <FontAwesomeIcon icon={faLetterboxd} /> City
          </span>
          Scape
        </h1>
        <ul className="flex">
          {props.navItems.map((navItem, index) => (
            <li key={index}>
              <a
                href={navItem.url}
                className="p-[10px] mx-1 lg:py-2 lg:px-5 lg:my-0 lg:mx-1 hover:border-b-2 hover:border-[#A26028] hover:border-solid"
              >
                {navItem.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

// Export the Navbar class as the default export
export default NavBar;
