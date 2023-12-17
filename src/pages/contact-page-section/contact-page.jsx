import BottomLine from 'src/atoms/bottomLine/bottom-line';
import ContactItem from 'src/atoms/contact/contact-item';
import ContactForm from 'src/molecules/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

const contactItems = [
  {
    href: 'mailto:test@gmail.com',
    icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
    title: 'Email',
    content: 'test@gmail.com',
  },
  {
    href: 'tel:+44(0)123456789',
    icon: <FontAwesomeIcon icon={faPhone} size="2x" />,
    title: 'Phone',
    content: '+44 (0) 123456789',
  },
  {
    href: 'https://www.google.com/maps?q=London',
    icon: <FontAwesomeIcon icon={faAddressCard} size="2x" />,
    title: 'Address',
    content: 'London, United Kingdom',
  },
];

const ContactSection = () => {
  return (
    <>
      <section id="contact-a" className="text-center py-12">
        <div id="container" className="m-auto max-w-7xl overflow-hidden px-6">
          <div id="contact" className="solutions flex-columns">
            <h1 className="pb-2 text-center text-3xl font-thin uppercase">
              Contact Us
            </h1>
            <BottomLine />
            <p id="lead" className="">
              Here is how you can reach us
            </p>
            <div id="row" className="flex flex-wrap w-full flex-row">
              <ContactForm enableRecaptcha={true} />
            </div>
          </div>
        </div>
      </section>

      <section id="contact-b" className="text-center py-12 bg-black">
        <div id="container" className="m-auto max-w-7xl overflow-hidden px-6">
          <div id="contact-items" className="grid grid-cols-3 text-center">
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
