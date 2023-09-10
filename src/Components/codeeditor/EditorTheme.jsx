import { useState } from "react"

import {abcdef} from '@uiw/codemirror-theme-abcdef';
import {androidstudio} from '@uiw/codemirror-theme-androidstudio';
import {atomone} from '@uiw/codemirror-theme-atomone';
import {aura} from '@uiw/codemirror-theme-aura';
import {bbedit} from '@uiw/codemirror-theme-bbedit';
import {bespin} from '@uiw/codemirror-theme-bespin';
import {darcula} from '@uiw/codemirror-theme-darcula';
import {dracula} from '@uiw/codemirror-theme-dracula';
import {duotoneDark,duotoneLight} from '@uiw/codemirror-theme-duotone';
import {eclipse} from '@uiw/codemirror-theme-eclipse';
import {githubDark,githubLight } from '@uiw/codemirror-theme-github';
import {gruvboxLight,gruvboxDark} from '@uiw/codemirror-theme-gruvbox-dark';
import {materialLight,material,materialDark} from '@uiw/codemirror-theme-material';
import {noctisLilac} from '@uiw/codemirror-theme-noctis-lilac';
import {nord} from '@uiw/codemirror-theme-nord';
import {okaidia} from '@uiw/codemirror-theme-okaidia';
import {solarizedDark,solarizedLight} from '@uiw/codemirror-theme-solarized';
import {sublime} from '@uiw/codemirror-theme-sublime';
import {tokyoNight} from '@uiw/codemirror-theme-tokyo-night';
import {tokyoNightStorm} from '@uiw/codemirror-theme-tokyo-night-storm';
import {tokyoNightDay} from '@uiw/codemirror-theme-tokyo-night-day';
import {vscodeDark} from '@uiw/codemirror-theme-vscode';
import {xcodeDark,xcodeLight} from '@uiw/codemirror-theme-xcode';

function EditorTheme( {setCTheme}) {

  
    let theme = [
        {k:"abcdef",v:abcdef},
        {k:"android studio",v:androidstudio},
        {k:"atom one",v:atomone},
        {k:"aura",v:aura},
        {k:"bbedit",v:bbedit},
        {k:"bespin",v:bespin},
        {k:"darcula",v:darcula},
        {k:"dracula",v:dracula},
        {k:"duotone light",v:duotoneLight},{k:"duotone dark",v:duotoneDark},
        {k:"eclipse",v:eclipse},
        {k:"github light",v:githubLight},{k:"github dark",v:githubDark},
        {k:"gruvbox light",v:gruvboxLight},{k:"gruvbox dark",v:gruvboxDark},
        {k:"material light",v:materialLight},{k:"material dark",v:materialDark},
        {k:"noctis-lilac",v:noctisLilac},
        {k:"nord",v:nord},
        {k:"okaidia",v:okaidia},
        {k:"solarized light",v:solarizedLight},{k:"solarized dark",v:solarizedDark},
        {k:"sublime",v:sublime},
        {k:"tokyo-night",v:tokyoNight},
        {k:"tokyo-night-day",v:tokyoNightStorm},
        {k:"tokyo-night-storm",v:tokyoNightDay},
        {k:"vscode",v:vscodeDark},
        {k:"xcode light",v:xcodeLight},{k:"xcode dark",v:xcodeDark},
    ]


  return (
    <div className="hs-dropdown relative inline-flex">
  <button
    id="hs-dropdown-default"
    type="button"
    className="hs-dropdown-toggle py-1 px-3 m-1 my-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-slate-900"
  >
    Theme
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
    className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-42 hidden z-10 mt-2 min-w-[5rem] bg-white shadow-md rounded-lg p-2 dark:bg-slate-900 dark:border dark:border-gray-700 dark:divide-gray-700"
    aria-labelledby="hs-dropdown-default"
  >
    {theme.map((e,i)=>{
      return(
        <a key={i}
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-slate-900 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
      href="#"
      onClick={()=>{setCTheme(e.v)}}
    >
      
      {e.k}
    </a>
      )
    })}
  </div>
</div>

  )
}

export default EditorTheme