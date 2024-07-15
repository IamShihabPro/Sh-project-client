import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    photo: '/images/john.jpg',
    bio: 'John is the founder and CEO of our company with over 20 years of experience in the industry.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    photo: '/images/jane.jpg',
    bio: 'Jane is the CTO and leads the tech team with her expertise in software development.',
  },
  // Add more team members as needed
];

const TeamMembers: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{member.role}</p>
            <p className="text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
