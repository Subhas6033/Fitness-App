import { forwardRef } from "react";
import clsx from "clsx";
import useBackgroundSlice from "../../Hooks/BgHook";

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
    const { colors } = useBackgroundSlice();

    const base =
      "inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 hover:cursor-pointer";

    // Use colors from the hook for theme-aware styling
    const variants = {
      primary: clsx(
        colors.btnPrimary,
        "focus:ring-offset-2 focus:ring-2 focus:ring-offset-transparent"
      ),
      secondary: clsx(
        colors.btnSecondary,
        "focus:ring-offset-2 focus:ring-2 focus:ring-offset-transparent"
      ),
      ghost: clsx(
        "text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
        colors.textColor
      ),
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
