import Button from 'src/atoms/buttons/button';
// import InputField from 'src/atoms/inputField/input-field';

const ContactForm = () => {
  return (
    <form className="w-full py-5" action="/" method="post" name="callback-form">
      <input type="hidden" name="form-name" value="callback-form" />

      <InputField type="text" name="name" placeholder="Name" />
      <InputField type="email" name="email" placeholder="Email Address" />
      <InputField type="text" name="subject" placeholder="Subject" />
      <InputField type="tel" name="phone" placeholder="Phone Number" />

      <textarea
        className="w-full h-36 border border-black py-2 px-4 mb-4"
        type="text"
        name="message"
        placeholder="Enter Message"
      ></textarea>
      <Button />
    </form>
  );
};

export default ContactForm;
