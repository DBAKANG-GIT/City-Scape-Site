import Button from 'src/atoms/buttons/button';
import InputField from 'src/atoms/inputField/input-field';
import Recaptcha from 'src/atoms/recaptcha/recaptcha-netlify';

const ContactForm = (enableRecaptcha) => {
  return (
    <form
      className="w-full py-5"
      data-netlify-recaptcha="true"
      data-netlify="true"
      method="POST"
      name="callback-form"
    >
      <InputField type="text" id="name" name="name" placeholder="Name" />
      <InputField
        type="email"
        id="email"
        name="email"
        placeholder="Email Address"
      />
      <InputField
        type="text"
        id="subject"
        name="subject"
        placeholder="Subject"
      />
      <InputField
        type="tel"
        id="phone"
        name="phone"
        placeholder="Phone Number"
      />

      <textarea
        className="w-full h-36 border border-black py-2 px-4 mb-4"
        type="text"
        id="message"
        name="message"
        placeholder="Enter Message"
        required
      />
      {enableRecaptcha ? <Recaptcha /> : null}
      <Button />
    </form>
  );
};

export default ContactForm;
