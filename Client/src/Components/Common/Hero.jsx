import { useState } from "react";
import { Card, Button, Modal } from "../index";
import useBackgroundSlice from "../../Hooks/BgHook";

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const { currentBackground, colors, isDark } = useBackgroundSlice();

  return (
    <section
      className={`${currentBackground} relative min-h-screen overflow-hidden transition-colors duration-500`}
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center px-10 pt-32 max-w-7xl mx-auto">
        {/* Left */}
        <div className={`${colors.textColor}`}>
          <span
            className={`inline-flex items-center gap-2 ${colors.cardBg} backdrop-blur px-4 py-1.5 rounded-full text-md font-medium`}
          >
            Your Fitness Journey starts from Here
          </span>

          <h1
            className={`mt-6 text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight`}
          >
            Transform Your Body{" "}
            <span className={isDark ? "text-red-400" : "text-blue-400"}>
              in 90 Days
            </span>
          </h1>

          <p className={`mt-6 max-w-xl ${colors.textLightColor} text-lg`}>
            AI-powered workouts, personalized coaching, and measurable progress
            — all without equipment.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Button size="lg" className={`shadow-xl ${colors.btnPrimary}`}>
              Start Free Trial →
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className={`shadow-xl ${colors.btnSecondary}`}
              onClick={() => setIsDemoOpen(true)}
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-12 flex-wrap">
            <Card
              className={`backdrop-blur rounded-xl p-6 ${colors.cardBg} ${colors.cardText} shadow-lg`}
            >
              <h3 className="text-2xl font-bold">500K+</h3>
              <p className="text-sm text-gray-300 dark:text-gray-400">
                Active Users
              </p>
            </Card>

            <Card
              className={`backdrop-blur rounded-xl p-6 ${colors.cardBg} ${colors.cardText} shadow-lg`}
            >
              <h3 className="text-2xl font-bold">4.9 ★</h3>
              <p className="text-sm text-gray-300 dark:text-gray-400">
                App Rating
              </p>
            </Card>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-white/20 to-transparent blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fitness"
            className="relative rounded-3xl shadow-2xl object-cover w-full"
          />
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        title="Product Demo"
      >
        <p className={isDark ? "text-gray-200" : "text-gray-700"}>
          Preview how FitBody helps you reach your fitness goals faster.
        </p>
      </Modal>
    </section>
  );
}
