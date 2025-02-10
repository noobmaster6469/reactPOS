import React from "react";
import { motion } from "motion/react";

const LoginSignupPattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex w-full items-center justify-center bg-base-200 p-12 ">
      <div className="max-w-md w-full text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <motion.div
              drag
              whileDrag={{
                scale: 0.8,
              }}
              dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 hover:bg-primary/20 cursor-pointer ${
                i % 2 !== 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default LoginSignupPattern;
