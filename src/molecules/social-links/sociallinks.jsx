// SocialIcons.js
import SocialLink from '../../atoms/socialLink/social-link';
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => (
  <div className="social">
    <SocialLink href="#" icon={faFacebook} />
    <SocialLink href="#" icon={faTwitter} />
    <SocialLink href="#" icon={faYoutube} />
    <SocialLink href="#" icon={faLinkedin} />
  </div>
);

export default SocialIcons;
