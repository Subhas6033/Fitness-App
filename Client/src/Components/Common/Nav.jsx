import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Zap, Droplet, Menu, X } from "lucide-react";
import { Button } from "../index";
import useBackgroundSlice from "../../Hooks/BgHook";

export default function Navbar() {
  const { currentThemeKey, changeBackground, colors } = useBackgroundSlice();
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          {[
            { label: "Features", id: "features" },
            { label: "Testimonials", id: "testimonials" },
          ].map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => handleScroll(id)}
                className={`${colors.linkColor} transition-colors duration-300 hover:cursor-pointer`}
              >
                {label}
              </button>
            </li>
          ))}
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
            to="/details"
            className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition hidden md:block"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md border border-gray-300 dark:border-white/20"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`md:hidden px-6 pb-4 ${colors.navbarBg}`}>
          <ul className="flex flex-col items-center justify-center gap-4 font-medium">
            {[
              { label: "Features", id: "features" },
              { label: "Testimonials", id: "testimonials" },
            ].map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    handleScroll(id);
                    setMobileOpen(false);
                  }}
                  className={`${colors.linkColor} transition-colors duration-300 hover:cursor-pointer text-center`}
                >
                  {label}
                </button>
              </li>
            ))}

            <li>
              <Link
                to="/details"
                className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
