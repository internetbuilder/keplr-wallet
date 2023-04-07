import React, { FunctionComponent } from "react";
import { IconProps } from "./types";

export const TreeIcon: FunctionComponent<IconProps> = ({
  width = 36,
  height = 36,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2V21H27"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
