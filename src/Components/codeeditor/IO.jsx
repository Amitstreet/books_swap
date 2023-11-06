import { useState, useEffect } from "react";
import axios from "axios";

import { changeStdin } from "../redux/codeIDEdata";
import { useDispatch } from "react-redux";

function IO({ data }) {
  //   data = {
  //     "source": "using System;\n\nclass Program\n{\n    static int Square(int num) => num * num;\n    static void Main() => Console.WriteLine(Square(4));\n}\n",
  //     "stdin": "3"
  // };
  const [inputPart, setInputPart] = useState("abcc");
  const [outputPart, setOutputPart] = useState("");

  const dispatch = useDispatch();

  const [codeRunning, setCodeRunning] = useState(false);

  //   if (outputPart != "") {
  //     setCodeRunning(false);
  //   }

  function codeRunner() {
    let url = "https://apiforcode.dailywith.me/java";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        setOutputPart(res);
        setCodeRunning(false);
      })
      .catch((err) => console.log(err));
  }

  
  useEffect(() => {
    // This useEffect will run whenever codeText changes
    dispatch(changeStdin(inputPart));

  }, [inputPart]); // Specify codeText as a dependency

  function inputChange(e) {
    setInputPart(e.target.value);
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
        onClick={runClicked}
      >
        Submit
      </button>
      <div class="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800 justify-around flex">
      <div class="pt-3 md:pt-0 justify-around flex">
                                        <a class="inline-flex justify-center items-center gap-x-2 text-center bg-violet-900 hover:bg-violet-700 border border-transparent text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-900 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800" href="#">
                          Test Case 1
                                              </a>
                                              <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-green-600 rounded-full" role="status" aria-label="loading">
                          <span class="sr-only">Loading...</span>
                        </div>
                                      </div>
                                      <div class="pt-3 md:pt-0">
                                        <a class="inline-flex justify-center items-center gap-x-2 text-center bg-violet-900 hover:bg-violet-700 border border-transparent text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-900 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800" href="#">

                Test Case2                                        </a>
                <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-green-600 rounded-full" role="status" aria-label="loading">
                          <span class="sr-only">Loading...</span>
                        </div>
                                      </div>

                                      <div class="pt-3 md:pt-0">
                                        <a class="inline-flex justify-center items-center gap-x-2 text-center bg-violet-900 hover:bg-violet-700 border border-transparent text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-900 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800" href="#">
                                      Test Case3
                                        </a>
                                      </div>
                                      <div class="pt-3 md:pt-0">
                                        <a class="inline-flex justify-center items-center gap-x-2 text-center bg-violet-900 hover:bg-violet-700 border border-transparent text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-900 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800" href="#">
                                        Test Case4
                                        </a>
                                      </div>
                                      <div class="pt-3 md:pt-0">
                                        <a class="inline-flex justify-center items-center gap-x-2 text-center bg-violet-900 hover:bg-violet-700 border border-transparent text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-900 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800" href="#">
                                        Test Case5
                                        </a>
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
