import { TProduct } from "@/types/productType";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingModal = ({product}: {product: TProduct}) => {
  const [ratings, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here

    console.log("rating:", ratings);
  };

  return (
    <div className="pt-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-gray-900 drop-shadow-xl"
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
                  onClick={() => setRating(currentRating)}
                />
                <FaStar
                  className="mx-1 cursor-pointer"
                  size={30}
                  color={
                    currentRating <= (hover || ratings) ? "#ffc107" : "#e4e5e9"
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
            className="bg-white text-gray-800 w-full font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
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
