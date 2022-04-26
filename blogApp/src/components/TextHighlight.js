import React from "react";
export default function TextHighlight({ bgColor, children }) {
  return (
    <span
      style={{
        backgroundColor: bgColor,
        borderRadius: "10px",
        color: "#fff",
        padding: "3px",
      }}
    >
      {children}
    </span>
  );
}
