import React from "react";
export default function Badge({ color, children }) {
  return <span class={`badge badge--${color}`}>{children}</span>;
}
