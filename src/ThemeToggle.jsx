import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "2px solid gray",
          borderRadius: "12px",
          padding: "30px",
          width: "300px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: theme === "light" ? "#f9f9f9" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <h2>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h2>
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            backgroundColor: theme === "light" ? "#333" : "#ddd",
            color: theme === "light" ? "#fff" : "#000",
            fontWeight: "bold",
          }}
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
}
