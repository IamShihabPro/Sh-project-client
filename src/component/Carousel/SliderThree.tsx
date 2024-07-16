import shoes from '../../assets/slider/shoes.webp'

const SliderThree = () => {
    return (
        <div
      className="h-screen w-full bg-cover bg-center relative py-4"
      style={{ backgroundImage: `url(${shoes})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-white">
        <h2 className="text-5xl sm:text-4xl font-bold text-center mb-4">
          SKPR 2.0
        </h2>
        <p className="py-4 text-lg sm:text-xl text-center max-w-lg">
          Dedicated Focus on the Integration of Responsible Materials & on Performance
        </p>
        <div className="flex gap-4 mt-4">
          <button className="group mb-16 bg-white text-black flex items-center px-6 py-3 my-2 hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
    );
};

export default SliderThree;