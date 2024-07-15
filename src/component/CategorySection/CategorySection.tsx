import React from 'react';
import tent from '../../assets/others/tent-2.jpg';
import shoes from '../../assets/others/shoes-2.jpg';
import backpack from '../../assets/others/backpack-2.jpg';

const categories = [
  {
    name: 'Tent',
    image: tent,
  },
  {
    name: 'Shoes',
    image: shoes,
  },
  {
    name: 'Backpak',
    image: backpack,
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Categories</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg"
          >
            <img src={category.image} alt={category.name} className="w-full h-64 object-cover transition-transform transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white z-10">
              <h3 className="text-2xl font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
