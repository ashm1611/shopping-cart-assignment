import React, { useState, useEffect, createContext, useReducer,  } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cartReducers } from "../reducers/cartReducer";
import Products from "../server/products/index.get.json";
import Categories from "../server/categories/index.get.json";

const initialState = {
  count: 0,
  products: {},
};

export const GlobalContext = createContext(initialState);

const Context = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducers, initialState);
  const navigate = useNavigate();
  const location = useLocation();

  const filteredCategory = Categories.filter(
    (category) => category.enabled
  ).sort((a, b) => a.order - b.order);

  const [filteredProduct, setFilteredProduct] = useState(Products);

  useEffect(() => {
    if (!location.search) {
      setFilteredProduct(Products);
    }
  }, [location]);

  function handleProduct(id) {
    setFilteredProduct(Products.filter((product) => product.category === id));
    navigate({
      pathname: `/products`,
      search: `?query=${id}`,
    });
    window.scrollTo(0, 0);
  }

  return (
    <GlobalContext.Provider value={{ cartItems, dispatch, filteredProduct, handleProduct, filteredCategory  }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
