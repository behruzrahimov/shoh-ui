# Input Component

The `Input` component is a flexible and customizable input field for use in your React applications. It supports various features such as icons, validation, and event handling, making it suitable for a wide range of input scenarios.

## Installation

To use the `Input` component in your React project, make sure you have the required dependencies installed.

### npm
```bash
npm i shoh-ui
```
### yarn
```bash
yarn i shoh-ui
```

### pnpm
```bash
pnpm i shoh-ui
```


# Usage

To use the Input component, follow these steps:

```javascript
import { Input } from './path-to-input-component';
<Input
    mode="primary"                          // Input mode (optional)
    icon="fa-solid fa-download"             // Icon name (Font Awesome icon, optional)
    onIconClick={handleIconClick}           // Icon click event handler (optional)
    onValueChange={handleValueChange}       // Value change event handler (optional)
    isEmpty={true}                          // Input is empty (optional)
    autofocus={true}                        // Auto-focus input (optional)
    onEscape={handleEscape}                 // Escape key event handler (optional)
    onEnter={handleEnter}                   // Enter key event handler (optional)
    validation={{                           // Validation configuration (optional)
        condition: (value) => value.trim() !== '',
        errorMessage: 'Please enter a value.'
    }}
    inputRef={inputRef}                     // Ref for the input element (optional)
/>
```

# Props
- `mode` (string, optional): Input mode. Possible values are "primary," "secondary," or "compact."

- `icon` (string, optional): The Font Awesome icon name to display within the input field.

- `onIconClick` (function, optional): Click event handler for the icon.

- `onValueChange` (function, optional): Value change event handler for the input.

- `isEmpty` (boolean, optional): Indicates whether the input is empty.

- `autofocus` (boolean, optional): Automatically focus the input when the component mounts.

- `onEscape` (function, optional): Event handler for the Escape key.

- `onEnter` (function, optional): Event handler for the Enter key.

- `validation` (object, optional): Validation configuration with a condition function and an error message.

- `inputRef` (React.MutableRefObject, optional): A reference for the input element.

(Other props remain the same as previously mentioned.)