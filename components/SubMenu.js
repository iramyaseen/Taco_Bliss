import React, { useState } from "react";
import { MdFilterAlt } from "react-icons/md";

const SubMenu = ({ onCategoryClick }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "Tacos",
    "Entrées",
    "Sides",
    "Light Menu",
    "Dessert",
    "Homemade Drinks",
    "Beverages",
    "House Juices",
  ];
  const handleCategoryClick = (category) => {
    onCategoryClick(category);
    setSelectedCategory(category);
  };
  return (
    <div className="bg-sub-menu">
      <div
        className="container sub-menu-list"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={
                selectedCategory === category
                  ? "selected-menu-sub"
                  : "hover-menu-sub"
              }
            >
              {category}
            </li>
          ))}
        </ul>
        <MdFilterAlt />
      </div>
    </div>
  );
};

export default SubMenu;
