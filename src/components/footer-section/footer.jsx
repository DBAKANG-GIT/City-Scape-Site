// Footer.js
import SocialIcons from '../../molecules/social-links/sociallinks';
import Copyright from '../../atoms/copyright/copyright';

const Footer = () => (
  <footer className="flex flex-col justify-center items-center text-center h-40 bg-secondary">
    <SocialIcons />
    <Copyright />
  </footer>
);

export default Footer;
