import React, { CSSProperties, ReactNode } from "react";
import clsx from "clsx";

type AvatarType = {
  avatarLink: boolean;
  description: ReactNode;
  name?: string;
  size: "default" | "sm" | "lg" | "xl";
  src: any;
  positionVertical: boolean;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

export default function Avatar({
  avatarLink = false,
  description,
  name,
  size = "default",
  src,
  positionVertical = false,
  wrapperClassName,
  wrapperStyle,
}: AvatarType): JSX.Element {
  return (
    <div
      className={`avatar ${positionVertical && "avatar--vertical"}`}
      style={wrapperStyle}
    >
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
      <div className="avatar__intro">
        <div className="avatar__name">{name}</div>
        //TODO - Keep using CSS styles instead of small element.
        <small className="avatar__subtitle">{description}</small>
      </div>
    </div>
  );
}
