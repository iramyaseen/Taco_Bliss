import { useRouter } from "next/router";
import React from "react";

const DetailProduct = () => {
  const detailMap = localStorage.getItem("detail");
  const parsedDetailMap = JSON.parse(detailMap);
  const router = useRouter();
  const addToCart = () => {
    // Retrieve existing cart data from localStorage
    const existingCartData = localStorage.getItem("addToCart");

    // Check if there's existing data
    if (existingCartData) {
      // If data exists, append the new data to it
      const cartArray = JSON.parse(existingCartData);
      cartArray.push(parsedDetailMap);
      localStorage.setItem("addToCart", JSON.stringify(cartArray));
    } else {
      // If no existing data, initialize a new array with the new data
      localStorage.setItem("addToCart", JSON.stringify([parsedDetailMap]));
    }

    // Navigate to the desired location
    router.push("/location");
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
