import ColumnWithImage from '../../atoms/columns/column-with-image';
import ColumnWithContent from '../../atoms/columns/column-with-content';
import businessImage from '../../assets/Images/About/business.jpg';

const SolutionsSection = () => {
  return (
    <section className="solutions">
      <div className="flex flex-wrap w-full flex-row">
        <ColumnWithImage
          imageUrl={businessImage}
          altText="People standing in a business"
        />
        <ColumnWithContent
          title="What are you looking for"
          subTitle="We provide bespoke solutions"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est aspernatur, vero eos officia hic saepe delectus temporibus voluptates, culpa odio, ipsam nam sequi maiores blanditiis dolore officiis dignissimos sed expedita."
          btnText="Read More"
        />
      </div>
    </section>
  );
};

export default SolutionsSection;
