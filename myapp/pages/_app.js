import React, { useState } from "react";
import Header from "@/components/Header";
import "../style/global.css";

const HomeDashboard = () => {
  const [isWhiteTheme, setIsWhiteTheme] = useState(true);
  const toggleTheme = () => {
    setIsWhiteTheme(!isWhiteTheme);
  };
  return (
    <div>
      <Header isWhiteTheme={isWhiteTheme} />
    </div>
  );
};

export default HomeDashboard;
