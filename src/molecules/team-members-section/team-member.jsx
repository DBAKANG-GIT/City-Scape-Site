// TeamMembers.js
import TeamMember from 'src/atoms/teamMember/team-member';
import divineImage from 'src/assets/image/about/team/divine.jpg';
import kamalImage from 'src/assets/image/about/team/Kamal.jpg';
const TeamMembers = () => {
  return (
    <div className="flex text-center justify-center h-[20rem]">
      <TeamMember
        imageSrc={divineImage}
        name="Divine"
        position="Sales Manager (5 years experience)"
      />
      <TeamMember
        imageSrc={kamalImage}
        name="Kamal"
        position="Kamal, Fitness Director (17 years experience)"
      />
    </div>
  );
};

export default TeamMembers;
