import React from "react";

export default function Avatar({
  customStyle,
  src,
  name,
  description,
  size = "default", // default, sm, lg, xl
  vertical = false, // position vertical
  avatarLink = false,
}) {
  return (
    <div class={`avatar ${vertical && "avatar--vertical"}`} style={customStyle}>
      <img
        class={`avatar__photo ${
          size !== "default" && `avatar__photo--${size}`
        } ${avatarLink ? "avatar__photo-link" : ""}`}
        src={src}
      />
      <div class="avatar__intro">
        <div class="avatar__name">{name}</div>
        <small
          class="avatar__subtitle"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
