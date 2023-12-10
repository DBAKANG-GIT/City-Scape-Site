// src/components/Layout.js
import Navbar from 'src/components/Navbar/navbar.jsx';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar
        navItems={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
          { name: 'Services', url: '/services' },
          { name: 'Work', url: '/work' },
          { name: 'Contact', url: '/contact' },
        ]}
      />
      <main>{children}</main>
      {/* <Footer></Footer> */}
      {/* Additional layout elements go here */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
