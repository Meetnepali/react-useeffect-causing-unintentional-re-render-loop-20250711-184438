import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Button({ children, ...props }) {
  const theme = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme.palette.background,
        color: theme.palette.color,
        border: "1px solid #888",
        borderRadius: 4,
        margin: 4,
        padding: "6px 18px",
        fontWeight: 600,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
