import { useParams } from "react-router-dom";
import axios from "axios";
function Content({ data }) {
  // console.log(data);

  return (
    <>
      <div className="mx-auto ">
        <div className="">
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white"></h2>
              <p className="text-lg text-slate-900 dark:text-gray-200">
                <div className="flex flex-auto flex-col">
                  {data.question_text?.split("\n").map((line, index) => (
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
              </p>
            </div>
            <p className="text-lg text-slate-900 dark:text-gray-200">
              Input Format
            </p>

            <p className="text-lg text-slate-900 dark:text-gray-200 p-1.5 ">
              <div className="flex flex-auto flex-col">
                  {data.demo_input?.split("\n").map((line, index) => (
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
            </p>

            <p className="text-lg text-slate-900 dark:text-gray-200">
              output Format
            </p>

            <div className="aspect-w-16 aspect-h-9 w-fit">
              <p className="text-lg text-slate-900 dark:text-gray-200">
                <div className="flex flex-auto flex-col">
                  {data.demo_output?.split("\n").map((line, index) => (
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
              </p>
            </div>

            <p className="text-lg text-slate-900 dark:text-gray-200">
              Input Format
            </p>

            <p className="text-lg text-slate-900 dark:text-gray-200 p-1.5 ">
              No Constraints
            </p>

            <div>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-slate-900 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 dark:text-gray-200"
                href="#"
              >
                Plan
              </a>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-slate-900 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 dark:text-gray-200"
                href="#"
              >
                Web development
              </a>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-slate-900 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 dark:text-gray-200"
                href="#"
              >
                Free
              </a>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-slate-900 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 dark:text-gray-200"
                href="#"
              >
                Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
