import Button from 'src/atoms/buttons/button';
import InputField from 'src/atoms/inputField/input-field';

const ContactForm = () => {
  return (
    <form
      className="w-full py-5"
      data-netlify-recaptcha="true"
      method="POST"
      name="callback-form"
    >
      <InputField type="text" id="name" placeholder="Name" />
      <InputField type="email" id="email" placeholder="Email Address" />
      <InputField type="text" id="subject" placeholder="Subject" />
      <InputField type="tel" id="phone" placeholder="Phone Number" />

      <textarea
        className="w-full h-36 border border-black py-2 px-4 mb-4"
        type="text"
        id="message"
        placeholder="Enter Message"
        required
      />
      <Button />
    </form>
  );
};

export default ContactForm;
