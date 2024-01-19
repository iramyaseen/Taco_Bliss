import React, { useState } from "react";
import List, { entrees, tacos } from "./List_JSON";
import { GoPlusCircle } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import SubMenu from "./SubMenu";
import Popular_Items from "./Popular_Items";
import { Router, useRouter } from "next/router";

const List_Item = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [fillterType, selecteFillterType] = useState(null);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredList = selectedCategory
    ? List.filter((item) => item.type === selectedCategory)
    : List;
  const uniqueTypes = [...new Set(List.map((item) => item.type))];
  const router = useRouter();
  const detailProduct = (details, index) => {
    router.push(`/menu/${index}`);
    localStorage.setItem("detail", JSON.stringify(details));
  };

  return (
    <>
      <SubMenu onCategoryClick={handleCategoryClick} />
      <Popular_Items />
      <div className="list-product-box padding-box">
        {uniqueTypes.map((type) => (
          <div key={type} className="container">
            {/* {filteredList ? "" : } */}
            <p className="type-padding">{type}</p>
            <div className="list-product-container">
              {filteredList
                .filter((item) => item.type === type)
                .map((item, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: "50px",
                    }}
                  >
                    <div
                      className="list-item-box details-product"
                      onClick={() =>
                        detailProduct(item?.details, item?.details?.id)
                      }
                    >
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
                        <img
                          src={item.image}
                          style={{ borderRadius: "8px" }}
                          alt={`Product ${index}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List_Item;
