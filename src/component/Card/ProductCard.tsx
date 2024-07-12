// import { FaEye } from "react-icons/fa";
import { TProduct } from "@/types/productType";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ProductCard = ({product}: {product: TProduct}) => {

  const calculateAverageRating = (ratings: { rating: number }[]) => {
    const totalRatings = ratings.length;
    const sumRatings = ratings.reduce((acc, curr) => acc + curr.rating, 0);
    return totalRatings ? (sumRatings / totalRatings) : 0;
  };

  const averageRating = calculateAverageRating(product?.ratings);
  
    return (
        <div className='col-span-1 cursor-pointer group bg-white rounded-sm p-2 my-2 mx-3'>
      <Link to={`/products/${product?._id}`} className='flex flex-col gap-2 w-full'>
        <div className='aspect-square w-full relative overflow-hidden'>
          <img
            className='object-cover h-full w-full group-hover:scale-110 transition'
            src={product?.image}
            alt={product?.name}
          />
          <div className='absolute top-3 right-3'></div>
        </div>

        <div className='font-semibold text-lg'>{product?.name}</div>

        <div className='font-light text-neutral-700'>{product?.description}</div>

        <div className='flex flex-row items-center justify-between'>
          <div className='font-semibold'>$ {product?.price}</div>
          <div className="flex items-center gap-2">
            <Rating style={{ maxWidth: 70 }} value={averageRating} readOnly />
            <span className="text-gray-500">({product?.ratings.length})</span>
          </div>
        </div>
      </Link>
    </div>
    );
};

export default ProductCard;