import React from "react";

const DetailProduct = () => {
  const detailMap = localStorage.getItem("detail");
  const parsedDetailMap = JSON.parse(detailMap);
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
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
