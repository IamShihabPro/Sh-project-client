import { useState } from 'react';
import Loader from "@/component/Loader/Loader";
import { useDeleteProductMutation, useGetProductQuery, useUpdateProductMutation } from "@/redux/feature/product/productApi";
import { TProduct } from "@/types/productType";
import { toast } from "sonner";
import UpdateProductModal from './UpdateProductModal';

const AllProduct = () => {
    const { data, isLoading } = useGetProductQuery(undefined);
    const [deleteProduct] = useDeleteProductMutation();
    const [updateProduct] = useUpdateProductMutation();

    const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const products = data?.data as TProduct[] || [];

    const handleEdit = (product: TProduct) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleDelete = async (productId: string) => {
        if (productId) {
            const confirmDelete = window.confirm("Are you sure you want to delete this product?");
            if (confirmDelete) {
                try {
                    const res = await deleteProduct(productId).unwrap();
                    if (res?.success) {
                        toast.success(res?.message);
                    }
                } catch (error) {
                    toast.error("Failed to delete the product. Please try again.");
                    console.error(error);
                }
            }
        }
    };

    const handleUpdateProduct = async (updatedProduct: TProduct) => {
        try {
            const res = await updateProduct({ id: selectedProduct!._id, ...updatedProduct }).unwrap();
            if (res?.success) {
                toast.success("Product updated successfully!");
                setModalOpen(false);
            }
        } catch (error) {
            toast.error("Failed to update the product. Please try again.");
            console.error(error);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="max-w-screen-2xl mx-auto mt-10">
            {products.length > 0 ? (
                <>
                    <h1 className="text-2xl text-center font-bold mb-4">All Products</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border">
                            <thead>
                                <tr className="text-center">
                                    <th className="py-2 px-4 border">Image</th>
                                    <th className="py-2 px-4 border">Name</th>
                                    <th className="py-2 px-4 border">Category</th>
                                    <th className="py-2 px-4 border">Inventory</th>
                                    <th className="py-2 px-4 border">Price</th>
                                    <th className="py-2 px-4 border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product?._id} className="text-center">
                                        <td className="py-2 px-4 border">
                                            <img src={product?.image} alt={product?.name} className="w-16 h-16 object-cover mx-auto"/>
                                        </td>
                                        <td className="py-2 px-4 border">{product?.name}</td>
                                        <td className="py-2 px-4 border">{product?.category}</td>
                                        <td className="py-2 px-4 border">{product?.inventory?.quantity}</td>
                                        <td className="py-2 px-4 border">${product?.price.toFixed(2)}</td>
                                        <td className="py-2 px-4 border">
                                            <button
                                                onClick={() => handleEdit(product)}
                                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition m-1"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(product?._id)}
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
                </>
            ) : (
                <div className="flex flex-col justify-center items-center mt-20 space-y-6 p-4">
                    <h1 className="text-4xl font-bold text-gray-700 text-center">No Products Available</h1>
                    <p className="text-lg text-gray-500 text-center">Please add some products to display</p>
                </div>
            )}

            {selectedProduct && (
                <UpdateProductModal
                    product={selectedProduct}
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleUpdateProduct}
                />
            )}
        </div>
    );
};

export default AllProduct;
