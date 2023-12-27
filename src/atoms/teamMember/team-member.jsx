import PropTypes from 'prop-types';

const TeamMember = ({ imageSrc, name, position }) => (
  <div className="p-5 h-full w-full">
    <a href={imageSrc} data-lightbox="image-1" data-title={name}>
      <img
        src={imageSrc}
        alt={name}
        className="rounded-[50%] w-full h-full border-secondary border-2"
      />
    </a>
    <h4>{name}</h4>
    <p>{position}</p>
  </div>
);

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default TeamMember;
