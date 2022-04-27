import React from "react";
export default function Badge({ color, children, style, onClick = () => {} }) {
  return (
    <span class={`badge badge--${color}`} style={style} onClick={onClick}>
      {children}
    </span>
  );
}
