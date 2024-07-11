// import { useAddProductMutation } from '@/redux/api/baseApi';
import { useAddProductMutation } from '@/redux/feature/product/productApi';
import React from 'react';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { ImCross } from "react-icons/im";



type TVariant = {
  image: string;
};

type TInventory = {
  quantity: number;
  inStock: boolean;
};

type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: TInventory;
  image: string;
};

const ProductForm: React.FC<{ product?: TProduct }> = () => {

  const [addProduct] = useAddProductMutation()
    
  const { register, control, handleSubmit, formState: { errors } } = useForm<TProduct>({
  });

  const { fields: variantFields, append: appendVariant, remove: removeVariant } = useFieldArray({
    control,
    name: "variants"
  });

  const { fields: tagFields, append: appendTag, remove: removeTag } = useFieldArray({
    control,
    name: "tags"
  });

  const onSubmit: SubmitHandler<TProduct> = async (data) => {
    data.price = parseFloat(data.price.toString());
    data.inventory.quantity = parseFloat(data.inventory.quantity.toString());
    console.log(data);
    try {
      const res = await addProduct(data)
      console.log(res)
    } catch (error) {
      console.error(error)
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
            type="number"
            {...register('price', { required: 'Price is required' })}
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
        <label className="block mb-2 text-sm font-medium text-gray-700">Tags</label>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
            {tagFields.map((field, index) => (
            <div key={field.id} className="flex-grow relative mb-2 sm:mb-0">
                <input
                {...register(`tags.${index}`, { required: 'Tag is required' })}
                className="w-full p-3 border border-gray-300 rounded-sm shadow-sm pr-12"
                />
                <button 
                type="button" 
                onClick={() => removeTag(index)} 
                className="absolute right-2 top-2 p-2 text-gray-800 font-bold"
                >
                <ImCross/>
                </button>
            </div>
            ))}
        </div>
        <button 
            type="button" 
            onClick={() => appendTag('')} 
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-sm shadow-md hover:bg-blue-600"
        >
            Add Tag
        </button>
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
          type="number"
          {...register('inventory.quantity', { required: 'Inventory quantity is required' })}
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

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Variants</label>
        {variantFields.map((field, index) => (
          <div key={field.id} className="flex items-center space-x-2 mb-2">
            <input
              {...register(`variants.${index}.image`, { required: 'Image URL is required' })}
              className="w-full p-3 border border-gray-300 rounded-sm shadow-sm"
            />
            <button type="button" onClick={() => removeVariant(index)} className="px-3 py-2 text-black">
            <ImCross/>
            </button>
          </div>
        ))}
        <button type="button" onClick={() => appendVariant({ image: '' })} className="px-4 py-2 bg-blue-600 text-white rounded-sm shadow-md hover:bg-blue-600">
          Add More Image
        </button>
      </div>

      <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-sm shadow-md hover:bg-indigo-600 w-full">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
