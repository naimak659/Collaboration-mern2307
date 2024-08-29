import React, { useState } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
import { PiQuotesBold } from "react-icons/pi";
import StarRating from "./StarReview";

function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Todo: move the carousel to next slide
   */
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };
  /**
   * Todo: move the carousel to previous slide
   */
  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    // carousel part
    <div className="relative w-[1300px] mx-auto">
      <div className="overflow-hidden relative ">
        <div
          className="flex items-center justify-start  transition-transform duration-1000 ease-in-out "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((item, index) => {
            return (
              <div className=" flex gap-2">
                {item.map((review, j) => {
                  console.log(review);

                  return (
                    <div key={j} className="w-full">
                      <div className="bg-white duration-500 w-[427px] px-14 rounded-2xl my-10 py-6 hover:bg-[#F4EFEF]">
                        <div className="">
                          <div className="text-6xl w-fit rotate-180">
                            <PiQuotesBold />
                          </div>
                          <p className="text-secondary font-inter">
                            {review.comment}
                          </p>

                          <StarRating stars={review.star} />
                        </div>
                        <div className="flex items-center">
                          <picture>
                            <img
                              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                              alt=""
                              className="w-10 h-10 rounded-full"
                            />
                          </picture>
                          <div className="flex gap-[2px] flex-col">
                            <p className="text-primary">{review.author}</p>
                            <p>{review.profession}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={previousSlide}
        className="absolute top-1/2 -left-5 transform -translate-y-1/2 text-4xl  rounded-full"
      >
        <IoIosArrowDropleftCircle />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-5 transform -translate-y-1/2  text-4xl rounded-full"
      >
        <IoIosArrowDroprightCircle />
      </button>

      {/* Indicators */}
    </div>
  );
}

export default Carousel;
