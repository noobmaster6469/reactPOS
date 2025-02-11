import React from "react";
import Card from "./Card";

const Products = () => {
  return (
    <div className="col-span-3 grid grid:col-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-2 rounded-md">
      {Array.from({ length: 15 }, (_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default Products;
