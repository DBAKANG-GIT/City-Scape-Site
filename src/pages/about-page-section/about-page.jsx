import BottomLine from 'src/atoms/bottomLine/bottom-line';
import TextHolder from 'src/molecules/text-with-bottom-line/text-holder';
import IconsSection from '../../components/icons-section/icon-section';
// import SolutionsSection from '../../components/solutions-section/solutions-section';
import rectangle from 'src/assets/image/about/Rectangle.svg';
import curveImage from 'src/assets/image/about/Rectangle-with-people.png';
import TextWithBackgroundImage from 'src/atoms/text-with-background-image/TextWithBackgroundImage';

const AboutPage = () => {
  return (
    <div className="flex w-full py-5 flex-col items-center gap-8 h-auto ">
      <TextHolder text1="Empowering Lives" text2="Through Holistic Wellness" />
      <BottomLine />
      <TextWithBackgroundImage rectangle={rectangle} curveImage={curveImage} />
      <TextHolder text1="Why Choose" text2="Cityscape Health and Wellbeing" />
      <BottomLine />
      {/* <SolutionsSection /> */}
      <IconsSection />
    </div>
  );
};

export default AboutPage;
