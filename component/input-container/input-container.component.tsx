import { CSSProperties, ReactNode } from "react";
import classNames from "classnames";
import styles from "./input-container.styles.module.css";

export function InputContainer({
  children,
  mode,
  style,
  className = "",
  disabled,
  focused,
  isEmpty,
  buttonClicked,
}: {
  children: ReactNode;
  mode: "primary" | "secondary" | "compact";
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
  focused?: boolean;
  isEmpty?: boolean;
  buttonClicked?: boolean;
}) {
  // ---------------------------------------------------------------------------
  return (
    <div className={classNames(styles.inputContainer)} style={style}>
      <div
        className={classNames({
          [styles.outline]: true,
          [styles.primary]: mode === "primary",
          [styles.secondary]: mode === "secondary",
          [styles.compact]: mode === "compact",
          [styles.disabled]: disabled,
          [styles.focused]: focused,
        })}
        style={style}
      >
        <div
          className={classNames({
            [styles.outerBox]: true,
            [styles.focused]: focused,
          })}
          style={style}
        >
          <div
            className={classNames({
              [className]: true,
              [styles.box]: true,
              [styles.primary]: mode === "primary",
              [styles.secondary]: mode === "secondary",
              [styles.compact]: mode === "compact",
              [styles.disabled]: disabled,
              [styles.focused]: focused,
              [styles.empty]: isEmpty && buttonClicked,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
