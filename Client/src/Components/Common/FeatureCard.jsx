import Card from "./Card";
import Button from "./Button";
import useBackgroundSlice from "../../Hooks/BgHook";

export function FeatureCard({ icon, title, description, onAction }) {
  const { colors, isDark } = useBackgroundSlice();

  return (
    <Card
      className={`
        flex flex-col gap-4
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
        ${colors.cardBg}
      `}
    >
      {/* Icon */}
      <div
        className={`
          w-12 h-12 flex items-center justify-center rounded-xl
          ${
            isDark
              ? "bg-rose-500/20 text-green-400"
              : "bg-blue-100 text-blue-600"
          }
        `}
      >
        {icon}
      </div>

      {/* Title — high contrast, same as Hero */}
      <h3
        className={`text-lg font-semibold ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>

      {/* Description — muted like Hero paragraph */}
      <p
        className={`text-sm leading-relaxed ${
          isDark ? "text-white/70" : "text-gray-600"
        }`}
      >
        {description}
      </p>

      {/* Action */}
      {onAction && (
        <Button
          size="sm"
          className={`self-start mt-2 ${colors.btnPrimary}`}
          onClick={onAction}
        >
          Learn More
        </Button>
      )}
    </Card>
  );
}
