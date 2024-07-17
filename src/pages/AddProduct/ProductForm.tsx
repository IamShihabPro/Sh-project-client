import { useAddProductMutation } from '@/redux/feature/product/productApi';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from "sonner";

type TInventory = {
  quantity: number;
  inStock: boolean;
};

type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  inventory: TInventory;
  image: string;
};

const ProductForm: React.FC = () => {
  const [addProduct] = useAddProductMutation();
    
  const { register, handleSubmit, formState: { errors } } = useForm<TProduct>();

  const onSubmit: SubmitHandler<TProduct> = async (data) => {
    try {
      const res = await addProduct(data).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
        <input
          {...register('name', { required: 'Name is required' })}
          className="w-full p-3 border border-gray-300 rounded-sm shadow-sm"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          className="w-full p-3 border border-gray-300 rounded-sm shadow-sm"
        />
        {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">Price</label>
          <input
            type="number" // Changed to number
            step="0.01" // Allows decimal values
            {...register('price', { 
              required: 'Price is required', 
              valueAsNumber: true // Automatically converts to number
            })}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.price && <span className="mt-1 text-red-500 text-sm">{errors.price.message}</span>}
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">Category</label>
          <input
            {...register('category', { required: 'Category is required' })}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.category && <span className="mt-1 text-red-500 text-sm">{errors.category.message}</span>}
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Image</label>
        <input
          {...register('image', { required: 'Image URL is required' })}
          className="w-full p-3 border border-gray-300 rounded-sm shadow-sm"
        />
        {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Inventory Quantity</label>
        <input
          type="number" // Changed to number
          {...register('inventory.quantity', { 
            required: 'Inventory quantity is required',
            valueAsNumber: true // Automatically converts to number
          })}
          className="w-full p-3 border border-gray-300 rounded-sm shadow-sm"
        />
        {errors.inventory?.quantity && <span className="text-red-500 text-sm">{errors.inventory.quantity.message}</span>}
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">In Stock</label>
        <input
          type="checkbox"
          {...register('inventory.inStock')}
          className="mr-2 leading-tight"
        />
      </div>

      <button 
        type="submit" 
        className="px-4 py-2 bg-indigo-600 text-white rounded-sm shadow-md hover:bg-indigo-600 w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
