// src/components/Layout.js
import React from 'react';
import Navbar from '../Navbar/navbar';

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

export default Layout;
