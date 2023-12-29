import { java } from "@codemirror/lang-java";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { changeCode } from "../redux/codeIDEdata";

import IO from "../codeeditor/IO";
import CodeMirror from "@uiw/react-codemirror";
import React from "react";

export default function CodeEditor({ cTheme, submit, code, io }) {
  let data = useSelector((store) => store.IDEdata.items);

  const [codeText, setCodeText] = useState(code.code_snippet);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCode(codeText));
  }, [codeText]);

  function codeChange(e) {
    setCodeText(e);
  }


  return (
    <>
      <CodeMirror
        className=" text-base"
        value={code.code_snippet}
        onChange={codeChange}
        // height={"600px"}
        theme={cTheme}
        extensions={[java()]}
      />
      <IO   sub={submit} data={data} io={io} />
    </>
  );
}
