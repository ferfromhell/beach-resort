import React from "react";

export default function Banner({ title, subTittle, children }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subTittle}</p>
      {children}
    </div>
  );
}
