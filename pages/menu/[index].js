import { useRouter } from "next/router";
import React from "react";

const DetailProduct = () => {
  const detailMap = localStorage.getItem("detail");
  const parsedDetailMap = JSON.parse(detailMap);
  const addToCart = () => {
    const existingCartData = localStorage.getItem("addToCart");

    if (existingCartData) {
      const cartArray = JSON.parse(existingCartData);
      cartArray.push(parsedDetailMap);
      localStorage.setItem("addToCart", JSON.stringify(cartArray));
    } else {
      localStorage.setItem("addToCart", JSON.stringify([parsedDetailMap]));
    }
  };

  return (
    <div className="detail-box">
      <div className="container detail-product">
        <img
          src={parsedDetailMap?.image}
          className="product-detail-image"
          alt={parsedDetailMap.location}
        />
        <div>
          <h1>{parsedDetailMap.location}</h1>
          <p>{parsedDetailMap.description}</p>
          <p>{parsedDetailMap.price}</p>
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
