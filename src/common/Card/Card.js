import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import Button from "../Button/Button";
import Image from "../Image/Image";
import "./Card.scss";

export default function Card({ name, imageURL, prc, inStock, txt, id }) {
  const browserWidth = useMediaQuery("(min-width: 769px)");
  const {
    dispatch,
    cartItems: { products },
  } = useContext(GlobalContext);

  function addItemToCart() {
    if (!products[id]) {
      dispatch({
        type: "ADD_ITEM",
        product: {
          [id]: {
            id,
            imageURL,
            name,
            prc,
            inStock,
            quantity: 1,
          },
        },
      });
    } else {
      dispatch({
        type: "EDIT_ITEM",
        id: id,
      });
    }
  }

  return (
    <section className="card-container">
      <h2 className="card-container__title">{name}</h2>
      <figure className="card-container__image">
        <Image
          source={imageURL}
          alt={`Image of ${name}`}
          className={"product-image"}
        />
      </figure>
      <p className="card-container__text" title={txt}>
        {txt}
      </p>
      <section className="card-container__section">
        {browserWidth ? (
          <>
            <p className="card-container__section__price">MRP Rs.{prc}</p>
            <Button
              onClick={() => addItemToCart()}
              className={"card-container__section__buy-button"}
            >
              Buy Now
            </Button>
          </>
        ) : (
          <Button
            onClick={() => addItemToCart()}
            className={"card-container__section__buy-button"}
          >
            Buy Now @ Rs.{prc}
          </Button>
        )}
      </section>
    </section>
  );
}
