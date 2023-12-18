import PropTypes from 'prop-types';

const ContactItem = ({ href, icon, title, children, color }) => (
  <div>
    <a href={href} style={{ color }} target="_blank" rel="noopener noreferrer">
      {icon}
      <h3 style={{ color }}>{title}</h3>
      <p style={{ color, whiteSpace: 'pre-wrap' }}>{children}</p>
    </a>
  </div>
);

ContactItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

ContactItem.defaultProps = {
  color: '#fff', // default color
};

export default ContactItem;
