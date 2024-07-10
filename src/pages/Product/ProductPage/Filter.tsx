import { useState } from 'react';

const Filter = () => {
  const [minPriceFilter, setMinPriceFilter] = useState(0);
  const [maxPriceFilter, setMaxPriceFilter] = useState(100);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      {/* Category Filter */}
      <div className="mb-6">
        <label className="block mb-3 font-semibold text-xl text-gray-800">Category</label>
        <div className="relative">
          <select className="w-full p-3 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Clothing">Clothing</option>
            <option value="Home">Home</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293l4.707 4.707 4.707-4.707 1.414 1.414L10 14.828l-6.414-6.121z"/></svg>
          </div>
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="block mb-3 font-semibold text-xl text-gray-800">Price Range</label>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <span className="text-gray-600">${minPriceFilter}</span>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              className="w-40 mx-2"
              value={minPriceFilter}
              onChange={e => setMinPriceFilter(parseInt(e.target.value))}
            />
          </div>

          <div className="flex items-center">
            <span className="text-gray-600">${maxPriceFilter}</span>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              className="w-40 mx-2"
              value={maxPriceFilter}
              onChange={e => setMaxPriceFilter(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
