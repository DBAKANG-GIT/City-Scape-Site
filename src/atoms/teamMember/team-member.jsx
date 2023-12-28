import PropTypes from 'prop-types';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const TeamMember = ({ imageSrc, name, position, experience, linkedinUrl }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-5 h-full w-full">
      <a onClick={() => setOpen(true)}>
        <img
          src={imageSrc}
          alt={name}
          loading="lazy"
          className="rounded-[50%] w-full h-full border-secondary hover:border-coral hover:border-4 border-2 mb-5"
        />
      </a>
      <h4>
        {name}{' '}
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        )}
      </h4>
      <p>{position}</p>
      <Lightbox
        plugins={[Captions]}
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: imageSrc, title: name, description: experience }]}
        carousel={{ finite: true }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </div>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  linkedinUrl: PropTypes.string.isRequired,
};

export default TeamMember;
