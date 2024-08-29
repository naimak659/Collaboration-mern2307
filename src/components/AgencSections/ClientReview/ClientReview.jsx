import React from "react";
import Carousel from "./ReviewComponent/Carousel";
import data from "../../../../utils/data";

function ClientReview() {
  return (
    <div className="w-full flex flex-col container items-center mx-auto ">
      <div>ClientReview</div>
      <Carousel data={data} />
    </div>
  );
}

export default ClientReview;
