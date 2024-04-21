import React from "react";
import "./Card.css";

type Props = {
  companyName: string;
  ticker: string;
  price: number;
};

const Card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className="card">
      <div className="details">
        <h2>{companyName}</h2>
        <h3>{ticker}</h3>
        <p>${price}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quos
        inventore eligendi error quaerat esse ut fugit, a eaque, itaque
        architecto recusandae? Perferendis eaque dolor temporibus alias cum et.
        Repudiandae.
      </p>
    </div>
  );
};

export default Card;
