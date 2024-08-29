import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ stars, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="flex space-x-1">
      {[...Array(6)].map((_, index) => (
        <FaStar
          className={`text-lg ${
            index < stars ? "text-yellow-500" : "text-zinc-200"
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
