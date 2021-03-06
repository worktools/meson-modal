import React, { ReactNode } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { css, cx } from "@emotion/css";
import { rowParted, column } from "@worktools/flex-styles";

import Portal from "./portal";
import { GlobalThemeVariables } from "./theme";
import { X } from "react-feather";

let transitionDuration = 160;

interface IProps {
  title: string;
  visible: boolean;
  width?: number;
  onClose: () => void;
  renderContent: () => ReactNode;
  hideClose?: boolean;
  headerClassName?: string;
}

export default class MesonDrawer extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const node = (
      <div onClick={this.onContainerClick} className={styleAnimations}>
        <CSSTransition in={this.props.visible} unmountOnExit={true} classNames="backdrop" timeout={transitionDuration}>
          <div className={styleBackdrop} onClick={this.props.onClose}>
            <div
              className={cx(column, stylePopPage, GlobalThemeVariables.drawerCard, "drawer-card")}
              style={{ width: this.props.width }}
              onClick={this.onContainerClick}
              data-action="meson-drawer"
            >
              <div className={cx(rowParted, styleHeader, GlobalThemeVariables.drawerHeader, this.props.headerClassName)}>
                <span />
                {this.props.title}

                {this.props.hideClose ? (
                  <span />
                ) : (
                  <span className={cx(styleIcon, GlobalThemeVariables.closeIcon)} onClick={this.props.onClose}>
                    <X />
                  </span>
                )}
              </div>
              {this.props.renderContent()}
            </div>
          </div>
        </CSSTransition>
      </div>
    );

    return <Portal>{node}</Portal>;
  }

  onContainerClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
  }
}

let styleAnimations = css`
  .backdrop-enter {
    opacity: 0;

    .drawer-card {
      transform: translate(100%, 0);
    }
  }
  .backdrop-enter.backdrop-enter-active {
    opacity: 1;
    transition-duration: ${transitionDuration}ms;
    .drawer-card {
      transform: translate(0%, 0);
      transition-duration: ${transitionDuration}ms;
    }
  }
  .backdrop-exit {
    opacity: 1;

    .drawer-card {
      transform: translate(0%, 0);
    }
  }
  .backdrop-exit.backdrop-exit-active {
    opacity: 0;
    transition-duration: ${transitionDuration}ms;

    .drawer-card {
      transform: translate(100%, 0);
      transition: ${transitionDuration}ms;
    }
  }
`;

let stylePopPage = css`
  background-color: white;
  min-width: 320px;
  height: 100%;
  right: 0;
  position: absolute;
  transition-timing-function: linear;
`;

// z-index = 1000 to simulate an antd modal
let styleBackdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.65);
  transition-timing-function: linear;
  z-index: 1000;

  display: flex;
`;

let styleHeader = css`
  padding: 0 24px;
  height: 56px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid hsl(0, 0%, 91%);
`;

let styleIcon = css`
  color: #aaa;
  cursor: pointer;
  font-size: 12px;
`;
