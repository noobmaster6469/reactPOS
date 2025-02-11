import React, { useState } from "react";

const CalculateSection = () => {
  // State for storing items and their prices
  const [items, setItems] = useState([
    { name: "Item 1", price: 100 },
    { name: "Item 2", price: 200 },
    { name: "Item 3", price: 150 },
  ]);

  // State for discount percentage
  const [discount, setDiscount] = useState(10);

  // Calculate total cost before discount
  const totalCost = items.reduce((total, item) => total + item.price, 0);

  // Calculate discount amount
  const discountAmount = (totalCost * discount) / 100;

  // Calculate final total after applying discount
  const finalTotal = totalCost - discountAmount;

  return (
    <div className="w-full col-span-2 p-4 bg-accent/5 rounded-lg h-fit">
      <h2 className="text-2xl font-semibold mb-4">POS Summary</h2>

      <div className="mb-4">
        <h3 className="font-medium text-lg">Items</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between py-2">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between py-2">
        <span>Total Cost</span>
        <span>${totalCost}</span>
      </div>

      <div className="flex justify-between py-2">
        <span>Discount ({discount}%)</span>
        <span>-${discountAmount.toFixed(2)}</span>
      </div>

      <div className="flex justify-between py-2 font-semibold text-lg">
        <span>Total After Discount</span>
        <span>${finalTotal.toFixed(2)}</span>
      </div>

      <div className="mt-4">
        <label className="block text-sm">Apply Discount</label>
        <input
          type="number"
          value={discount}
          max={100}
          min={0}
          onChange={(e) => setDiscount(Number(e.target.value))}
          className="input input-bordered w-full mt-2"
        />
      </div>
    </div>
  );
};

export default CalculateSection;
