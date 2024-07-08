import React from 'react';
import tent from '../../assets/slider/tent.webp';

const SliderOne: React.FC = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative py-4"
      style={{ backgroundImage: `url(${tent})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 text-white pt-4">
        <div className="flex flex-col justify-center h-full w-full md:mr-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-left mb-4">
            Unveil the Latest Fashion Sensations!
          </h2>
          <p className="py-4 text-white text-left max-w-lg">
            Upgrade your wardrobe with the hottest trends in fashion. Explore our handpicked collection of clothing, accessories, and more. From chic streetwear to elegant evening dresses, we've got something for everyone.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="group mb-16 text-black flex items-center rounded-sm px-6 py-3 my-2 bg-white transition-colors duration-200 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
        {/* <div className="p-4 pb-4 mt-6 md:mt-0">
          <img
            src="https://img.freepik.com/free-photo/mother-with-daughter-playing-summer-park_1157-19596.jpg?t=st=1720464163~exp=1720467763~hmac=ad701935a8695f101f872aa9aad75174c5336428b36a0404b60068a9af5006fa&w=996"
            alt="Fashion Model"
            className="rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div> */}
      </div>
    </div>
  );
};

export default SliderOne;
