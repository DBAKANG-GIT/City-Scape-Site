// TeamMembers.js
import TeamMember from 'src/atoms/teamMember/team-member';
import divineImage from 'src/assets/image/about/team/divine.jpg';
import kamalImage from 'src/assets/image/about/team/kamal.jpg';
import georgiaImage from 'src/assets/image/about/team/coming-soon.png';

const teamMembers = [
  {
    imageSrc: kamalImage,
    name: 'Kamal',
    position: 'Fitness Director (17 years experience)',
    experience:
      'Meet Kamal, the driving force behind Cityscape Health and Fitness. With a remarkable 17 years of experience as a Fitness Director, Kamal is dedicated to sculpting personalized fitness programs that transcend the limitations of desk-bound routines. His expertise lies in crafting workouts that not only enhance physical well-being but also address the specific challenges faced by city professionals, ensuring a holistic approach to health.',
    linkedinUrl: 'https://linkedin.com/in/kamal-faruk-5a607852',
  },
  {
    imageSrc: georgiaImage,
    name: 'Georgia',
    position: 'Head of Relations (8 years experience)',
    experience:
      "Building connections and fostering a supportive community is Georgia's forte. With 8 years of experience as our Head of Relations, Georgia ensures that Cityscape is not just a fitness center but a welcoming space where individuals connect and share their wellness journeys. Through personalized attention and genuine care, Georgia creates an environment where your fitness goals become a shared passion, making Cityscape more than just a gym—it's a community.",
    linkedinUrl: 'https://linkedin.com/in/georgia-m-2948131a5',
  },
  {
    imageSrc: divineImage,
    name: 'Divine',
    position: 'Sales Manager (5 years experience)',
    experience:
      "As our Sales Manager, Divine is your go-to guide for seamlessly integrating fitness into your bustling city lifestyle. With 5 years of experience, Divine excels at understanding the unique needs of our clients. Whether you're a seasoned fitness enthusiast or just starting your wellness journey, Divine ensures a smooth experience by aligning your goals with our tailored fitness solutions. Your path to health begins with a conversation with Divine.",
    linkedinUrl: 'https://linkedin.com/in/toochukwu-ogar',
  },
];

const TeamMembers = () => {
  return (
    <div className="flex flex-col lg:flex-row text-center justify-center">
      {teamMembers.map((member, index) => (
        <TeamMember
          key={index}
          imageSrc={member.imageSrc}
          name={member.name}
          position={member.position}
          experience={member.experience}
          linkedinUrl={member.linkedinUrl}
        />
      ))}
    </div>
  );
};

export default TeamMembers;
