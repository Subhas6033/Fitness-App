import React from "react";
import {
  Hero,
  FeaturesSection,
  StatsSection,
  TestimonialsSection,
  Button,
} from "../Components/index";
import { MoveRight } from "lucide-react";
import useBackgroundSlice from "../Hooks/BgHook";

const Home = () => {
  const { currentBackground, colors, isDark } = useBackgroundSlice();

  return (
    <>
      <title>Fitness App – Transform Your Body</title>
      <meta
        name="description"
        content="Join thousands achieving their fitness goals with our program. Start your free trial today!"
      />
      <main
        className={`${currentBackground} relative min-h-screen overflow-hidden transition-colors duration-500`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />

        <div className="relative z-10">
          <Hero />
          <FeaturesSection />
          <StatsSection />
          <TestimonialsSection />
          <section
            className={`py-24 ${
              isDark ? "bg-slate-900" : "bg-linear-to-r from-red-500 to-red-600"
            }`}
          >
            <div className="max-w-3xl mx-auto text-center px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Body?
              </h2>
              <p className="text-white text-lg md:text-xl mb-8">
                Join thousands of people achieving their fitness goals. Start
                your free trial today—no credit card required.
              </p>
              <Button
                variant="secondary"
                className="font-semibold px-6 py-3 rounded-full shadow transition"
              >
                Start Your Free Trial
                <span>
                  <MoveRight className="ml-2" />
                </span>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
