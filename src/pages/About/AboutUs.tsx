import ContactInformation from "@/component/AboutUs/ContactInformation";
import Map from "@/component/AboutUs/Map";
import MissionStatement from "@/component/AboutUs/MissionStatement";
import SocialMediaLinks from "@/component/AboutUs/SocialMediaLinks";
import TeamMembers from "@/component/AboutUs/TeamMembers";

const AboutUs = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="mb-12">
        <MissionStatement />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-8 lg:space-y-0 lg:space-x-8">
        <Map />
      </div>
      <div className="mb-12">
        <ContactInformation />
      </div>
      <div className="mb-12">
        <SocialMediaLinks />
      </div>
      <div className="mb-12">
        <TeamMembers />
      </div>
    </div>
  );
};

export default AboutUs;
