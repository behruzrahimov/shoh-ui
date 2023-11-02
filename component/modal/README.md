# Input Component

This readme provides an overview of a React modal component along with its associated context, hook, and provider for handling modals in your React application.
# Table of Contents


- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
  - [Modal Component](#modal-component) 
  - [Modal Context](#modal-context)
  - [Modal Hook](#modal-hook)
  - [Modal Provider](#modal-0provider)
- [Props](#props)


# InIntroduction

The React Modal Component is a versatile and customizable modal dialog for React applications. It allows you to easily create and manage modal dialogs with various options, such as specifying the modal content, width, close behavior, and more.


# Installation
To use the React Modal Component in your React application, you can install it as follows:

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
# Modal Component

The Modal component is the core of the modal system. It renders a modal dialog with customizable options. Here's how you can use it:


```javascript
import { Modal } from 'shoh-ui';

// Usage example within your component
<Modal
  isOpened={true}                               // A boolean indicating whether the modal is open
  close={() => closeFn()}                       // A function to close the modal
  options={{
    component: <YourComponent />,               // JSX element to display in the modal
    width: '30em',                              // Width of the modal
    closeOnEsc: true,                           // Close the modal on pressing 'Escape' key
    closeOnOutsideClick: true,                  // Close the modal when clicking outside
    onClose: () => yourFunction(),              // Callback when the modal is closed
    hideCloseBtn: false,                        // Whether to hide the close button
    overlayClassName: 'custom-overlay',         // Custom CSS class for the overlay
    modalClassName: 'custom-modal',             // Custom CSS class for the modal
    containerClassName: 'custom-container',     // Custom CSS class for the content container
  }}
/>

```


# Modal Context
The ModalContext provides a way to manage modals across your application. It includes functions for opening, closing, and setting modal options.

# Modal Hook
The useModal hook allows you to access the modal context from any component. You can use it to open, close, and set modal options.

```javascript
import { useModal } from 'shoh-ui';

// Usage example within your component
const { open, close, setOptions } = useModal();

```

# Modal Provider
The ModalProvider is a context provider that wraps your application to manage the state of modals. It tracks whether a modal is rendered, whether it's open, and its associated options.

```javascript
import { ModalProvider } from 'shoh-ui';

// Usage example to wrap your entire application
<ModalProvider>
  {/* Your application components */}
</ModalProvider>

```

# Props


The `Modal` component accepts the following props:

- `isOpened` (boolean): Indicates whether the modal is open (true) or closed (false).

- `close` (function): A callback function that should be called to close the modal. Typically, this function updates the state to close the modal.

- `options` (object): An object that contains various customization options for the modal. These options include:

- `component` (JSX Element): The content to display inside the modal. You can provide any JSX element, such as your custom modal content.

- `width` (string): The width of the modal. You can specify it as a CSS string, e.g., '400px' or '50%'. If not specified, it defaults to '30em'.

- `closeOnEsc` (boolean): Determines whether the modal should close when the 'Escape' key is pressed. Set it to true for closing on 'Escape' keypress.

- `closeOnOutsideClick` (boolean): Controls whether clicking outside the modal should close it. Set it to true to enable this behavior.

- `onClose` (function): A callback function that is called when the modal is closed. You can use it to perform additional actions when the modal is closed.

- `hideCloseBtn` (boolean): If set to true, it hides the close button in the modal.

- `overlayClassName` (string): A custom CSS class for the modal overlay, allowing you to style it as desired.

- `modalClassName` (string): A custom CSS class for the modal itself, enabling you to apply custom styles.

- `containerClassName` (string): A custom CSS class for the content container inside the modal, allowing for further customization.

- `style` (object): An optional React.CSSProperties object that lets you apply additional inline styles to the modal.

- `onClick` (function): A callback function that is triggered when clicking on the modal's overlay. If closeOnOutsideClick is true, this function is called when clicking outside the modal.

These props provide flexibility and control over how your modal behaves and appears in your React application. You can tailor the modal's appearance, behavior, and content according to your specific use case.