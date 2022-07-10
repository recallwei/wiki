import React from "react";
import clsx from "clsx";
export default function Avatar({
  avatarLink = false,
  customStyle,
  description,
  name,
  size = "default", // default, sm, lg, xl
  src,
  vertical = false, // position vertical
  wrapperClassName,
}) {
  return (
    <div class={`avatar ${vertical && "avatar--vertical"}`} style={customStyle}>
      <img
        // class={`avatar__photo ${
        //   size !== "default" && `avatar__photo--${size}`
        // } ${avatarLink && "avatar__photo-link"}`}
        //TODO - Verify whether className works
        className={clsx(
          "avatar__photo",
          size !== "default" && `avatar__photo--${size}`,
          avatarLink && "avatar__photo-link",
          wrapperClassName
        )}
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
