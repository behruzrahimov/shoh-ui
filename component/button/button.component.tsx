import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./button.styles.module.css";
import { memoComponent } from "../../util/memo-component.util.ts";
import { Icon } from "../icon/icon.component.tsx";
export const Button = memoComponent(
  "Button",
  function ({
    children,
    iconRight,
    iconLeft,
    mode = "primary",
    ...otherProps
  }: PropsWithChildren<
    {
      iconRight?: string;
      iconLeft?: string;

      mode?:
        | "primary"
        | "secondary"
        | "simple"
        | "border"
        | "success"
        | "danger";
    } & React.ButtonHTMLAttributes<HTMLButtonElement>
  >) {
    return (
      <button
        {...otherProps}
        className={classNames(otherProps.className, {
          [styles.button]: true,
          [styles.classic]:
            mode === "primary" ||
            mode === "secondary" ||
            mode === "success" ||
            mode === "danger" ||
            mode === "simple" ||
            mode === "border",
          [styles.simple]: mode === "simple",
          [styles.border]: mode === "border",
          [styles.primary]: mode === "primary",
          [styles.secondary]: mode === "secondary",
          [styles.success]: mode === "success",
          [styles.danger]: mode === "danger",
        })}
      >
        {iconLeft && <Icon name={iconLeft} size={"1"} />} {children}{" "}
        {iconRight && <Icon name={iconRight} size={"1"} />}
      </button>
    );
  },
);
