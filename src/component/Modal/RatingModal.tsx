import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAddRatingsMutation } from "@/redux/feature/product/productApi";
import { TProduct } from "@/types/productType";
import { toast } from "sonner";

const RatingModal = ({ product }: { product: TProduct }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [addRatings] = useAddRatingsMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(rating)
    console.log(product)

    if(rating){
      try {
        const res = await addRatings({_id: product?._id, rating}).unwrap();
        if (res?.success) {
          toast.success(res?.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  return (
    <div className="pt-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-gray-900 drop-shadow-xl rounded-lg"
      >
        <div className="flex justify-center text-center items-center ml-16">
          {[...Array(5)].map((_, i) => {
            const currentRating = i + 1;
            return (
              <label key={i} className="flex justify-center items-center">
                <input
                  type="radio"
                  name="rating"
                  className="hidden"
                  value={currentRating}
                  onChange={() => setRating(currentRating)} // Change here
                />
                <FaStar
                  className="mx-1 cursor-pointer"
                  size={30}
                  color={
                    currentRating <= (hover || rating || 0) ? "#ffc107" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="bg-white text-gray-800 w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RatingModal;
