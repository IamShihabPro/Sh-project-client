// Filter.tsx
import { useState } from 'react';

const Filter= () => {
  const [minPriceFilter, setMinPriceFilter] = useState(0);
  const [maxPriceFilter, setMaxPriceFilter] = useState(100);

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* Category Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Category</label>
        <select className="w-full p-2 border rounded-md">
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Clothing">Clothing</option>
          <option value="Home">Home</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Price Range</label>
        <div className=''>
          <span>${minPriceFilter}</span>
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

        <div>
          <span>${maxPriceFilter}</span>
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
  );
};

export default Filter;
