import { useState,useEffect } from "react";
import { sublime } from "@uiw/codemirror-theme-sublime";
import CodeEditor from "./CodeEditor";
import { useParams } from 'react-router-dom';

import Language from "../codeeditor/Languages";
import EditorTheme from "../codeeditor/EditorTheme";
import Content from "./Content";
import Foot from "../Utils/Foot";
import Solution from "./Solution"
import Submitcode from "./Submitcode";
import axios from 'axios';

function CodeContent() {



   
  const { id } = useParams(); 
   
    console.log(id);

  const [cTheme, setCTheme] = useState(sublime);
  const [cLang, setCLang] = useState();
  const [data,setdata]= useState({});
  const [code,setcode]=  useState("there is no submited code")
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://apiforcode.dailywith.me/question/java/${id}`
        );
        console.log(response.data.data[0].code_snippet);
        setdata(response.data.data[0]);
      } catch (error) {
        
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);


      const get_submit_code= (data)=>{
        setcode(data.source);
      }

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
        <button
          type="button"
          className="hs-tab-active:bg-gray-100  hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 py-2 px-5 rounded-md dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
          id="tabs-with-card-item-4"
          data-hs-tab="#tabs-with-card-4"
          aria-controls="tabs-with-card-4"
          role="tab"
        >
          <p className="dark:text-slate-100">Savedcode</p>
        </button>
      </nav>
      <div className="mt-2 w-full px-4 sm:px-6 md:px-8 lg:pl-72">
        <div
          id="tabs-with-card-1"
          role="tabpanel"
          aria-labelledby="tabs-with-card-item-1"
        >
          <div className="p-4 bg-white border  first:rounded-t-lg mt-2 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700">
            <Content data={data} />
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
          <CodeEditor submit={get_submit_code} code={data} cLang={cLang} cTheme={cTheme} />
        </div>
        <div
          id="tabs-with-card-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-card-item-3"
        >
            <Solution/>
        </div>
        <div
          id="tabs-with-card-4"
          className="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-card-item-4"
        >
          <Submitcode code={code}/>
        </div>

      </div>
      {/* <Foot/> */}
    </>
  );
}

export default CodeContent;
