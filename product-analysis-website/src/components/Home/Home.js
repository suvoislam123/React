import React from "react";
import { useNavigate } from "react-router-dom";
import { useReviews } from "../../hooks/useReviews";
import useThreeItem from "../../hooks/useThreeItem";
import ReviewItem from "../ReviewItem/ReviewItem";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const arr = useThreeItem(reviews);
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="grid sm:grid-cols-1 font-sans md:grid-cols-3 mt-20 mx-20">
        <div className="col-span-2">
          <h1 className="text-4xl font-extrabold uppercase text-orange-600 mb-5">All Over the world</h1>
          <h1 className="text-4xl font-extrabold uppercase text-rose-700 mb-3">We are the best</h1>
          <p>
            Yama is one of the most popular bike brand all over the world.Yamaha offers a plethora of high-performance vehicles and transporters across the world. Yamaha is best known for its impressive motors in India, thus becomes one of the leading bike manufacturers in this market. Let’s read on our Indianautosblog to find out more about Yamaha India.
          </p>
          <button className="bg-blue-300 py-3 px-7 mt-12 rounded-lg text-white font-bold hover:text-pink-500">
            See Live Demo
          </button>
        </div>
        <div className="col-span-1">
          <img
            src={
              "https://images.91wheels.com//assets/b_images/gallery/yamaha/yzf-r15-v3-bs6/yamaha-yzf-r15-v3-bs6-0-1598004317.png?width=620"
            }
            alt=""
          />
        </div>
      </div>
      <h1 className="text-center font-extrabold text-4xl  mb-6">
        Customer Review(3)
      </h1>
      <div className="reviews mx-auto grid grid-cols-1 gap-y-12 gap-x-12 md:grid-cols-2 sm:mx-20 md:w-[900px]">
        {arr.map((arr) => (
          <ReviewItem key={arr?.id} data={arr}></ReviewItem>
        ))}
      </div>
      <div className="text-center">
        <button onClick={()=>navigate('/reviews')} className="text-xl w-60 mt-14 text-blue-50 bg-rose-500 px-7 rounded py-3">
          See All
        </button>
      </div>
    </div>
  );
};

export default Home;
