import React from "react";
import { FeatureCard } from "../index";
import {
  Brain,
  HeartPulse,
  LineChart,
  Users,
  Dumbbell,
  Salad,
} from "lucide-react";
import useBackgroundSlice from "../../Hooks/BgHook";

const cardData = [
  {
    title: "AI-Powered Workouts",
    icon: Brain,
    description:
      "Get personalized workout plans that adapt to your fitness level and goals.",
  },
  {
    title: "Health Tracking",
    icon: HeartPulse,
    description:
      "Monitor heart rate, calories, and progress with advanced analytics.",
  },
  {
    title: "Progress Analytics",
    icon: LineChart,
    description:
      "Visualize your improvements with detailed charts and milestone celebrations.",
  },
  {
    title: "Community Support",
    icon: Users,
    description:
      "Connect with millions of users, share wins, and stay motivated together.",
  },
  {
    title: "Live Coaching",
    icon: Dumbbell,
    description:
      "Get expert tips and form corrections from certified fitness trainers.",
  },
  {
    title: "Meal Planning",
    icon: Salad,
    description:
      "Sync your workouts with nutrition plans tailored to your goals.",
  },
];

export default function FeaturesSection() {
  const { colors } = useBackgroundSlice();

  return (
    <section className="relative py-24 max-w-7xl mx-auto px-6" id="features">
      <div className="text-center mb-16">
        <h2
          className={`text-4xl lg:text-5xl font-extrabold mb-4 ${colors.textColor}`}
        >
          Everything You Need to Succeed
        </h2>
        <p className={`max-w-2xl mx-auto text-lg ${colors.textLightColor}`}>
          Comprehensive tools and features designed to support your entire
          fitness journey.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((item, index) => {
          const Icon = item.icon;
          return (
            <FeatureCard
              key={index}
              icon={<Icon className="w-6 h-6" />}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
}
