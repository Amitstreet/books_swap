import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { changeStdin } from "../redux/codeIDEdata";
import { useDispatch } from "react-redux";
import Loader from "./loader";


function IO({ data, sub }) {

  const [inputPart, setInputPart] = useState("abcc");
  const [outputPart, setOutputPart] = useState("");
  const [loader, setloader] = useState(false);
  const [testcase, settestcase] = useState({
    submit: false,
    test_case1: false,
    test_case2: false,
    test_case3: false,
    test_case4: false,
    test_case5: false,
  })
  const navi = useNavigate();






  const dispatch = useDispatch();

  const [codeRunning, setCodeRunning] = useState(false);




  const submit = () => {
    dispatch(changeStdin("yyyyy"));
    codeRunner();
  }


  const extraction=(arr)=>{
    let obj={};
    let idx=0;
    for (const element of arr.data) {
      obj["testcase" +`${idx}`] = element;
      idx++;
    }
    console.log(arr);
     console.log(obj);
      obj["submit"]=true;
      return {...obj};
  }


  function codeRunner() {
    let url = "https://apiforcode.dailywith.me/java";
    axios
      .post(url, data)
      .then((res) => {
        setOutputPart(res);
        setCodeRunning(false);
      })
      .catch((err) => console.log(err));
  }

  let token = localStorage.getItem("token");
  console.log(token);


  let s = {
    "source": 'import java.io.;\nimport java.util.;\n\n class Main {\n\n  public static void main(String[] args) throws Exception {\n    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n    int x = Integer.parseInt(br.readLine());\n    int n = Integer.parseInt(br.readLine());\n    int p = power(x, n);\n    System.out.println(p);\n  }\n\n  public static int power(int x, int n) {\n    if(n == 0){\n      return 1;\n    }\n    int xpnm1 = power(x, n - 1);\n    int xpn = xpnm1 * x;\n    return xpn;\n  }\n\n}\n\n\n\n'
  }


  const post = async () => {
    testcase.submit=true;
    let newobj = {...testcase};
    settestcase(newobj);

    setloader(true);
    if (!localStorage.getItem("token")) {
      navi('/login');
    }
    sub(data);
    let url = "https://apiforcode.dailywith.me/submit/java/5";
    axios.post(url, {
      "source": "import java.io.*;\nimport java.util.*;\n\n class Main {\n\n  public static void main(String[] args) throws Exception {\n    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n    int x = Integer.parseInt(br.readLine());\n    int n = Integer.parseInt(br.readLine());\n    int p = power(x, n);\n    System.out.println(p);\n  }\n\n  public static int power(int x, int n) {\n    if(n == 0){\n      return 1;\n    }\n    int xpnm1 = power(x, n - 1);\n    int xpn = xpnm1 * x;\n    return xpn;\n  }\n\n}\n\n\n                        \n                                "
    }
      , {
        headers: {
          'Authorization': `Bearer ${token.substring(1, token.length - 1)}`
        },
        // withCredentials: true,
      }).then((res) => {
      setloader(false);
      let obj = extraction(res.data);
      settestcase(obj);
      }).catch((err) => {
        console.log(err)
      }
      )
  }






  useEffect(() => {
    // This useEffect will run whenever codeText changes
    dispatch(changeStdin(inputPart));

  }, [inputPart]); // Specify codeText as a dependency

  function inputChange(e) {
    setInputPart(e.target.value);
    console.log(e.target.value);
  }


  function runClicked() {
    setCodeRunning(true);
    codeRunner();
  }



  return (
    <div className="hs-accordion-group">
      <div>
        <button
          type="button"
          className="w-full py-3 px-4 my-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-slate-900"
          onClick={runClicked}
        >
          Run
        </button>

        <button
          type="button"
          className="w-full py-3 px-4 my-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-slate-900"
          onClick={post}
        >
          Submit
        </button>
        <div class="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800 justify-around flex">
          <div class="pt-3 md:pt-0 w-[65rem] justify-around flex">
            {

              Object.keys(testcase).map((keyName, idx) => {

                return testcase.submit == false ? idx != 0 && <a class="inline-flex justify-center items-center gap-x-2 text-center bg-violet-900 hover:bg-violet-700 border border-transparent text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-900 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800" href="#">
                  Test Case {idx}
                </a> :

                  idx != 0 && testcase[keyName] == true ? (loader != true ? <div>
                    <span class="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                      <svg class="flex-shrink-0 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      passed
                    </span>
                  </div> : idx!=0 && <Loader />) : (loader != true ? idx != 0 && <a class="inline-flex justify-center items-center gap-x-2 text-center bg-violet-900 hover:bg-violet-700 border border-transparent text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-900 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800" href="#">
                    FAILED
                  </a>:idx!=0 && <Loader/>)

              }
              )


            }
          </div>

        </div>
      </div>




      <div
        className="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700"
        id="hs-bordered-heading-two"
      >
        <button
          className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-left text-slate-900 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-bordered-collapse-two"
        >
          <svg
            className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 8.85999L14.5 8.85998"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M8 15.36L8 2.35999"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 8.85999L14.5 8.85998"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
          Console Input
        </button>
        <div
          id="hs-basic-bordered-collapse-two"
          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-bordered-heading-two"
        >

          <div className="pb-4 px-5">
            <div className=" flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="flex flex-auto flex-col ">
                <textarea
                  className="py-3  m-[2px] px-4 block w-full border-gray-200 rounded-md text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  rows={3}
                  placeholder="Provide your custom input here"
                  //   defaultValue={""}
                  value={inputPart}
                  onChange={inputChange}
                />
                {/* <p>{"# Compilation provided by Compiler Explorer at https://godbolt.org/".length}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hs-accordion active bg-white border -mt-px  last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700"
        id="hs-bordered-heading-one"
      >
        <button
          className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-left text-slate-900 transition py-4 px-5 hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-bordered-collapse-one"
        >
          <svg
            className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 8.85999L14.5 8.85998"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M8 15.36L8 2.35999"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 8.85999L14.5 8.85998"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
          Console Output
        </button>
        <div
          id="hs-basic-bordered-collapse-one"
          className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-bordered-heading-one"
        >
          <div className="pb-4 px-5">
            {codeRunning ? (
              <>
                <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                  <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                    <div className="flex justify-center">
                      <div
                        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                        role="status"
                        aria-label="loading"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {outputPart.length == 0 ? (
                  <>
                    {
                      <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div className="flex flex-auto flex-col   p-4 md:p-5">
                          <p className="text-slate-900 text-base dark:text-gray-200">
                            please run your code to see the output!
                          </p>
                        </div>
                      </div>
                    }
                  </>
                ) : (
                  <>
                    <div className="min-h-[15rem] flex flex-col bg-white border shadow-base rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                      <div className="flex flex-auto flex-col p-4 md:p-5">
                        {outputPart.data
                          .replace("Standard out:", "")
                          .split("\n")
                          .map((line, index) => (
                            <div
                              className="text-slate-900 flex text-lg dark:text-gray-200"
                              key={index}
                            >
                              {line.split("\t").map((event, innerIndex) => (
                                <div key={innerIndex}>
                                  {event === "" ? (
                                    <p className="w-4"></p>
                                  ) : (
                                    <>
                                      {event.length < 3 ? (
                                        <>
                                          <p className="w-4">{event}</p>
                                          <span className="w-4"></span>
                                        </>
                                      ) : (
                                        <>
                                          <p>{event}</p>
                                          <span className="w-4"></span>
                                        </>
                                      )}
                                    </>
                                  )}
                                </div>
                              ))}
                            </div>
                          ))}
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IO;
