import ProductCard from "@/component/Card/ProductCard";
// import { useGetProductQuery } from "@/redux/api/baseApi";
import Filter from "./Filter";
import { TProduct } from "@/types/productType";
import { useGetProductQuery } from "@/redux/feature/product/productApi";
import Loader from "@/component/Loader/Loader";

const ProductPage = () => {
    const {data, isLoading} = useGetProductQuery(undefined)
    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="max-w-screen-2xl mx-auto mt-28">
            <h1 className="font-bold text-3xl text-center mb-10">Shop By Category</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-4">
                {/* Filter Section */}
                <div className="lg:col-span-1">
                    <Filter />
                </div>

                {/* Product Listing Section */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data?.data?.map((product: TProduct) => (
                        <ProductCard key={product?._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;