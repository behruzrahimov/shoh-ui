import classNames from "classnames";
import { useEffect } from "react";
import { Icon } from "../icon/icon.component";
import { ModalOptions } from "./modal.context";
import styles from "./modal.styles.module.css";

export function Modal(props: {
  isOpened: boolean;
  close: () => void;
  options: ModalOptions;
  style?: React.CSSProperties;
}) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------

  useEffect(() => {
    // todo: use useSyncExternalStore instead
    if (!props.isOpened) return;
    if (!props.options.closeOnEsc) return;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        props.close();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [props.isOpened, props.options.closeOnEsc]);

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  function onOverlayClick(event: any) {
    if (!props.options.closeOnOutsideClick) return;

    if (event.target?.id === "overlay") {
      props.close();
    }
  }

  // ---------------------------------------------------------------------------
  return (
    <div
      id="overlay"
      className={classNames({
        [styles.overlay]: true,
        [styles.opened]: props.isOpened,
        [styles.closed]: !props.isOpened,
        [props.options.overlayClassName ?? ""]: true,
      })}
      style={props.style}
      onClick={(event) => onOverlayClick(event)}
    >
      <div
        className={classNames(styles.modal, props.options.modalClassName ?? "")}
        style={{ width: props.options.width || "30em" }}
      >
        <div className={styles.crossButtonContainer}>
          {props.options.hideCloseBtn !== true && (
            <Icon
              name="fa-solid fa-x"
              size="1.6"
              onClick={() => props.close()}
            />
          )}
        </div>
        <div
          className={classNames(
            styles.contentContainer,
            props.options.containerClassName ?? "",
          )}
        >
          {props.options.component}
        </div>
      </div>
    </div>
  );
}
