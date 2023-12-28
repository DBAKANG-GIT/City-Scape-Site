// IconsSection.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRunning,
  faChalkboardTeacher,
  faDumbbell,
  faBalanceScale,
} from '@fortawesome/free-solid-svg-icons';

const IconsSection = () => {
  return (
    <section id="about" className="p-7 bg-white text-grey">
      <div className="flex flex-col lg:flex-row text-center justify-center h-full">
        <div className="p-5">
          <FontAwesomeIcon
            icon={faRunning}
            size="2x"
            className="text-white bg-secondary p-4 rounded-full mb-3"
          />
          <div>
            <h3>Personalized Approach:</h3>
            <p>
              Every fitness journey is unique, and our programs are crafted to
              suit individual needs
            </p>
          </div>
        </div>

        <div className="p-5">
          <FontAwesomeIcon
            icon={faChalkboardTeacher}
            size="2x"
            className="text-white bg-secondary p-4 rounded-full mb-3"
          />
          <div>
            <h3>Experienced and Qualified Trainers</h3>
            <p>
              Our team of certified trainers brings expertise and passion to
              each session. Continuous professional development ensures
              up-to-date knowledge in fitness and wellness trends.
            </p>
          </div>
        </div>

        <div className="p-5">
          <FontAwesomeIcon
            icon={faDumbbell}
            size="2x"
            className="text-white bg-secondary p-4 rounded-full mb-3"
          />
          <div>
            <h3>Convenience Redefined</h3>
            <p>
              Bring wellness directly to your doorstep with our on-site personal
              training services. Corporate classes are designed to seamlessly
              integrate into the corporate environment
            </p>
          </div>
        </div>

        <div className="p-5">
          <FontAwesomeIcon
            icon={faBalanceScale}
            size="2x"
            className="text-white bg-secondary p-4 rounded-full mb-3"
          />
          <div>
            <h3>Comprehensive Corporate Wellness Programs</h3>
            <p>
              Improve employee morale and productivity with our specially
              curated corporate wellness packages. Foster a healthier and
              happier work environment through regular wellness sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconsSection;
