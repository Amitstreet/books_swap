import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { java } from "@codemirror/lang-java";
import { useParams } from "react-router-dom";
import axios from "axios";

function Solution() {
  let solution = useSelector((store) => store.IDEdata.items.solution);
  let allData = useSelector((store) => store);
  const [data, setdata] = useState("sample code text");

  const { id } = useParams();
  // console.log(id);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://apiforcode.dailywith.me/solution/java/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
         }
      );
      // console.log(response.data);
      setdata(response.data.data[0].solution);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // console.log(localStorage.getItem("token"));
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CodeMirror
        className="rounded-md"
        // value={solution}
        value={data}
        // height={"600px"}
        // theme={cTheme}
        readOnly={true}
        extensions={[java()]}
      />
      {/* <p>{console.log(solution)}</p> */}
    </>
  );
}

export default Solution;
