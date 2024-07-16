import people from '../../assets/slider/people.webp'

const SliderTwo = () => {
    return (
<div
      className="h-screen w-full bg-cover bg-center relative py-4"
      style={{ backgroundImage: `url(${people})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Unveil the Latest Fashion Sensations!
        </h2>
        <p className="py-4 text-lg sm:text-xl text-center max-w-lg">
        With Over 50 years of Experience Designing World-Class Carry Systems
        </p>
        <div className="flex gap-4 mt-4">
          <button className="group mb-16 text-black flex items-center px-6 py-3 my-2 bg-white transition-colors duration-200 cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
    </div>
    );
};

export default SliderTwo;