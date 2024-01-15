import React from "react";

const Product = ({ image, heading, description, changeDirection }) => {
  return (
    <div
      className={`${
        changeDirection === false ? "change-direction" : "product-id"
      }`}
    >
      <div className="product-id-img">
        <img src={image} />
      </div>
      <div
        className="product-id-description"
        style={{
          marginRight: `${changeDirection == false ? "70px" : "0"}`,
          marginLeft: `${changeDirection == false ? "0px" : "70px"}`,
        }}
      >
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Product;
