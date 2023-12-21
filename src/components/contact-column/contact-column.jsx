import ContactImage from 'src/atoms/contact/contact-image';
import ContactForm from 'src/molecules/contact-form/contactForm';

const ContactColumn = () => {
  return (
    <>
      <div id="colum-1" className="flex flex-col flex-1">
        <ContactImage />
        {/* column 1 */}
      </div>
      <div id="column-2" className="flex flex-col flex-1">
        <div className="h-full bg-lightGrey">
          <h2>Request Callback</h2>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactColumn;
