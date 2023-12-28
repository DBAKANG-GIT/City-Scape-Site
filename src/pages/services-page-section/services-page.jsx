import BottomLine from 'src/atoms/bottomLine/bottom-line';
import TextHolder from 'src/molecules/text-with-bottom-line/text-holder';

const ServicesPage = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <TextHolder text1="Welcome to the" text2="Services Page of CityScape" />
      <BottomLine />

      <p className="mb-6 text-lg text-center">
        These are the services we offer{' '}
      </p>

      <div className="mb-8 bg-gray-100 border-secondary border-2 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2 text-secondary">
          On-Site Personal Training:
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-1">
            Tailored fitness programs designed to meet individual goals.
          </li>
          <li className="mb-1">
            Expert trainers delivering personalized sessions at your location
            for convenience.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 border-secondary border-2 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2 text-secondary">
          Corporate Classes:
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-1">
            Energizing yoga and pilates classes to promote physical and mental
            well-being.
          </li>
          <li className="mb-1">
            Customizable schedules to accommodate busy corporate lifestyles.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesPage;
