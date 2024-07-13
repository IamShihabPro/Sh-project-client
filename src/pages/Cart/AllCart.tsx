import { useGetCartQuery } from "@/redux/feature/cart/cartApi";
import Loader from "@/component/Loader/Loader"; // Assuming you have a Loader component for loading state

const AllCart = () => {
    const { data, isLoading, isError } = useGetCartQuery(undefined);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <div className="max-w-screen-2xl mx-auto mt-24"><h1>Error loading cart items</h1></div>;
    }

    return (
        <div className="max-w-screen-2xl mx-auto mt-24">
            {
                data?.data?.length > 0 ? (
                    <>
                        <h1 className="text-2xl text-center font-bold mb-4">All Carts Item</h1>
                        
                    </>
                ) : (
                    <h1 className="text-2xl text-center font-bold mx-4">You don't have any products in your cart</h1>
                )
            }
        </div>
    );
};

export default AllCart;
