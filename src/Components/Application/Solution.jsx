import React from 'react'
import CodeMirror from "@uiw/react-codemirror";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { java } from "@codemirror/lang-java";


function Solution() {
  let solution = useSelector((store) => store.IDEdata.items.solution);
  



  return (
    <>
    <CodeMirror
        className="rounded-md"
        value={solution}
        // height={"600px"}
        // theme={cTheme}
        readOnly={true}
        extensions={[java()]}
      />
      {/* <p>{console.log(solution)}</p> */}
      </>
  )
}

export default Solution