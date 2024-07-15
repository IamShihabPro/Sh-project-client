import { Link } from 'react-router-dom';
import jungle from '../../assets/others/jungle.webp';
import backpack from '../../assets/others/backpack.webp';
import shoes from '../../assets/others/shoes.webp';

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const recommendedProducts: Product[] = [
  {
    id: 1,
    name: 'Tent',
    image: jungle,
    price: 29.99,
  },
  {
    id: 2,
    name: 'Trendy Backpack',
    image: backpack,
    price: 49.99,
  },
  {
    id: 3,
    name: 'Comfortable Sneakers',
    image: shoes,
    price: 69.99,
  },
];

const RecommendedProductsSection = () => {
  return (
    <div className="bg-white py-12">
      <h2 className="text-4xl text-center font-bold mb-10 text-gray-800">Best Selling Products</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {recommendedProducts.map((product) => (
          <div key={product.id} className="relative bg-gray-100 shadow-md overflow-hidden group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <h3 className="text-white text-lg font-semibold">{product.name}</h3>
              <p className="text-white text-md">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/products">
          <button className="px-6 py-2 bg-black text-white hover:bg-blue-600 transition duration-300">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendedProductsSection;
