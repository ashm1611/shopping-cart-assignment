import React, { useState } from "react";
import ImageData from "../../server/banners/index.get.json";
import Image from "../Image/Image";
import Button from "../Button/Button";
import "./Carousal.scss";

export default function Carousal() {
  const [curr, setCurr] = useState(1);
  console.log("image data", ImageData)
  const length = ImageData.length;

  const handleSlide = (slideOrder) => {
    setCurr(slideOrder);
  };

  return (
    <section className="carousel">
      <div className="carousel__container">
        {ImageData.map((data) => { 
          console.log(data.order === curr)
          return (
          <div
            key={data.id}
            className={
              data.order === curr
                ? "carousel__container__slide active"
                : "carousel__container__slide"
            }
          >
            {data.order === curr && (
              <Image
                source={data.bannerImageUrl}
                alt={data.bannerImageAlt}
                className={"carousel__container__slide__image"}
              />
            )}
          </div>
        )
    })}
      </div>
      <button
        className={"carousel__left-button"}
        onClick={() => handleSlide(curr === 1 ? length : curr - 1)}
      >
        Prev
      </button>
      <button
        className={"carousel__right-button"}
        onClick={() => handleSlide(curr === length ? 1 : curr + 1)}
      >
        Next
      </button>
      <div className="carousel__nav">
        {ImageData.map((data) => (
          <Button
            key={data.id}
            className={
              data.order === curr
                ? "carousel__nav__dots dots-active"
                : "carousel__nav__dots"
            }
            onClick={() => handleSlide(data.order)}
            aria-label={data.bannerImageAlt}
          ></Button>
        ))}
      </div>
    </section>
  );
}
