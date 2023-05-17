import React from "react";
import "./Image.scss";

export default function useImage({ source, alt, className = "" }) {
  return (
    <img src={source} className={`${className} image-wrapper`} alt={alt} />
  );
}