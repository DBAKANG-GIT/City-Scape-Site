import logo from '../../assets/Images/Logo/Logo.png';

// Define the Navbar component
function NavBar(props) {
  return (
    <>
      <div className="bg-primary h-12 w-screen sm:bg-yellow-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-secondary"></div>
      {/* // Navbar */}
      <nav
        id="navbar"
        className="flex flex-col flex-wrap h-28 p-5 items-center lg:flex-row justify-between gap-8 lg:py-8 px-5 w-full lg:h-[70px] fixedbg-silver"
      >
        {/* Logo */}
        <h1 id="logo">
          <img src={logo} alt="CityScape" className="h-20 w-auto" />
        </h1>
        {/* Redirects */}
        <ul className="flex">
          {props.navItems.map((navItem, index) => (
            <li key={index}>
              <a
                href={navItem.url}
                className="py-2 px-5 my-0 mx-1 hover:border-b-2 hover:border-[#A26028] hover:border-solid"
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
