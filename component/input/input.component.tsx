import {
  CSSProperties,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { InputContainer } from "../input-container/input-container.component.tsx";

import styles from "./input.styles.module.css";
import { Icon } from "../index.tsx";

export function Input({
  mode = "primary",
  icon,
  style,
  iconClassName,
  onIconClick,
  onValueChange,
  buttonClicked,
  isEmpty,
  autofocus,
  onEscape,
  onEnter,
  validation,
  inputRef,
  ...otherProps
}: {
  mode?: "primary" | "secondary" | "compact";
  icon?: string;
  buttonClicked?: boolean;
  isEmpty?: boolean;
  iconClassName?: string | undefined;
  style?: CSSProperties;
  iconStyle?: CSSProperties;
  onIconClick?: () => void;
  onValueChange?: (value: string) => void;
  autofocus?: boolean;
  onEscape?: () => any;
  onEnter?: () => any;
  validation?: {
    condition: (value: string) => boolean;
    errorMessage: string;
  };
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const [isFocused, setFocused] = useState(false);
  // const [isEmpty, setIsEmpty] = useState(true)
  const tempRef = useRef<HTMLInputElement | null>(null);
  let realInputRef = inputRef ?? tempRef;

  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------

  useEffect(() => {
    if (autofocus && realInputRef.current) {
      realInputRef.current.focus();
    }
  }, [realInputRef.current, autofocus]);

  // useEffect(() => {
  //   setIsEmpty(otherProps.value === "")
  // }, [otherProps.value])

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  function onKeyDown(event: KeyboardEvent<any>) {
    if (event.key === "Escape" && onEscape) {
      onEscape();
    } else if (event.key === "Enter" && onEnter) {
      onEnter();
    } else if (otherProps && otherProps.onKeyDown) {
      otherProps.onKeyDown(event);
    }
  }

  function checkValidity(value: string) {
    if (!realInputRef.current || !validation) return;
    const isValid = validation.condition(value);
    if (isValid) {
      realInputRef.current.setCustomValidity(validation.errorMessage);
    } else {
      realInputRef.current.setCustomValidity("");
    }
  }

  // ---------------------------------------------------------------------------
  return (
    <InputContainer
      className={styles.wrapper}
      mode={mode}
      style={style}
      disabled={otherProps.disabled === true}
      focused={isFocused}
      isEmpty={isEmpty}
      buttonClicked={buttonClicked}
    >
      <input
        ref={realInputRef}
        autoComplete="off"
        style={{
          color: "black",
          fontSize: "17px",
        }}
        onChange={
          onValueChange
            ? (e) => {
                onValueChange(e.target.value);
                checkValidity(e.target.value);
              }
            : undefined
        }
        {...otherProps}
        onFocus={(e) => {
          setFocused(true);
          if (!otherProps.onFocus) return;
          otherProps.onFocus(e);
        }}
        onBlur={(event) => {
          setFocused(false);
          if (otherProps.onBlur) {
            otherProps.onBlur(event);
          }
        }}
        onKeyDown={onKeyDown}
        // onInvalid={(e) =>
        //   (e.target as HTMLInputElement).setCustomValidity(
        //     "Enter User Name Here",
        //   )
        // }
        // onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
      />
      {icon && (
        <Icon
          name={icon}
          className={iconClassName}
          onClick={onIconClick}
          size={"1"}
          style={{
            color: "black",
            cursor: "pointer",
          }}
        />
      )}
    </InputContainer>
  );
}
