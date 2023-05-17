import React from "react";
import useProducts from "../../Hooks/useProducts";
import Carousel from "../../common/Carousel/Carousal";
import Section from "../Home/Section";
import "./Home.scss";

export default function Home() {
  const { filteredCategory, handleProduct } = useProducts();

  return (
    <main className="home-container">
      <Carousel />
      {filteredCategory.map((category, index) => (
        <Section
          key={index}
          id={category.id}
          url={category.imageUrl}
          heading={category.name}
          text={category.description}
          button={category.key}
          order={category.order}
          handleProduct={handleProduct}
        />
      ))}
    </main>
  );
}
