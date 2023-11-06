import { useState } from "react";
import { sublime } from "@uiw/codemirror-theme-sublime";
import CodeEditor from "./Components/Application/CodeEditor";
import Language from "./Components/codeeditor/Languages";
import EditorTheme from "./Components/codeeditor/EditorTheme";

function Compiler() {
  const [cTheme, setCTheme] = useState(sublime);
  const [cLang, setCLang] = useState();
  return (
    <div className="lg:pl-72 ">
      <div className="lg:mr-8">
        <div className="px-2 bg-white border  first:rounded-t-lg mt-2 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700">
          <div className="rounded-md">
            <Language setCLang={setCLang} />
            <EditorTheme setCTheme={setCTheme} />
          </div>
        </div>
        <CodeEditor cTheme={cTheme} />
      </div>
    </div>
  );
}

export default Compiler;
