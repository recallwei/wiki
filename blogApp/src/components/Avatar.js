import React from "react";
export default function Avatar({
  src = "", // image src
  name = "", // string
  description = "", // html
  size = "default", // default,sm,lg,xl
  vertical = false, // 头像居中
  avatarLink = false, // 头像链接
}) {
  return (
    <div class={`avatar ${vertical && "avatar--vertical"}`}>
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
