import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Loader from "@/component/Loader/Loader";
import { RootState } from "@/redux/store";
import { TCart } from "@/types/cartType";
import { removeFromCart, updateCartQuantity } from "@/redux/feature/cart/cartSlice";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";


const MyCart = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state: RootState) => state.cart.items);
    const [editingItem, setEditingItem] = useState<TCart | null>(null);
    const [newQuantity, setNewQuantity] = useState<number>(1);

    if (!cartItems) {
        return <Loader />;
    }

    const handleEdit = (item: TCart) => {
        setEditingItem(item);
        setNewQuantity(item.quantity);
    };

    const handleDelete = async (id: string) => {
        dispatch(removeFromCart(id));
    };

    const handleSave = async () => {
        if (editingItem) {
            dispatch(updateCartQuantity({ id: editingItem.productId, quantity: newQuantity }));
            setEditingItem(null);
        }
    };

    const handleQuantityChange = (delta: number) => {
        setNewQuantity(prevQuantity => Math.max(1, prevQuantity + delta));
    };

    const handleCheckout = () => {
        // Implement your checkout logic here
        alert("Proceeding to checkout...");
    };

    return (
        <div className="max-w-screen-2xl mx-auto mt-24">
            {cartItems.length > 0 ? (
                <>
                    <h1 className="text-2xl text-center font-bold mb-4">All Cart Items</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border">
                            <thead>
                                <tr className="text-center">
                                    <th className="py-2 px-4 border">Image</th>
                                    <th className="py-2 px-4 border">Name</th>
                                    <th className="py-2 px-4 border">Category</th>
                                    <th className="py-2 px-4 border">Quantity</th>
                                    <th className="py-2 px-4 border">Price</th>
                                    <th className="py-2 px-4 border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item: TCart) => (
                                    <tr key={item?._id} className="text-center">
                                        <td className="py-2 px-4 border">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mx-auto"/>
                                        </td>
                                        <td className="py-2 px-4 border">{item?.name}</td>
                                        <td className="py-2 px-4 border">{item?.category}</td>
                                        <td className="py-2 px-4 border">{item?.quantity}</td>
                                        <td className="py-2 px-4 border">${item?.price}</td>
                                        <td className="py-2 px-4 border">
                                            <button
                                                onClick={() => handleEdit(item)}
                                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition m-1"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => item?.productId && handleDelete(item?.productId)}
                                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition m-1"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center mt-4">
                        <button
                            onClick={handleCheckout}
                            className="bg-white text-gray-600 px-6 py-3 text-lg rounded-sm border border-gray-600 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out mt-6"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                    {editingItem && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white px-4 py-6 rounded-sm shadow-lg relative">
                                <h2 className="text-lg font-bold mb-4 text-center">Update Quantity</h2>
                                <div className="flex justify-between items-center gap-4 p-4">
                                    <button
                                        onClick={() => handleQuantityChange(-1)}
                                        className="bg-white border-2 border-gray-300 text-black px-4 py-2 transition transform hover:scale-105"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={newQuantity}
                                        onChange={(e) => setNewQuantity(Math.max(1, Number(e.target.value)))}
                                        className="border-2 border-gray-300 px-4 py-2 text-center w-16 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                    />
                                    <button
                                        onClick={() => handleQuantityChange(1)}
                                        className="bg-white border-2 border-gray-300 text-black px-4 py-2 transition transform hover:scale-105"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="flex justify-between items-center gap-4 m-2">
                                    <button
                                        onClick={handleSave}
                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditingItem(null)}
                                        className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="flex flex-col justify-center items-center mt-20 space-y-6 p-4">
                    <HiOutlineShoppingBag className="w-24 h-24 text-gray-500"/>
                    <h1 className="text-4xl font-bold text-gray-700 text-center">Your Bag is Empty</h1>
                    <p className="text-lg text-gray-500 text-center">Continue shopping and add items to your bag</p>
                    <Link to='/products' 
                        className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:from-teal-500 hover:to-blue-500 transition duration-300 ease-in-out"
                    >
                        Shop Now
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyCart;
