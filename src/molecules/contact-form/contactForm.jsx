import Button from '../../atoms/buttons/button';
import InputField from '../../atoms/inputField/input-field';
import Recaptcha from '../../atoms/recaptcha/recaptcha-netlify';

const ContactForm = (enableRecaptcha) => {
  return (
    <form
      className="w-full py-5"
      action="/"
      method="post"
      name="callback-form"
      id="callback-form"
    >
      <input type="hidden" name="form-name" value="callback-form" />

      <InputField
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        required={true}
      />
      <InputField
        type="email"
        id="email"
        name="email"
        placeholder="Email Address"
        required
      />
      <InputField
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject"
        required={true}
      />
      <InputField
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone Number"
        required={false}
      />

      <textarea
        className="w-full h-36 border border-black py-2 px-4 mb-4"
        type="text"
        name="message"
        id="message"
        placeholder="Enter Message"
        required={true}
      ></textarea>

      {enableRecaptcha ? <Recaptcha /> : null}

      <Button />
    </form>
  );
};

export default ContactForm;
