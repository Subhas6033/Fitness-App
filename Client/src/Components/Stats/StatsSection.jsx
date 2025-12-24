import React from "react";
import useBackgroundSlice from "../../Hooks/BgHook";

const stats = [
  { value: "500K+", label: "Active Users" },
  { value: "10M+", label: "Workouts Completed" },
  { value: "95%", label: "Goal Achievement Rate" },
];

export default function StatsSection() {
  const { isDark } = useBackgroundSlice();

  return (
    <section
      className={`${
        isDark
          ? "text-white"
          : "text-slate-50 bg-linear-to-r from-red-500 to-red-600"
      } py-16`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-around items-center gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold">{stat.value}</h2>
            <p className="mt-2 text-lg md:text-xl">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
