import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import OrderList from "@/components/OrderList";
import Products from "@/components/Products";
import React, { useState } from "react";

const Index = () => {
  const [isWhiteTheme, setIsWhiteTheme] = useState(true);
  const toggleTheme = () => {
    setIsWhiteTheme(!isWhiteTheme);
  };
  return (
    <div>
      <Banner />
      <Hero />
      <Products />
      <OrderList />
    </div>
  );
};

export default Index;
