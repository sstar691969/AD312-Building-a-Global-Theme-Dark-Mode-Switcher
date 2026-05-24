
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const themes = {
  light: {
    background: "#ffffff",
    color: "#000000",
  },
  dark: {
    background: "#1e293b",
    color: "#ffffff",
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        styles: themes[theme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}