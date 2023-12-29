import Footer from '../footer-section/footer';
import Navbar from '../navbar-section/navbar';
import PropTypes from 'prop-types';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Layout = ({ children, title }) => {
  useDocumentTitle(title);

  return (
    <div>
      <Navbar
        navItems={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
          { name: 'Services', url: '/services' },
          { name: 'Contact', url: '/contact' },
        ]}
      />
      <main>{children}</main>
      <Footer></Footer>
      {/* Additional layout elements go here */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
