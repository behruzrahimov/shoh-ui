import React, { PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./badge.styles.module.css";
import { memoComponent } from "../../util/memo-component.util.ts";
import { Icon } from "../icon/icon.component.tsx";
export const Badge = memoComponent(
  "Badge",
  function ({
    icon,
    count,
    sizeIcon = "small",
    mode = "primary",
    max,
    ...otherProps
  }: PropsWithChildren<
    {
      icon: string;
      count: number;
      max?: number;
      sizeIcon?:
        | "tiny"
        | "small"
        | "medium"
        | "large"
        | "2.4"
        | "2.2"
        | "1.6"
        | "1"
        | "auto";
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
      <button {...otherProps} className={styles.button}>
        <Icon name={icon} size={sizeIcon} />
        <div
          className={classNames(otherProps.className, {
            [styles.count]: count > 0,
            [styles.no_count]: count <= 0,
            [styles.classic]:
              mode === "primary" ||
              mode === "secondary" ||
              mode === "success" ||
              mode === "danger" ||
              mode === "simple" ||
              mode === "border",
            [styles.simple]: mode === "simple" && count > 0,
            [styles.border]: mode === "border" && count > 0,
            [styles.primary]: mode === "primary" && count > 0,
            [styles.secondary]: mode === "secondary" && count > 0,
            [styles.success]: mode === "success" && count > 0,
            [styles.danger]: mode === "danger" && count > 0,
          })}
        >
          {count > 0 ? (max ? (max < count ? `${max}+` : count) : count) : ""}
        </div>
      </button>
    );
  },
);
