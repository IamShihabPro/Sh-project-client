import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInformation: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Information</h2>
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <FaPhone className="text-primary mr-2" />
          <p className="text-lg">(123) 456-7890</p>
        </div>
        <div className="flex items-center justify-center mb-4">
          <FaEnvelope className="text-primary mr-2" />
          <p className="text-lg">contact@ourcompany.com</p>
        </div>
        <div className="flex items-center justify-center mb-4">
          <FaMapMarkerAlt className="text-primary mr-2" />
          <p className="text-lg">1234 Street Name, City, State, ZIP</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
