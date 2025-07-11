import React, { useState } from "react";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";

export default function App() {
  const [input, setInput] = useState("");
  const theme = React.useContext(ThemeContext);

  return (
    <div style={{ padding: 32 }}>
      <h2>Themed React App</h2>
      <Button onClick={theme.toggleTheme}>
        Toggle Theme (current: {theme.name})
      </Button>
      <div style={{ margin: "24px 0" }}>
        <input
          style={{ padding: 8, width: 200 }}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type here..."
        />
      </div>
      <div>
        {/* Render several Buttons to show re-renders */}
        <Button>Save</Button>
        <Button>Delete</Button>
        <Button>Edit</Button>
        <Button>Submit</Button>
      </div>
    </div>
  );
}
