import Loader from "@/component/Loader/Loader";
import { useGetAllOrdersQuery } from "@/redux/feature/order/orderApi";
import { TOrder } from "@/types/orderType";

const AllBookings = () => {
    const { data, isLoading } = useGetAllOrdersQuery(undefined);
    const orders = data?.data as TOrder[] || [];

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="max-w-screen-2xl mx-auto mt-10 px-4">
            {orders.length > 0 ? (
                <>
                    <h1 className="text-4xl text-center font-bold mb-6 text-gray-800">All Bookings</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
                            <thead className="bg-gray-200">
                                <tr className="text-center">
                                    <th className="py-3 px-4 border-b">User Name</th>
                                    <th className="py-3 px-4 border-b">User Email</th>
                                    <th className="py-3 px-4 border-b">Phone</th>
                                    <th className="py-3 px-4 border-b">Address</th>
                                    <th className="py-3 px-4 border-b">Total Cost</th>
                                    <th className="py-3 px-4 border-b">Products</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(order => (
                                    <tr key={order.userEmail} className="text-center hover:bg-gray-50 transition duration-150">
                                        <td className="py-2 px-4 border-b">{order.userName}</td>
                                        <td className="py-2 px-4 border-b">{order.userEmail}</td>
                                        <td className="py-2 px-4 border-b">{order.phone}</td>
                                        <td className="py-2 px-4 border-b">{order.address}</td>
                                        <td className="py-2 px-4 border-b text-gray-800 font-semibold">${order.totalCost.toFixed(2)}</td>
                                        <td className="py-2 px-4 border-b">
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full bg-gray-50 rounded-lg border border-gray-200">
                                                    <thead className="bg-gray-200">
                                                        <tr className="text-center">
                                                            <th className="py-2 px-4 border-b">Image</th>
                                                            <th className="py-2 px-4 border-b">Name</th>
                                                            <th className="py-2 px-4 border-b">Category</th>
                                                            <th className="py-2 px-4 border-b">Quantity</th>
                                                            <th className="py-2 px-4 border-b">Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {order.products.map(product => (
                                                            <tr key={product.productId} className="text-center">
                                                                <td className="py-2 px-4 border-b">
                                                                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg border border-gray-300" />
                                                                </td>
                                                                <td className="py-2 px-4 border-b">{product.name}</td>
                                                                <td className="py-2 px-4 border-b">{product.category}</td>
                                                                <td className="py-2 px-4 border-b">{product.quantity}</td>
                                                                <td className="py-2 px-4 border-b">${product.price.toFixed(2)}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <div className="flex flex-col justify-center items-center mt-20 space-y-6 p-4">
                    <h1 className="text-4xl font-bold text-gray-700 text-center">No Bookings Available</h1>
                    <p className="text-lg text-gray-500 text-center">Please add some bookings to display</p>
                </div>
            )}
        </div>
    );
};

export default AllBookings;
