# Icon Component

The `Icon` component is a reusable and flexible component for displaying icons in your React applications. It supports a wide range of options for customizing icon appearance, including size, background, and the ability to handle click events.

## Installation

To use the `Icon` component in your React project, make sure you have the required dependencies installed.

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
 
To use the `Icon` component, follow these steps:

```javascript
import { Icon } from "shoh-ui";

function App() {
  return (
    <div>
      <Icon name={"fa-solid fa-download"} size={"medium"} />
    </div>
  );
}
```


- `name` (string): The Font Awesome icon name to display.

- `size` (string, optional): Icon size. Possible values are "tiny," "small," "medium," "large," "2.4," "2.2," "1.6," "1," or "auto" for automatic sizing.

- `bg` (boolean, optional): Apply a background to the icon.

- `danger` (boolean, optional): Apply a danger style to the icon.

- `onClick` (function, optional): Click event handler for the icon.

- `style` (object, optional): Additional CSS styles to apply to the icon.

(Other props remain the same as previously mentioned.)