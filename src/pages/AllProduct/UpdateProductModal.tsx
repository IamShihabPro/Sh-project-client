import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';

interface IUpdateProductModalProps {
    product: {
        name: string;
        description: string;
        price: number;
        category: string;
        inventory: {
            quantity: number;
            inStock: boolean;
        };
        image: string;
    };
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: any) => void;
}

const UpdateProductModal: React.FC<IUpdateProductModalProps> = ({ product, isOpen, onClose, onSubmit }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        inventory: {
            quantity: '',
            inStock: false,
        },
        image: '',
    });

    useEffect(() => {
        if (product) {
            setFormValues({
                name: product.name,
                description: product.description,
                price: product.price.toFixed(2),
                category: product.category,
                inventory: {
                    quantity: product.inventory.quantity.toString(),
                    inStock: product.inventory.inStock,
                },
                image: product.image,
            });
        }
    }, [product]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormValues(prev => ({
                ...prev,
                inventory: {
                    ...prev.inventory,
                    inStock: checked,
                },
            }));
        } else if (name.startsWith('inventory')) {
            setFormValues(prev => ({
                ...prev,
                inventory: {
                    ...prev.inventory,
                    [name.split('.')[1]]: value,
                },
            }));
        } else {
            setFormValues(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const submitData = {
            ...formValues,
            price: parseFloat(formValues.price),
            inventory: {
                quantity: parseInt(formValues.inventory.quantity),
                inStock: formValues.inventory.inStock,
            },
        };
        onSubmit(submitData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg overflow-auto max-h-[80vh]">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold mb-4">Update Product</h2>
                    <button onClick={onClose} className="top-2 right-2 text-gray-600">
                        <ImCross />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                        <input
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-sm"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={formValues.description}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-sm resize-none"
                            rows={4}
                            required
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Price</label>
                        <input
                            name="price"
                            type="number" // Changed to number for better input handling
                            value={formValues.price}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-sm"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Category</label>
                        <input
                            name="category"
                            value={formValues.category}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-sm"
                            required
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Image</label>
                        <input
                            name="image"
                            value={formValues.image}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-sm"
                            required
                        />
                    </div>

                    {/* Inventory Quantity */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Inventory Quantity</label>
                        <input
                            name="inventory.quantity"
                            type="number"
                            value={formValues.inventory.quantity}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-sm"
                            required
                        />
                    </div>

                    {/* In Stock */}
                    <div className="flex items-center">
                        <input
                            name="inventory.inStock"
                            type="checkbox"
                            checked={formValues.inventory.inStock}
                            onChange={handleChange}
                            className="mr-2 leading-tight"
                        />
                        <label className="text-sm text-gray-700">In Stock</label>
                    </div>

                    <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-sm shadow-md hover:bg-indigo-600 w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProductModal;
