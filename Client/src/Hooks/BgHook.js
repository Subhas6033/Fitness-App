import { useDispatch, useSelector } from "react-redux";
import { setBackground, addBackgroundTheme } from "../lib/BgSlice";

export default function useBackgroundSlice() {
  const dispatch = useDispatch();

  // Get current theme key
  const currentThemeKey = useSelector((state) => state.background.current);

  // Get current theme class (Tailwind CSS class string)
  const currentBackground = useSelector(
    (state) => state.background.themes[state.background.current]
  );

  // Determine if dark mode is active
  const isDark = currentThemeKey === "dark";

  // Global color definitions
  const colors = {
    textColor: isDark ? "text-white" : "text-gray-900",
    textLightColor: isDark ? "text-white/80" : "text-gray-700",
    cardBg: isDark
      ? "bg-gray-900/60 border-white/10 backdrop-blur"
      : "bg-white/70 border-gray-200 backdrop-blur",
    cardText: isDark ? "text-white" : "text-gray-900",
    btnPrimary: isDark
      ? "bg-rose-500 hover:bg-rose-600 text-white"
      : "bg-blue-600 hover:bg-blue-700 text-white",
    btnSecondary: isDark
      ? "border-white/30 bg-white/10 text-white hover:bg-white hover:text-rose-500"
      : "border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200",
    linkColor: isDark
      ? "text-slate-200 hover:text-white"
      : "text-gray-700 hover:text-gray-900",
    navbarBg: isDark ? "bg-gray-900/70" : "bg-white/30",
  };

  // Function to change the background theme
  const changeBackground = (themeKey) => {
    dispatch(setBackground(themeKey));
  };

  // Function to add a new background theme dynamically
  const addTheme = (key, value) => {
    dispatch(addBackgroundTheme({ key, value }));
  };

  return {
    currentThemeKey,
    currentBackground,
    isDark,
    colors, // <- added colors here
    changeBackground,
    addTheme,
  };
}
