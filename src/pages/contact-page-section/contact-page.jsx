import ContactColumn from 'src/components/contact-column/contact-column';

const ContactSection = () => {
  return (
    <section id="contact" className="solutions flex-columns">
      <div id="row" className="flex flex-wrap w-full flex-row">
        <ContactColumn />
      </div>
    </section>
  );
};

export default ContactSection;
