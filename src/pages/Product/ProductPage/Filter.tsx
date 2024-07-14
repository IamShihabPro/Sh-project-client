interface TFilter {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    minPriceFilter: number;
    setMinPriceFilter: (price: number) => void;
    maxPriceFilter: number;
    setMaxPriceFilter: (price: number) => void;
}

const Filter = ({
    categories,
    selectedCategory,
    setSelectedCategory,
    minPriceFilter,
    setMinPriceFilter,
    maxPriceFilter,
    setMaxPriceFilter
}: TFilter) => {
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out hover:shadow-xl max-w-xs mx-auto sm:max-w-md lg:max-w-lg">
            {/* Category Filter */}
            <div className="mb-6">
                <label className="block mb-3 font-semibold text-xl text-gray-800">Category</label>
                <select
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200 hover:bg-gray-50"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {categories.map((category: string) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
                <label className="block mb-3 font-semibold text-xl text-gray-800">Price Range</label>
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600">${minPriceFilter}</span>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            className="w-full mx-2 accent-indigo-500 hover:cursor-pointer"
                            value={minPriceFilter}
                            onChange={e => setMinPriceFilter(parseInt(e.target.value))}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-gray-600">${maxPriceFilter}</span>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            className="w-full mx-2 accent-indigo-500 hover:cursor-pointer"
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
