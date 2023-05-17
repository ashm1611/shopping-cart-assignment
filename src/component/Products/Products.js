import React from "react";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import useProducts from "../../Hooks/useProducts";
import Dropdown from "../../common/DropDown/DropdownSelect";
import Sidebar from "../../common/Sidebar/Sidebar";
import Card from "../../common/Card/Card";
import "./Products.scss";

export default function Products() {
  const { filteredCategory, filteredProduct, handleProduct } = useProducts();

  const browserWidth = useMediaQuery("(max-width: 480px)");

  return (
    <main className="product-container">
      {browserWidth ? (
        <Dropdown
          items={[...filteredCategory, { id: "", name: "All Products" }]}
          handleProduct={handleProduct}
          filteredProduct={filteredProduct}
        />
      ) : (
        <Sidebar
          filteredCategory={filteredCategory}
          handleProduct={handleProduct}
        />
      )}
      <main className="product-container__card">
        {filteredProduct.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            imageUrl={product.imageURL}
            name={product.name}
            price={product.price}
            stock={product.stock}
            text={product.description}
          />
        ))}
      </main>
    </main>
  );
}
