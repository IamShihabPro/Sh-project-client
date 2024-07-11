import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useGetSingleProductQuery, useUpdateProductMutation } from "@/redux/feature/product/productApi";
import { TProduct, TRating } from "@/types/productType";

const RatingModal = ({ product }: { product: TProduct }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const { data, isLoading } = useGetSingleProductQuery(product._id);
  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (rating !== null) {
      try {
        // Get existing ratings or initialize as an empty array
        const existingRatings = data?.ratings || [];

        // Check if the rating already exists
        const alreadyRated = existingRatings.some(r => r.rating === rating);
        if (alreadyRated) {
          console.log("You have already rated this product with the same rating.");
          return;
        }

        // Construct updated ratings array
        const updatedRatings = [...existingRatings, { rating }];

        // Call the mutation to update the product with the new ratings array
        await updateProduct({
          _id: product._id,
          ratings: updatedRatings,
        });

        console.log("Rating added successfully");
        setRating(null); // Reset rating state after successful submission
        // Optionally, close the modal or show a success message here
      } catch (error) {
        console.error("Failed to submit rating:", error);
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Optionally, show a loading indicator while fetching data
  }

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
                  onClick={() => setRating(currentRating)}
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
