/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ImageProps } from "@/types/components/coreUI/Image";

const Images = ({
  src = "",
  alt = "Image",
  className,
  height,
  width,
  onClick = () => {
    return;
  },
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      height={height}
      width={width}
      onClick={onClick}
    />
  );
};

export default Images;
