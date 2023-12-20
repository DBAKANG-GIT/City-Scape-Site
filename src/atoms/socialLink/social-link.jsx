import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const SocialLink = ({ href, icon }) => (
  <a href={href} className="text-white mr-8 hover:text-black">
    <FontAwesomeIcon icon={icon} size="3x" />
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SocialLink;
