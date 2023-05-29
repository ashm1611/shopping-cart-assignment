import React from "react";
import "./Button.scss";

export default function Button({
  child,
  className = "",
  onClick,
  ...props
}) {
  return (
    <button
      className={`${className} button-wrapper`}
      onClick={onClick}
      {...props}
    >
      {child}
    </button>
  );
}
