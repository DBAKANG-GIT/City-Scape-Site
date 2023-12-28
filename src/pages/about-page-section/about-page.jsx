import BottomLine from 'src/atoms/bottomLine/bottom-line';
import TextHolder from 'src/molecules/text-with-bottom-line/text-holder';
import IconsSection from '../../components/icons-section/icon-section';
// import SolutionsSection from '../../components/solutions-section/solutions-section';
import desktopRectangle from 'src/assets/image/about/Rectangle.svg';
import mobileRectangle from 'src/assets/image/about/mobile-rectangle.svg';
import desktopCurveImage from 'src/assets/image/about/business-desktop.png';
import mobileCurveImage from 'src/assets/image/about/business-mobile.png';
import TextWithBackgroundImage from 'src/atoms/text-with-background-image/TextWithBackgroundImage';
import TeamSection from 'src/components/team-bio-section/team-section';

const AboutPage = () => {
  return (
    <div className="flex w-full py-5 flex-col items-center gap-8 min-h-screen bg-gray-100 ">
      <TextHolder text1="Empowering Lives" text2="Through Holistic Wellness" />
      <BottomLine />
      <TextWithBackgroundImage
        desktopRectangle={desktopRectangle}
        mobileRectangle={mobileRectangle}
        desktopCurveImage={desktopCurveImage}
        mobileCurveImage={mobileCurveImage}
      />
      <TextHolder text1="Why Choose" text2="Cityscape Health and Wellbeing" />
      <BottomLine />
      {/* <SolutionsSection /> */}
      <div className="mb-8 bg-white rounded-lg shadow-md p-6">
        <IconsSection />
      </div>
      <TextHolder text1="Meet" text2="Our Team" />
      <BottomLine />
      <TeamSection />
    </div>
  );
};

export default AboutPage;
