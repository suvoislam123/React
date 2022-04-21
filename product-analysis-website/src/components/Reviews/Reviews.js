import React from "react";
import { useReviews } from "../../hooks/useReviews";
import ReviewItem from "../ReviewItem/ReviewItem";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <>
      <h1 className="text-center text-4xl mt-3 md:mt-32">Total reviews : {reviews.length}</h1>
      <div className="reviews mx-auto grid md:grid-cols-2 gap-y-5 md:w-[900px] mt-32">
        {reviews.map((data) => (
          <ReviewItem key={data.id} data={data}></ReviewItem>
        ))}
      </div>
    </>
  );
};

export default Reviews;
