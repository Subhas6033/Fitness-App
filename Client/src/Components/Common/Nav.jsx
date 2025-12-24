import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Zap, Droplet } from "lucide-react";
import { Button } from "../index";
import useBackgroundSlice from "../../Hooks/BgHook";

export default function Navbar() {
  const { currentThemeKey, changeBackground, colors } = useBackgroundSlice();

  // Map theme keys to icons
  const themeIcons = {
    default: Zap,
    heroGradient: Droplet,
    light: Sun,
    dark: Moon,
  };

  const ThemeIcon = themeIcons[currentThemeKey] || Sun;

  // Cycle through themes
  const themes = ["light", "dark"];
  const handleThemeChange = () => {
    const currentIndex = themes.indexOf(currentThemeKey);
    const nextIndex = (currentIndex + 1) % themes.length;
    changeBackground(themes[nextIndex]);
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md shadow-sm transition-colors duration-500 ${colors.navbarBg}`}
    >
      <nav className="flex items-center justify-between h-16 max-w-7xl mx-auto px-6">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold transition-colors duration-300 ${
            currentThemeKey === "dark" ? "text-white" : "text-black"
          }`}
        >
          FitBody
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <Link
              to="/"
              className={`${colors.linkColor} transition-colors duration-300`}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`${colors.linkColor} transition-colors duration-300`}
            >
              Benefits
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`${colors.linkColor} transition-colors duration-300`}
            >
              Testimonials
            </Link>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <Button
            onClick={handleThemeChange}
            className={`p-3 rounded-full border ${
              currentThemeKey === "dark"
                ? "border-white/20 text-white"
                : "border-gray-300 text-gray-900"
            } hover:bg-white hover:text-red-600 transition flex items-center justify-center`}
            title="Change Theme"
          >
            <ThemeIcon className="w-5 h-5" />
          </Button>

          {/* Get Started */}
          <Link
            to="/login"
            className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
