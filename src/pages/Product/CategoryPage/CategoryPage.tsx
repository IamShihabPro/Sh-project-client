import ShopCard from "@/component/Card/ShopCard";
import { useGetProductQuery } from "@/redux/feature/product/productApi";
// import { useGetProductQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types/productType";

const CategoryPage = () => {
    const {data} = useGetProductQuery(undefined)

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="mt-20">
                <h1 className="font-bold text-4xl text-center mb-10 text-gray-800">Shop By Category</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                {
                    data?.data?.map((product: TProduct) =>(
                        <ShopCard key={product?._id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryPage;