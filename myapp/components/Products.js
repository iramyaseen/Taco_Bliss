import React from "react";
import Product from "./product";

const Products = () => {
  return (
    <div className="product-box">
      <div className="container">
        <Product
          image="/product1.png"
          heading="Less Talkin More Tacos!"
          description="Starting your own restaurant from scratch is quite a challenging feat and the restaurant industry has one of the highest failure rates for doing so. With a Talkin’ Tacos franchise we have already laid the groundwork, have best of class technology and systems in place, a proven concept and track record of success, and all the support you will need from our team with many years of experience in the industry."
        />
        <Product
          changeDirection={false}
          image="/product2.png"
          heading="Less Talkin More Tacos!"
          description="Starting your own restaurant from scratch is quite a challenging feat and the restaurant industry has one of the highest failure rates for doing so. With a Talkin’ Tacos franchise we have already laid the groundwork, have best of class technology and systems in place, a proven concept and track record of success, and all the support you will need from our team with many years of experience in the industry."
        />
        <Product
          image="/product3.png"
          heading="Less Talkin More Tacos!"
          description="Starting your own restaurant from scratch is quite a challenging feat and the restaurant industry has one of the highest failure rates for doing so. With a Talkin’ Tacos franchise we have already laid the groundwork, have best of class technology and systems in place, a proven concept and track record of success, and all the support you will need from our team with many years of experience in the industry."
        />
        <Product
          changeDirection={false}
          image="/product4.png"
          heading="Less Talkin More Tacos!"
          description="Starting your own restaurant from scratch is quite a challenging feat and the restaurant industry has one of the highest failure rates for doing so. With a Talkin’ Tacos franchise we have already laid the groundwork, have best of class technology and systems in place, a proven concept and track record of success, and all the support you will need from our team with many years of experience in the industry."
        />
      </div>
    </div>
  );
};

export default Products;
