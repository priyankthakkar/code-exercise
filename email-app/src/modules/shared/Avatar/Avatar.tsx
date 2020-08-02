import styles from "modules/shared/Avatar/Avatar.module.css";
import React from "react";
import { AvatarComponentProps } from "./Avatar.interface";

export const Avatar: React.FC<AvatarComponentProps> = ({
  src,
  alt,
  customClass,
}) => {
  return (
    <img
      className={customClass ? customClass : styles.avatar}
      src={src}
      alt={alt}
    />
  );
};
