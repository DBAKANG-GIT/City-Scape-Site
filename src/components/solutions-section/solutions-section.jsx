import ColumnWithContent from '../../atoms/columns/column-with-content';

const SolutionsSection = () => {
  return (
    <section className="solutions">
      <div className="flex flex-wrap w-full flex-row">
        <ColumnWithContent
          title="About us"
          subTitle="Empowering Lives Through Holistic Wellness"
          content="At Cityscape Health and Wellbeing, we are dedicated to enhancing the vitality and resilience of individuals and corporations alike. Our bespoke wellness programs seamlessly blend on-site personal training with invigorating corporate classes such as yoga and pilates, fostering a culture of health and balance in both personal and professional realms."
          btnText="Read More"
        />
      </div>
      <h1>Our Vision</h1>
      <p>
        To create a healthier, more vibrant community by making wellness
        accessible, enjoyable, and an integral part of everyday life.
      </p>
    </section>
  );
};

export default SolutionsSection;
