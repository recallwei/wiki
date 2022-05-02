import React from "react";

export default function Badge({ color, children, style, onClick = () => {} }) {
  return (
    <span
      className={`badge badge--${color} badge-display-property`}
      style={style}
      onClick={onClick}
    >
      {children}
    </span>
  );
}
