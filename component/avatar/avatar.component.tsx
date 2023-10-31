import styles from "./avatar.styles.module.css";
import { CSSProperties } from "react";
export function Avatar({
  alt,
  src,
  style,
}: {
  alt: string;
  src: string;
  style?: CSSProperties;
}) {
  return (
    <div className={styles.container} style={style}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
}
