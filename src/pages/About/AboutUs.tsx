import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import leomessi from '../../assets/others/leomessi.jpeg';
import angeldimariajm from '../../assets/others/angeldimariajm.jpeg';
import rodridepaul from '../../assets/others/rodridepaul.jpeg';

type TeamMember = {
  name: string;
  text: string;
  image: string;
};

const TeamMembers: TeamMember[] = [
  {
    name: 'Leo Messi',
    text: 'A dedicated team player who excels in collaboration and communication, always bringing positive energy to the group.',
    image: leomessi,
  },
  {
    name: 'Angel Di Mariajm',
    text: 'An innovative thinker with a knack for creative solutions, consistently pushing boundaries to enhance our offerings.',
    image: angeldimariajm,
  },
  {
    name: 'Rodride Paul',
    text: 'A meticulous strategist, known for analytical skills and a deep understanding of customer needs, ensuring top-notch service.',
    image: rodridepaul,
  },
];

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-10 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Us</h1>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Contact Information</h2>
        <p className="text-lg mb-1">Phone: <span className="font-medium">+61416722167</span></p>
        <p className="text-lg mb-1">Email: <span className="font-medium">kamrulhasanshamim@cqumail.com</span></p>
        <p className="text-lg">Address: <span className="font-medium">44 Duke St, Braybrook, VIC</span></p>
      </div>

      {/* <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0121583284936!2d144.84318727570397!3d-37.78975483266601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65e20ccb80c27%3A0x7fbc8adbc8609bc0!2s44%20Duke%20St%2C%20Braybrook%20VIC%203019!5e0!3m2!1sen!2sau!4v1724496110645!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> */}

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Location</h2>
        <div className="h-64 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0121583284936!2d144.84318727570397!3d-37.78975483266601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65e20ccb80c27%3A0x7fbc8adbc8609bc0!2s44%20Duke%20St%2C%20Braybrook%20VIC%203019!5e0!3m2!1sen!2sau!4v1724496110645!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            aria-hidden="false"
          ></iframe>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Follow Us</h2>
        <div className="flex space-x-4 justify-center">
          <a href="#" className="text-gray-500 hover:text-blue-600 transition duration-200" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={28} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition duration-200" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={28} />
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600 transition duration-200" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} />
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600 transition duration-200" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={28} />
          </a>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Mission</h2>
        <p className="text-lg text-gray-600">
        Explore the epitome of adventure with our premier collections tailored for outdoor enthusiasts. Unleash your wanderlust with our meticulously curated assortment, ranging from high-performance hiking apparel to cutting-edge skiwear, and from high quality camping equipment to rugged hiking shoes and backpacks. Designed to withstand the elements while providing unparalleled comfort and functionality, our best-selling collections ensure you're ready to conquer any terrain with confidence. Elevate your outdoor experience with gear meticulously crafted for every expedition, promising durability, innovation, and style.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {TeamMembers.map((member) => (
            <div key={member.name} className="text-center bg-gray-50 p-4 rounded-lg shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-gray-300"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
