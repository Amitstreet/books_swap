import React from 'react'

import {cpp} from '@codemirror/lang-cpp'
import {java} from "@codemirror/lang-java";
import {javascript} from "@codemirror/lang-javascript"
import {python} from "@codemirror/lang-python"
import {csharp} from "@replit/codemirror-lang-csharp"

function Language({setCLang}) {

  let lang = [
    {k:"java",v:java()},
    {k:"cpp",v:cpp()},
    {k:"javascript",v:javascript()},
    {k:"python",v:python()},
    {k:"csharp",v:csharp()},
  ]

  return (
    <div className="hs-dropdown relative inline-flex">
  <button
    id="hs-dropdown-default"
    type="button"
    className="hs-dropdown-toggle py-1 px-3 m-1 my-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-slate-900"
  >
    Language
    <svg
      className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  </button>
  <div
    className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-28 hidden z-10 mt-2 min-w-[5rem] bg-white shadow-md rounded-lg p-2 dark:bg-slate-900 dark:border dark:border-gray-700 dark:divide-gray-700"
    aria-labelledby="hs-dropdown-default"
  >
    {lang.map((e,i)=>{
      return(
        <a key={i}
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-slate-900 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
      href="#"
      onClick={()=>{setCLang(e.v)}}
    >
      
      {e.k}
    </a>
      )
    })}
  </div>
</div>

  )
}

export default Language