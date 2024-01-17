import React from "react";
import List from "./List_JSON";
import { GoPlusCircle } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";

const List_Item = () => {
  return (
    <div className="list-product-box">
      <div className="container list-product-container">
        {List?.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <div>
                  <div className="list-item-box">
                    <div className="list-item-description">
                      <h3>{item.location}</h3>
                      <p>{item.description}</p>
                      <div>
                        <GoPlusCircle />
                        <span>{item.price}</span>
                      </div>
                      <div>
                        <IoHeartOutline />
                        <span>{item.like}</span>
                      </div>
                    </div>
                    <div>
                      <img src={item.image} style={{ borderRadius: "8px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List_Item;
