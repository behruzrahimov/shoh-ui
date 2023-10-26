import classNames from "classnames";
import styles from "./icon.styles.module.css";

export function Icon({
  hidden,
  className,
  name,
  size = "medium",
  bg = false,
  danger = false,
  onClick,
  style = {},
}: {
  hidden?: boolean;
  className?: string;
  name: string;
  size?:
    | "tiny"
    | "small"
    | "medium"
    | "large"
    | "2.4"
    | "2.2"
    | "1.6"
    | "1"
    | "auto";
  bg?: boolean;
  danger?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => any;
  style?: React.CSSProperties;
}) {
  const fontSize =
    size === "tiny"
      ? "0.9rem"
      : size === "small"
      ? "1.4rem"
      : size === "medium"
      ? "1.8rem"
      : size === "large"
      ? "3.4rem"
      : size === "2.4"
      ? "2.4rem"
      : size === "2.2"
      ? "2.2rem"
      : "auto"
      ? undefined
      : size + "rem";

  return (
    <i
      hidden={hidden}
      onClick={onClick}
      style={{
        fontSize: fontSize,
        ...style,
      }}
      className={classNames(name, className, {
        [styles.bg]: bg,
        [styles.danger]: danger,
        [styles.hover]: !!onClick,
      })}
    />
  );
}
