const ContactForm = () => {
  return (
    <form
      className="w-full py-5"
      data-netlify-recaptcha="true"
      method="POST"
      name="callback-form"
    >
      <label htmlFor="name">Name</label>
      <input
        className="w-full p-1 h-10 border border-f5f5f5 mb-1"
        type="text"
        id="name"
        placeholder="Enter name"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        className="w-full p-1 h-10 border border-f5f5f5 mb-1"
        type="email"
        id="email"
        placeholder="Enter email"
        required
      />

      <label htmlFor="phone">Phone</label>
      <input
        className="w-full p-1 h-10 border border-f5f5f5 mb-1"
        type="tel"
        id="phone"
        placeholder="Enter phone"
        required
      />

      <input type="submit" value="Send" className="btn"></input>
    </form>
  );
};

export default ContactForm;
