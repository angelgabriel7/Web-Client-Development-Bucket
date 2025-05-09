// src/components/Card/index.tsx
import { ReactNode } from "react";
import classNames from "classnames";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div 
      className={classNames(
        "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;