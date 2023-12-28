import BottomLine from 'src/atoms/bottomLine/bottom-line';
import ContactItem from 'src/atoms/contact/contact-item';
import ContactForm from 'src/molecules/contact-form/contactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import TextHolder from 'src/molecules/text-with-bottom-line/text-holder';

const contactItems = [
  {
    href: 'mailto:test@gmail.com',
    icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
    title: 'Email',
    content: 'test@gmail.com',
  },
  {
    href: 'https://maps.app.goo.gl/Du6stTteNNENZQ6c6',
    icon: <FontAwesomeIcon icon={faAddressCard} size="2x" />,
    title: 'Address',
    content: `London (City) Office 63/66 Hatton Garden
    Fifth Floor, Suite 23 London EC1N 8LE`,
  },
];

const ContactSection = () => {
  return (
    <>
      <section id="contact-a" className="text-center py-12">
        <div id="container" className="m-auto max-w-7xl overflow-hidden px-6">
          <div id="contact" className="solutions flex-columns">
            <div className="mb-4">
              <TextHolder
                text1="Contact Us"
                text2="Here is our how you can reach us"
              />
            </div>

            <BottomLine />
            <div id="row" className="flex flex-wrap w-full flex-row">
              <ContactForm enableRecaptcha={false} />
            </div>
          </div>
        </div>
      </section>

      <section id="contact-b" className="text-center py-12 bg-black">
        <div id="container" className="m-auto max-w-7xl overflow-hidden px-6">
          <div
            id="contact-items"
            className="grid sm:grid-cols-2 gap-5 text-center"
          >
            {contactItems.map((item, index) => (
              <ContactItem
                key={index}
                href={item.href}
                icon={item.icon}
                title={item.title}
                className="bg-white"
              >
                {item.content}
              </ContactItem>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
