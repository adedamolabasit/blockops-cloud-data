/*import React from "react";

const AppBtn = () => {
  return <div></div>
}

export default AppBtn;*/

import Link from "next/link";
import React from "react";
import buttonStyle from "./button.module.scss";

const AppBtn = ({
  children,
  secondary,
  border,
  full,
  link,
  href,
  disabled,
  
}) => {
  return link ? (
    <Link passHref href={String(href)}>
      <div
        className={`${full ? "w-full" : ""} ${buttonStyle.app_button} ${
          secondary ? buttonStyle.app_button__secondary : ""
        } ${border ? buttonStyle.app_button__border : ""}`}
      >
        {children}
      </div>
    </Link>
  ) : (
    <button
      disabled={String(disabled) === "undefined" ? false : disabled}
      className={`${full ? "w-full" : ""} ${buttonStyle.app_button} ${
        secondary ? buttonStyle.app_button__secondary : ""
      } ${border ? buttonStyle.app_button__border : ""}`}
    >
      {children}
    </button>
  );
};

export default AppBtn;
