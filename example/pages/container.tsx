import React from "react";
import { column, row, fullscreen, expand } from "@worktools/flex-styles";
import { css, cx } from "@emotion/css";

import { HashRedirect, findRouteTarget } from "@worktools/ruled-router/lib/dom";
import { genRouter, GenRouterTypeTree } from "controller/generated-router";
import { DocSidebar, ISidebarEntry } from "@worktools/doc-frame";
import DemoModal from "./demos/modal";
import DemoDrawer from "./demos/drawer";
import DemoModalCenterTitle from "./demos/modal-center-title";
import DemoConfirm from "./demos/confirm";
import CustomThemePage from "./demos/custom-theme";

let items: ISidebarEntry[] = [
  {
    title: "Modal",
    path: genRouter.modal.name,
  },
  {
    title: "Modal with title centered",
    path: genRouter.modalCenterTitle.name,
  },
  {
    title: "Drawer",
    path: genRouter.drawer.name,
  },
  {
    title: "Confirm",
    path: genRouter.confirm.name,
  },
  {
    title: "Custom Theme",
    path: genRouter.customTheme.name,
  },
];

let onSwitchPage = (path: string) => {
  let target = findRouteTarget(genRouter, path);
  if (target != null) {
    target.go();
  }
};

const renderChild = (router: GenRouterTypeTree["next"]) => {
  if (router != null) {
    switch (router.name) {
      case "modal":
        return <DemoModal />;
      case "drawer":
        return <DemoDrawer />;
      case "modal-center-title":
        return <DemoModalCenterTitle />;
      case "confirm":
        return <DemoConfirm />;
      case "custom-theme":
        return <CustomThemePage />;
      default:
        return (
          <HashRedirect to={genRouter.modal.name} delay={0.4}>
            Redirecting
          </HashRedirect>
        );
    }
  }
  return <div>NOTHING</div>;
};

export default (props: { router: GenRouterTypeTree["next"] }) => {
  return (
    <div className={cx(fullscreen, row, styleContainer)}>
      <DocSidebar
        title="Meson Modal"
        currentPath={props.router.name}
        onSwitch={(item) => {
          onSwitchPage(item.path);
        }}
        items={items}
      />

      <div className={cx(expand, stylePage)}>{renderChild(props.router)}</div>
    </div>
  );
};

const styleContainer = css`
  font-family: "Helvetica";
`;

let stylePage = css`
  padding: 40px;
`;
