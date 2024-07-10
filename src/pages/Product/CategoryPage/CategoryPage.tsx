import ShopCard from "@/component/Card/ShopCard";
import { useGetProductQuery } from "@/redux/api/baseApi";

const CategoryPage = () => {
    const {data, isLoading} = useGetProductQuery(undefined)

    return (
        <div>
            <div className="mt-20">
                <h1 className="font-bold text-4xl text-center mb-10">Shop By Category</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    data?.data?.map((product) =>(
                        <ShopCard key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryPage;