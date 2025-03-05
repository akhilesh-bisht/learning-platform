import React from "react";
import { cn } from "../../lib/utils"; // Ensure you have this function

const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 font-medium transition-all rounded-md",
          variant === "outline"
            ? "border border-gray-300 bg-white text-black"
            : "bg-indigo-600 text-white",
          size === "icon" ? "p-2 rounded-full" : "",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };
