import React from "react";
import { Hero, FeatureCard, Button, Card } from "../Components/index";
import {
  Brain,
  HeartPulse,
  LineChart,
  Users,
  Dumbbell,
  Salad,
  Check,
} from "lucide-react";
import useBackgroundSlice from "../Hooks/BgHook";

const Home = () => {
  const { currentBackground, colors, isDark } = useBackgroundSlice();

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

  return (
    <main
      className={`${currentBackground} relative min-h-screen overflow-hidden transition-colors duration-500`}
    >
      {/* Global background glow (same as Hero) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />

      {/* Page Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <section className="relative py-24 max-w-7xl mx-auto px-6">
          {/* Section Header */}
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

          {/* Feature Cards Grid */}
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
        <section className="relative py-28 overflow-hidden">
          <div
            className={`absolute inset-0 ${
              isDark ? "bg-gray-900/70" : "bg-rose-50"
            } transition-colors`}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div>
              <h2
                className={`text-4xl lg:text-5xl font-extrabold mb-6 ${colors.textColor}`}
              >
                See Real Results
                <br />
                <span className={isDark ? "text-rose-400" : "text-blue-500"}>
                  in Real Time
                </span>
              </h2>

              <p className={`text-lg max-w-xl mb-10 ${colors.textLightColor}`}>
                Track your progress with detailed analytics, measure
                improvements, and celebrate every milestone on your fitness
                journey.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-5 mb-10">
                {[
                  "Personalized workouts adjusted daily based on your performance",
                  "No gym membership required—train anywhere, anytime",
                  "Real-time form feedback with AI computer vision",
                  "Nutrition guidance integrated with your fitness goals",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span
                      className={`mt-1 flex items-center justify-center w-6 h-6 rounded-full ${
                        isDark
                          ? "bg-rose-500/20 text-rose-400"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      <Check className="w-4 h-4" />
                    </span>
                    <span className={`${colors.textLightColor}`}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button size="lg" className={`${colors.btnPrimary}`}>
                View Live Dashboard →
              </Button>
            </div>

            {/* Right Card / Image */}
            <Card
              className={`
            relative flex items-center justify-center
            p-10 rounded-3xl shadow-2xl
            ${colors.cardBg}
          `}
            >
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-white/20 to-transparent blur-2xl pointer-events-none" />

              <img
                src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=900&auto=format&fit=crop"
                alt="Fitness Analytics"
                className="relative rounded-2xl shadow-xl max-h-[480px] object-cover"
              />
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
