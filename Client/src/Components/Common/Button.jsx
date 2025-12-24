import { forwardRef } from "react";
import clsx from "clsx";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 hover:cursor-pointer";

    const variants = {
      primary: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
      secondary:
        "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
      ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsx(
          base,
          variants[variant],
          sizes[size],
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
