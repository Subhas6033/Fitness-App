import React from "react";
import useBackgroundSlice from "../../Hooks/BgHook";

export default function Footer() {
  const { colors, isDark } = useBackgroundSlice();

  return (
    <footer
      className={`${isDark ? "bg-black" : "bg-gray-100"} ${
        colors.textLightColor
      }mt-2 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className={`${colors.textColor} text-xl font-bold`}>FitBody</h2>
          <p className="mt-4 text-sm">
            Transform your body with AI-powered fitness.
          </p>
        </div>

        <div>
          <h3 className={`${colors.textColor} font-semibold mb-3`}>Product</h3>
          <ul className="space-y-2 text-sm">
            <li className={colors.linkColor}>Features</li>
            <li className={colors.linkColor}>Pricing</li>
            <li className={colors.linkColor}>Testimonials</li>
          </ul>
        </div>

        <div>
          <h3 className={`${colors.textColor} font-semibold mb-3`}>Legal</h3>
          <ul className="space-y-2 text-sm">
            <li className={colors.linkColor}>Privacy Policy</li>
            <li className={colors.linkColor}>Terms</li>
          </ul>
        </div>
      </div>

      <div
        className={`text-center text-sm py-4 border-t ${
          isDark ? "border-gray-700" : "border-gray-300"
        }`}
      >
        © 2025 FitBody. All rights reserved.
      </div>
    </footer>
  );
}
