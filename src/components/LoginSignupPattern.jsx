import React from "react";
import { motion } from "framer-motion";

const LoginSignupPattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex w-full items-center justify-center bg-base p-12">
      <div className="max-w-md w-full text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className={`aspect-square rounded-2xl bg-primary/10 hover:bg-primary/20 cursor-pointer
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
