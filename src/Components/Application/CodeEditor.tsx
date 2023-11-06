import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";
import IO from "../codeeditor/IO";
import { useState , useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { changeCode } from "../redux/codeIDEdata";

export default function CodeEditor({ cTheme }) {
  let data = useSelector((store) => store.IDEdata.items);

  const [codeText, setCodeText] = useState(data.source);
  const dispatch = useDispatch();

  
  useEffect(() => {
    // This useEffect will run whenever codeText changes
    dispatch(changeCode(codeText));
  }, [codeText]); // Specify codeText as a dependency

  function codeChange(e) {
    setCodeText(e);
  }


  return (
    <>
      <CodeMirror
        className=" text-base"
        value={codeText}
        onChange={codeChange}
        // height={"600px"}
        theme={cTheme}
        extensions={[java()]}
      />
      <IO data={data} />
    </>
  );
}
