import useBackgroundSlice from "../../Hooks/BgHook";

export default function Card({ children, className = "" }) {
  const { isDark } = useBackgroundSlice();

  return (
    <div
      className={`
        rounded-2xl p-6
        transition-all duration-300
        border
        ${
          isDark
            ? "border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
            : "border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
