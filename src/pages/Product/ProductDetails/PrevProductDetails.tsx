import { useState } from "react";
import Loader from "@/component/Loader/Loader";
import RatingModal from "@/component/Modal/RatingModal";
import { useGetSingleProductQuery } from "@/redux/feature/product/productApi";
import { useParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { TProduct } from "@/types/productType";
import { useAddCartMutation } from "@/redux/feature/cart/cartApi";
import { toast } from "sonner";


const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id as string);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addCart] = useAddCartMutation()

  if (isLoading) {
    return <Loader />;
  }

  const { data: product } = data;

  
  const calculateAverageRating = (ratings: { rating: number }[]) => {
    const totalRatings = ratings.length;
    const sumRatings = ratings.reduce((acc, curr) => acc + curr.rating, 0);
    return totalRatings ? (sumRatings / totalRatings) : 0;
  };
  const averageRating = calculateAverageRating(product?.ratings);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = async (product: TProduct) =>{
    const cartPayload = {
      productId: product._id,
    };
    try {
      const res = await addCart(cartPayload).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container mx-auto p-4 mt-28">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg max-w-lg"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center p-6 bg-white rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>

          <p className="text-gray-700 mb-6">{product?.description}</p>
          <div className="flex items-center gap-2">
            <Rating style={{ maxWidth: 70 }} value={averageRating} readOnly />
            <span className="text-gray-500">({product?.ratings.length})</span>
          </div>
          <div className="flex items-center mb-6">
            <p className="text-2xl text-gray-500 font-medium mr-2">Price:</p>
            <p className="text-2xl text-red-500 font-bold">${product?.price}</p>
          </div>

          <button onClick={()=> handleAddToCart(product)} className="bg-white text-gray-600 px-6 py-3 text-lg rounded-sm border border-gray-600 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out mt-6">
            Add To Cart
          </button>

          <div className="mt-6">
            <p className="text-lg">
              <span className="font-bold">Category:</span>
              <span className="uppercase"> {product?.category}</span>
            </p>
            {product?.tags && (
              <p className="text-lg mt-2 text-blue-500">
                <span className="font-bold text-black mr-4">Tags: </span>
                {product?.tags.join(", ")}
              </p>
            )}
            <button
              onClick={handleOpenModal}
              className="mt-4 text-center font-medium bg-gray-700 text-white px-4 py-2"
            >
              Rate Product
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white px-4 py-6 rounded-lg shadow-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500"
            >
              <IoMdClose className="w-6 h-6" />
            </button>
            <RatingModal product={product} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
