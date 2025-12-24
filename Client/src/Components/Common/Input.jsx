import { forwardRef } from "react";
import clsx from "clsx";

const Input = forwardRef(({ label, error, className, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        ref={ref}
        className={clsx(
          "w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition",
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-red-500",
          className
        )}
        {...props}
      />

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
});

export default Input;
