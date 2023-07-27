import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`rounded-lg border-4 bg-origin-blue/70 ${className} px-2 py-2`}
    >
      {children}
    </div>
  );
};

export default Box;
