import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaLinks: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Follow Us</h2>
      <div className="flex justify-center space-x-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} className="text-blue-600 hover:text-blue-800 transition-colors duration-300" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={32} className="text-blue-400 hover:text-blue-600 transition-colors duration-300" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} className="text-pink-600 hover:text-pink-800 transition-colors duration-300" />
        </a>
      </div>
    </section>
  );
};

export default SocialMediaLinks;
