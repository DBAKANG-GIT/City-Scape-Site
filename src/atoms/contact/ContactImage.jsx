import Image from 'src/assets/image/contact/contact.jpg';

const ContactImage = () => {
  return (
    <div id="column1" className="h-full">
      <img
        src={Image}
        alt="People sitting in office"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ContactImage;
