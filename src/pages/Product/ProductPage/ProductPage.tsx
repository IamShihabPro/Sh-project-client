import ProductCard from "@/component/Card/ProductCard";
import Filter from "./Filter";
import { TProduct } from "@/types/productType";
import { useGetProductQuery } from "@/redux/feature/product/productApi";
import Loader from "@/component/Loader/Loader";
import { useState, useMemo } from "react";

const ProductPage = () => {
    const { data, isLoading } = useGetProductQuery(undefined);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [minPriceFilter, setMinPriceFilter] = useState<number>(0);
    const [maxPriceFilter, setMaxPriceFilter] = useState<number>(100);

    if (isLoading) {
        return <Loader />;
    }

    const products = data?.data as TProduct[] || [];

    // Filter products based on selected category and price range
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
            const matchesPrice = product.price >= minPriceFilter && product.price <= maxPriceFilter;
            return matchesCategory && matchesPrice;
        });
    }, [products, selectedCategory, minPriceFilter, maxPriceFilter]);

    return (
        <div className="max-w-screen-2xl mx-auto mt-28">
            <h1 className="font-bold text-3xl text-center mb-10">Shop By Category</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-4">
                {/* Filter Section */}
                <div className="lg:col-span-1">
                    <Filter 
                        categories={Array.from(new Set(products.map(product => product.category)))}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        minPriceFilter={minPriceFilter}
                        setMinPriceFilter={setMinPriceFilter}
                        maxPriceFilter={maxPriceFilter}
                        setMaxPriceFilter={setMaxPriceFilter}
                    />
                </div>

                {/* Product Listing Section */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredProducts.map((product: TProduct) => (
                        <ProductCard key={product?._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
