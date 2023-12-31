import logo from '../../assets/image/logo/logo.svg';
import PropTypes from 'prop-types'; // ES6
import { NavLink } from 'react-router-dom';

// Define the Navbar component
function NavBar(props) {
  return (
    <div className="w-screen ">
      {/* <div className="bg-primary h-12 w-screen sm:bg-yellow-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-secondary"></div> */}
      <nav
        id="navbar"
        className="flex w-full flex-col items-center flex-wrap h-44 p-5 bg-silver justify-between md:gap-8 md:py-8 md:h-32  md:flex-row overflow-hidden relative border-b-4 border-secondary"
      >
        <h1 id="logo" className="pr-8 items-center self-center">
          <a href="/">
            <img src={logo} alt="City Scape Logo" className="w-20" />
          </a>
        </h1>
        <ul className="flex">
          {props.navItems.map((navItem) => (
            <NavLink
              key={navItem.name}
              to={navItem.url}
              className={({ isActive }) => {
                return (
                  `p-[10px] mx-1 lg:py-2 lg:px-5 lg:my-0 lg:mx-1 hover:border-b-2  hover:text-secondary ${
                    navItem.name === 'Home' ? 'hidden sm:inline' : ''
                  } ` + (isActive ? 'border-b-[#785230] border-b-2' : '')
                );
              }}
            >
              {navItem.name}
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Export the Navbar class as the default export
export default NavBar;
