import people from '../../assets/slider/people.webp'

const SliderTwo = () => {
    return (
<div
      className="h-screen w-full bg-cover bg-center relative py-4"
      style={{ backgroundImage: `url(${people})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
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
            src="https://img.freepik.com/premium-psd/psd-travel-backpack-isolated-transparent-background_911060-19901.jpg?w=740"
            alt="Fashion Model"
            className="rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div> */}
      </div>
    </div>
    );
};

export default SliderTwo;