import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export const Baner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Link to="" className="p-1 w-full">
        <img
          src="./baner/slide-1.jpg"
          alt="slide"
          className="rounded-lg w-full"
        />
      </Link>
      <Link to="" className="p-1">
        <img
          src="./baner/slide-2.jpg"
          alt="slide"
          className="rounded-lg w-full"
        />
      </Link>
    </Slider>
  );
};
