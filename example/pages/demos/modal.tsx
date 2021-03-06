import React, { FC, useState } from "react";
import { css } from "@emotion/css";
import MesonModal from "../../../src/modal";
import { DocDemo, DocBlock, DocSnippet } from "@worktools/doc-frame";
import { JimoButton } from "@worktools/jimo-basics";
import { expand } from "@worktools/flex-styles";

let code = `
<MesonModal
  title={"DEMO modal"}
  visible={visible}
  onClose={() => {
    setVisible(false);
  }}
  renderContent={() => {
    return "TODO";
  }}
/>
`;

let DemoModal: FC<{}> = (props) => {
  let [visible, setVisible] = useState(false);
  let [noMovingVisible, setNoMovingVisible] = useState(false);
  let [showLongModal, setShowLongModal] = useState(false);

  return (
    <div className={styleContainer}>
      <div className={styleBoxArea}>
        <div>
          <DocDemo title="Modal" link={"https://github.com/worktools/meson-modal/blob/master/example/pages/demos/modal.tsx"}>
            <DocBlock content={codeModal} />
            <JimoButton
              onClick={() => {
                setVisible(true);
              }}
              text="Try Modal"
            />
            <DocSnippet code={code} />
            <MesonModal
              title={"DEMO modal"}
              visible={visible}
              onClose={() => {
                setVisible(false);
              }}
              renderContent={() => {
                return (
                  <div>
                    SOMETHING....
                    <span
                      onClick={() => {
                        setVisible(false);
                      }}
                    >
                      Close
                    </span>
                  </div>
                );
              }}
            />
          </DocDemo>

          <DocDemo title="Modal disabled moving" link="https://github.com/worktools/meson-modal/blob/master/example/pages/demos/modal.tsx">
            <JimoButton
              onClick={() => {
                setNoMovingVisible(true);
              }}
              text="Try Modal No moving"
            />
            <DocBlock content="???????????? `disableMoving` ????????????????????????."></DocBlock>
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
            />
          </DocDemo>

          <DocDemo title="Default configs">
            <DocBlock content={contentDefault} />
            <DocSnippet code={codeDefault} />
          </DocDemo>

          <DocDemo title="Modal with long content">
            <JimoButton
              onClick={() => {
                setShowLongModal(true);
              }}
              text="Long modal content"
            />
            <DocBlock content={contentLongModal} />
            <MesonModal
              title={"Long Modal"}
              visible={showLongModal}
              onClose={() => {
                setShowLongModal(false);
              }}
              renderContent={() => {
                return (
                  <>
                    <div className={expand}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => {
                        return (
                          <div key={idx} className={styleLongContent}>
                            {idx}
                          </div>
                        );
                      })}
                    </div>
                    <span
                      onClick={() => {
                        setShowLongModal(false);
                      }}
                      style={{ padding: 20 }}
                    >
                      Close
                    </span>
                  </>
                );
              }}
            />
          </DocDemo>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;

let styleContainer = css``;

let styleBoxArea = css`
  padding: 20px;
`;

const styleLabel = css`
  width: 200px;
`;

let codeDefault = `
setMesonModalDefaultConfigs({
  disableBackdropClose: false,
  disableMoving: false,
  centerTitle: false,
  hideClose: false,
  cardClassName: undefined,
});
`;

let contentDefault = `
?????????????????????????????????, ???????????? \`setMesonModalDefaultConfigs\` ??????????????????.
`;

let codeModal = `
?????? antd, ?????? Modal ????????????????????????????????????, ???????????????????????????????????????????????????????????????.
Modal ??? body ?????????????????????, ??????????????????.
`;

let styleLongContent = css`
  height: 200px;
  background-color: #aaa;
  margin: 20px;
`;

let contentLongModal = `
Modal ??? body ????????? Flexbox column ?????????, ???????????????????????????. ???????????????????????? Flexbox ????????????????????????, ?????????????????????, ???????????????????????????.
`;
