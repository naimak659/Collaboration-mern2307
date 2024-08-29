import React, { useEffect, useState } from "react";
import Banner1 from "../../../assets/bannerAssets/Banner1.png";
import Banner2 from "../../../assets/bannerAssets/banner2.jpg";
import Banner3 from "../../../assets/bannerAssets/banner3.jpg";
import Banner4 from "../../../assets/bannerAssets/banner4.jpg";
import Button from "../CommonComponents/Button";

const Banner = () => {
  const arr = [Banner1, Banner2, Banner3, Banner4];
  const [bannerIndex, setbannerIndex] = useState(0);

//   adding custom css for banner bg 
  const bannerbg = {
    backgroundImage: `url(${arr[bannerIndex]})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    width: "100vw",
    left: "50%",
    transform: "translateX(-50%)",
    paddingTop: "300px",
    paddingBottom: "53px",
    zIndex: "1",
  };

// change image arr index by clicking
  const handleDots = (index) => {
    setbannerIndex(index);
  };

// set autoplay by changing 
  const tick = () => {
    setbannerIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % arr.length; // here modulus oparetor helps to reset the nextIndex to 0
      return nextIndex;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(tick, 5000);
    return () => clearInterval(intervalId);// clean up when copmonent will unmount
  }, []);


  return (
    <div style={bannerbg} className="bannerbgbefore">
      <div className="max-w-[950px] m-auto flex flex-col items-center">
        <h1 className="font-inter text-[75px] font-bold leading-[120%] text-white pb-[51px]">
          We Help brands with high quality services
        </h1>
        <p className="font-inter text-[16px] leading-[26px] text-white pb-[40px]">
          There are many variations of passages of Lorem Ipsum available, but
          themajority have suffered alteration in some form, by injected humour,
          or randomised words which don't look.
        </p>
        <Button Content={"Get Started"} todo={() => window.alert("todo")} />
        <div className="flex pt-[92px] gap-x-[2px]">
          {arr.map((_, index) => (
            <a
              key={index}
              className="w-[24px] h-[24px] rounded-full bg-[#4756DF] cursor-pointer"
              onClick={() => {
                handleDots(index);
              }}
            ></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
