import React from "react";
import Options from "../components/Options";
import Products from "../components/Products";
import CalculateSection from "../components/CalculateSection";

const HomePage = () => {
  return (
    <div className="grid grid-cols-5 md:grid-cols-6 gap-4 p-4">
      <Options />
      <Products />
      <CalculateSection />
    </div>
  );
};

export default HomePage;
