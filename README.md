## Meson Modal

> Modal components for Meson form and other cases....

### Usage

![](https://img.shields.io/npm/v/@worktools/meson-modal.svg?style=flat-square)

```bash
yarn add @worktools/meson-modal
```

- Modal

Demo http://fe.jimu.io/meson-modal/#/modal

```tsx
import { MesonModal } from "@worktools/meson-modal";

<MesonModal
  title={"DEMO modal"}
  visible={noMovingVisible}
  onClose={() => {
    setNoMovingVisible(false);
  }}
  disableMoving
  renderContent={() => {
    return (
      <div>
        <span
          onClick={() => {
            setNoMovingVisible(false);
          }}
        >
          Close
        </span>
      </div>
    );
  }}
/>;
```

- Drawer

Demo http://fe.jimu.io/meson-modal/#/drawer

```tsx
import { MesonDrawer } from "worktools/meson-drawer";

<MesonDrawer
  title={"Custom header"}
  width={800}
  visible={customVisible}
  headerClassName={styleHeader}
  onClose={() => {
    setCustomVisible(false);
  }}
  renderContent={() => {
    return <div>NOTHING</div>;
  }}
/>;
```

- Confirm API

```tsx
import { useConfirmPop } from "worktools/meson-drawer";

let confirmPlugin = useConfirmPop();

let onClick = () => {
  let result = await confirmPlugin.forConfirmation({ title: "title", text: "desc" });
  console.log("result", result);
};

<div>{confirmPlugin.ui}</div>;
```

### Workflow

https://github.com/worktools/ts-workflow

### License

MIT
