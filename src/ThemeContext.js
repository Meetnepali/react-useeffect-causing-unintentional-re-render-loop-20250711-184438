import React, { useState } from "react";

export const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  // Intentionally create a new theme object on every render
  // (realistic coding misstep causing context value instability)
  const [themeName, setThemeName] = useState("light");
  const toggleTheme = () => setThemeName((p) => (p === "light" ? "dark" : "light"));
  const theme = {
    palette: themeName === "light"
      ? { background: "#fff", color: "#222" }
      : { background: "#333", color: "#eee" },
    name: themeName,
    toggleTheme,
  };

  // BUG: context value object changes every render
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}
