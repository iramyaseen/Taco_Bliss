import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero-bg-img">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>
            Unforgettable Taco <br /> Bliss
          </h1>
          <p>Best Tacos in America</p>
          <button className="out-story">Our Story</button>
          <button className="order-now">Order Now</button>
        </div>
      </div>
      <div className="divider-box">
        <h1>
          Florida, Atlanta, Washington D.C, New <br /> York, North Carolina, and
          growing!
        </h1>
      </div>
      <div className="hero-bottom-img">
        <div className="overlay"></div>
      </div>
    </>
  );
};

export default Hero;
