import React from "react";
import Carousel from "./ReviewComponent/Carousel";
import data from "../../../../utils/data";

function ClientReview() {
  return (
    <div className="pt-28 pb-32">
      <div className="w-full flex flex-col container items-center mx-auto mb-16 ">
        <div className="text-center">
          <h2 className="font-inter font-bold text-5xl mb-5">
            Some Client Reviews
          </h2>
          <p className="font-inter text-base text-secondary max-w-[620px]">
            There are many variations of passages of Lorem Ipsum available, but
            themajority have suffered alteration in some form.
          </p>
        </div>
        <Carousel data={data} />
      </div>
    </div>
  );
}

export default ClientReview;
