import { useState } from "react";
import { sublime } from "@uiw/codemirror-theme-sublime";

// import Application from "./Application";
import CodeEditor from "./CodeEditor";
import Language from "../codeeditor/Languages";
import EditorTheme from "../codeeditor/EditorTheme";
import Content from "./Content";
import Foot from "../Utils/Foot";
import Solution from "./Solution"

function CodeContent() {
  const [cTheme, setCTheme] = useState(sublime);
  const [cLang, setCLang] = useState();
  return (
    <>
      <nav
        className=" mx-auto flex mt-2 justify-center gap-2"
        aria-label="Tabs"
        role="tablist"
      >
        <button
          type="button"
          className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 py-2 px-5 rounded-md dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 active"
          id="tabs-with-card-item-1"
          data-hs-tab="#tabs-with-card-1"
          aria-controls="tabs-with-card-1"
          role="tab"
        >
          <p className="dark:text-slate-100">Question</p>
        </button>

        <button
          type="button"
          className="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 py-2 px-5 rounded-md dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
          id="tabs-with-card-item-2"
          data-hs-tab="#tabs-with-card-2"
          aria-controls="tabs-with-card-2"
          role="tab"
        >
          <p className="dark:text-slate-100">Code</p>
        </button>
        <button
          type="button"
          className="hs-tab-active:bg-gray-100  hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 py-2 px-5 rounded-md dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
          id="tabs-with-card-item-3"
          data-hs-tab="#tabs-with-card-3"
          aria-controls="tabs-with-card-3"
          role="tab"
        >
          <p className="dark:text-slate-100">Solution</p>
        </button>
      </nav>
      <div className="mt-2">
        <div
          id="tabs-with-card-1"
          role="tabpanel"
          aria-labelledby="tabs-with-card-item-1"
        >
          <div className="p-4 bg-white border  first:rounded-t-lg mt-2 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700">
            <Content />
          </div>
        </div>
        <div
          id="tabs-with-card-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-card-item-2"
        >
          <div className="px-2 bg-white border  first:rounded-t-lg mt-2 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700">
            <div className="rounded-md">
              <Language setCLang={setCLang} />
              <EditorTheme setCTheme={setCTheme} />
            </div>
          </div>
          <CodeEditor cLang={cLang} cTheme={cTheme} />
        </div>
        <div
          id="tabs-with-card-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-card-item-3"
        >
            <Solution/>
        </div>
      </div>
      {/* <Foot/> */}
    </>
  );
}

export default CodeContent;
