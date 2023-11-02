# Avatar Component

The `Avatar` component is a simple and reusable UI element for displaying user avatars or profile pictures in your React applications.
# Installation

To use the `Avatar` component in your React project, make sure you have the required dependencies installed.

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

To use the `Avatar` component, follow these steps:

```javascript
import { Avatar } from "shoh-ui";
import img from "./assets/react.svg";

function App() {
  return (
    <div>
      <Avatar src={img} alt={"avatar"} />
    </div>
  );
}
```


# Props
- `alt` (string): The alt text for the avatar image, which should provide a brief description of the image for accessibility.

- `src` (string): The source of the avatar image, which can be a URL or a file path.

- `style` (object, optional): Additional CSS styles to apply to the avatar container.