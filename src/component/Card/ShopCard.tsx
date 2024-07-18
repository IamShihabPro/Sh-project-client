import { TProduct } from "@/types/productType";
import { Link } from "react-router-dom";

const ShopCard = ({product}: {product: TProduct}) => {
    return (
        <div className='col-span-1 cursor-pointer group bg-white rounded-sm p-2 my-2 mx-3'>
      <div className='flex flex-col gap-2 w-full'>
        <div className='aspect-square w-full relative overflow-hidden'>
          <img
            className='object-cover h-full w-full group-hover:scale-110 transition'
            src={product?.image}
            alt={product?.name}
          />
          <div className='absolute top-3 right-3'></div>
        </div>

        <div className='font-semibold text-lg'>{product?.name}</div>

        {/* <div className='font-light text-neutral-700'>{product?.description}</div> */}

        <div className='flex flex-row items-center justify-between'>
          <div className='font-semibold'>$ {product?.price}</div>
        </div>
        <Link to={`/products/${product?._id}`} className="text-white bg-black w-full py-2 text-center"> Details</Link>
      </div>
    </div>
    );
};

export default ShopCard;