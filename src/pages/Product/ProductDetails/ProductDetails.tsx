import { useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { TProduct, TVariant } from "@/types/productType";
import { TCart } from "@/types/cartType";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/feature/cart/cartSlice";
import { useGetSingleProductQuery } from "@/redux/feature/product/productApi";
import Loader from "@/component/Loader/Loader";
import RatingModal from "@/component/Modal/RatingModal";
import { toast } from "sonner";
import Magnifier from './Magnifier';

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleProductQuery(id as string);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !data) {
    return <p>Failed to load product details.</p>;
  }

  const product = data.data;

  const calculateAverageRating = (ratings: { rating: number }[]) => {
    const totalRatings = ratings.length;
    const sumRatings = ratings.reduce((acc, curr) => acc + curr.rating, 0);
    return totalRatings ? (sumRatings / totalRatings) : 0;
  };

  const averageRating = calculateAverageRating(product?.ratings);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddToCart = (product: TProduct) => {
    const cartItem: TCart = {
      productId: product._id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      quantity: 1
    };
    dispatch(addToCart(cartItem));
    toast.success("Item added to cart");
  };

  return (
    <div className="container mx-auto p-4 mt-28">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 flex flex-col items-center mx-2">
          <Magnifier src={product?.image} alt={product?.name} zoom={3} />
          {product?.variants?.length > 0 && (
            <div className="mt-6 mx-auto">
              <div className="flex gap-2 p-2 justify-center items-center mx-2">
                {product?.variants?.slice(0, 4).map((variant: TVariant, index: number) => (
                  <img
                    key={index}
                    src={variant.image}
                    alt={`Variant ${index + 1}`}
                    className="w-16 h-16 object-cover shadow-sm"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="lg:w-1/2 flex flex-col p-6 bg-white rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
          <p className="text-gray-700 mb-6">{product?.description}</p>
          <div className="flex items-center gap-2 mb-4">
            <Rating style={{ maxWidth: 70 }} value={averageRating} readOnly />
            <span className="text-gray-500">({product?.ratings.length})</span>
          </div>
          <div className="flex items-center mb-6">
            <p className="text-2xl text-gray-500 font-medium mr-2">Price:</p>
            <p className="text-2xl text-red-500 font-bold">${product?.price}</p>
          </div>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-white text-gray-600 px-6 py-3 text-lg border border-gray-600 hover:bg-gray-900 hover:text-white transition duration-300 ease-in-out mt-6"
          >
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
              className="mt-6 text-center font-medium bg-gray-900 text-white px-4 py-2"
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
              aria-label="Close Modal"
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
