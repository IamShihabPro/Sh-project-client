import ShopCard from "@/component/Card/ShopCard";
// import { useGetProductQuery } from "@/redux/feature/product/productApi";
import { TProduct } from "@/types/productType";
import { Link } from "react-router-dom";
import { data } from "@/Data/products";

const CategoryPage = () => {
    // const {data} = useGetProductQuery(undefined)


    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="mt-20">
                <h1 className="font-bold text-4xl text-center mb-10 text-gray-800">Feature Product</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                {
                    data?.slice(0,4).map((product: TProduct) =>(
                        <ShopCard key={product?._id} product={product} />
                    ))
                }
            </div>
            <div className="flex justify-center items-center">
                 <Link to='/products' className="bg-black text-white px-4 py-2 text-center mt-10">View More</Link>
            </div>
        </div>
    );
};

export default CategoryPage;