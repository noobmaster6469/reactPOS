import React from "react";

const Card = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1605812860427-4024433a70fd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p className="max-h-[50px] overflow-hidden">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full rounded-md">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
