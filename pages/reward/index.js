import React from "react";
import { IoHeartCircleOutline } from "react-icons/io5";

const Index = () => {
  return (
    <div className="custom-bg text-white">
      <div className="container">
        <h2>54</h2>
        <p>Hearts Balance</p>
        <h5>Rewards you can get with hearts</h5>
        <div className="heart-product d-flex justify-between">
          <div className="d-flex">
            <div>
              <img src="./product1.png" width={100} />
            </div>
            <div>
              <h4>Chicken Wrap</h4>
              <p className="m-0">200 hearts</p>
            </div>
          </div>
          <div>
            <IoHeartCircleOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
