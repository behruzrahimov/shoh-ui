# Badge Component

The `Badge` component is a versatile UI element for displaying badge counts with icons. It can be used in a variety of scenarios to highlight notifications, messages, or any other relevant information in your web application.
    
# Installation

To use the `Badge` component in your React project, make sure you have the required dependencies installed.

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

To use the `Badge` component, follow these steps:

```
import { Badge } from "shoh-ui";

function App() {
  return (
    <div>
      <Badge
        icon={"fa-solid fa-user"}
        count={12}
        max={1000}
        mode={"primary"}
        sizeIcon={"2.4"}
      />
    </div>
  );
}
```


# Props
- `icon` (string): The name of the Font Awesome icon to display in the badge. Read documentation [Font Awesome](https://fontawesome.com/docs)

- `count` (number): The count to display on the badge. If count is less than or equal to 0, the badge will not be visible.

- `sizeIcon` (string, optional): Icon size. Possible values are "tiny", "small", "medium", "large", "2.4", "2.2", "1.6", "1", or "auto".

- `mode` (string, optional): Badge mode. Possible values are "primary," "secondary," "simple," "border," "success," or "danger."

- `max` (number, optional): If provided, when the count exceeds the max value, it will be displayed as 'X+' where X is the max value.

- `...otherProps` (object, optional): Additional props that can be applied to the underlying button element.
