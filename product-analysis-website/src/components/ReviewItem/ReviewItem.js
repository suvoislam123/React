import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReviewItem = ({ data }) => {
  const { id, username, body,img,rating } = data;
  console.log(img);
  console.log(rating);

  return (
    <div className="mx-auto border-solid border-2 rounded-lg p-5 border-b-emerald-100 w-[400px] flex">
      <div className="user w-[800px]">
        <img
          className="w-20 rounded-full ring-4 ring-cyan-500"
          src={img}
          alt=""
        />
        <h2>{username}</h2>
        <Rating
          initialRating={parseFloat(rating)}
          emptySymbol={<FontAwesomeIcon icon={faStar} />}
          fullSymbol={
            <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
          }
          readonly
        />
      </div>

      <div className="body">
        <p>{body.length < 80 ? body : body.slice(0, 80)}....</p>
        {/* <button className="text-blue-400 text-xl hover:text-purple-700">
          See More
        </button> */}
      </div>
    </div>
  );
};

export default ReviewItem;
