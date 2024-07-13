import { useGetCartQuery, useDeleteCartMutation, useUpdateCartMutation } from "@/redux/feature/cart/cartApi";
import Loader from "@/component/Loader/Loader";
import { useState } from "react";
import { TCart } from "@/types/cartType";

const AllCart = () => {
    const { data, isLoading, isError } = useGetCartQuery(undefined);
    const [deleteCart] = useDeleteCartMutation();
    const [updateCart] = useUpdateCartMutation();
    const [editingItem, setEditingItem] = useState<TCart | null>(null);
    const [newQuantity, setNewQuantity] = useState<number>(1);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <div className="max-w-screen-2xl mx-auto mt-24"><h1>Error loading cart items</h1></div>;
    }

    const handleEdit = (item: TCart) => {
        setEditingItem(item);
        setNewQuantity(item.quantity);
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteCart(id).unwrap();
        } catch (error) {
            console.error(error);
        }
    };

    const handleSave = async () => {
        if (editingItem) {
            try {
                await updateCart({ ...editingItem, quantity: newQuantity }).unwrap();
                setEditingItem(null);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="max-w-screen-2xl mx-auto mt-24">
            {
                data?.data?.length > 0 ? (
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
                                    {data.data.map((item: TCart) => (
                                        <tr key={item._id} className="text-center">
                                            <td className="py-2 px-4 border">
                                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mx-auto"/>
                                            </td>
                                            <td className="py-2 px-4 border">{item.name}</td>
                                            <td className="py-2 px-4 border">{item.category}</td>
                                            <td className="py-2 px-4 border">{item.quantity}</td>
                                            <td className="py-2 px-4 border">${item.price}</td>
                                            <td className="py-2 px-4 border">
                                                <button
                                                    onClick={() => handleEdit(item)}
                                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition m-1"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => item._id && handleDelete(item._id)}
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
                        {editingItem && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="bg-white px-4 py-6 rounded-lg shadow-lg relative">
                                    <h2 className="text-lg font-bold mb-4">Edit Quantity</h2>
                                    <input
                                        type="number"
                                        value={newQuantity}
                                        onChange={(e) => setNewQuantity(Number(e.target.value))}
                                        className="border px-4 py-2 rounded mb-4 w-full"
                                    />
                                    <div className="flex justify-between items-center gap-4 m-2">
                                        <button
                                            onClick={handleSave}
                                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => setEditingItem(null)}
                                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <h1 className="text-2xl text-center font-bold mx-4">You don't have any products in your cart</h1>
                )
            }
        </div>
    );
};

export default AllCart;
