import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";

const Popular_Items = () => {
  return (
    <div className="popular-items-bg">
      <div className="container popular-items-box">
        <h1>Popular Items</h1>
        <div className="popular-p-img">
          <div className="popular-img">
            <img src="/popular.png" />
            <div className="description-box">
              <p>#1 Popular Item</p>
              <h3>Birria</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <GoPlusCircle />
                <p>$14.99</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "30px",
                  }}
                >
                  <IoHeartOutline />
                  <p>73</p>
                </div>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
          <div className="popular-img">
            <img src="/popular.png" />
            <div className="description-box">
              <p>#1 Popular Item</p>
              <h3>Birria</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <GoPlusCircle />
                <p>$14.99</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "30px",
                  }}
                >
                  <IoHeartOutline />
                  <p>73</p>
                </div>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
          <div className="popular-img">
            <img src="/popular.png" />
            <div className="description-box">
              <p>#1 Popular Item</p>
              <h3>Birria</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <GoPlusCircle />
                <p>$14.99</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "30px",
                  }}
                >
                  <IoHeartOutline />
                  <p>73</p>
                </div>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular_Items;
