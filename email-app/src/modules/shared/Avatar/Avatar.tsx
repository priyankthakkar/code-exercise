import styles from "modules/shared/Avatar/Avatar.module.css";
import React from "react";
import { AvatarComponentProps } from "./Avatar.interface";

/**
 * @function
 * @name Avatar
 *
 * A functional component that displays avatar image from the given image url.
 *
 * @param {AvatarComponentProps} props contains the src for the images to be displayed,
 * alt text in case the image is not displayed. A custom css class can be passed if
 * in case the default styling is not enough.
 *
 * @returns {JSX.Element}
 */
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
