# Button Component

The `Button` component is a customizable and versatile button element for use in your React applications. It allows you to easily create buttons with optional icons on the left and right, and supports various visual modes.

## Installation

To use the `Button` component in your React project, make sure you have the required dependencies installed.

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

To use the `Button` component, follow these steps:
```javascript
import { Button } from "shoh-ui";

function App() {
  return (
    <div>
      <Button
        mode={"primary"}
        iconLeft={"fa-solid fa-download"}
        iconRight={"fa-solid fa-download"}
      >
        CLick me
      </Button>
    </div>
  );
}
```

# Props

- `iconLeft` (string, optional): The Font Awesome icon name to display on the left side of the button.

- `iconRight` (string, optional): The Font Awesome icon name to display on the right side of the button.

- `mode` (string, optional): Button mode. Possible values are "primary," "secondary," "simple," "border," "success," or "danger."

- (Other props remain the same as previously mentioned.)