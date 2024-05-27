import React from 'react'
import { useEffect, useState } from 'react'
import { getbook } from './api/book';

function books() {
  let [book, setbook] = useState(null);

  useEffect(() => {
    const get = async () => {
      try {
        let res = await getbook();
        setbook(res.books);
      }
      catch (err) {
        console.log(err);
      }
    }
    get();
  }, []) 
  //  book= await  response.json();

  return (
    <div className='justify-center w-[calc(100%_-_248px)] mx-[249px] flex mt-14'>
      <div className='Filter  w-[18rem] mx-[13px]'>
        <ul class="max-w-xs flex flex-col">
          <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
            Novel
          </li>
          <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
            Adventure
          </li>
          <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
            Romance
          </li>
          <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
            Study
          </li>
          <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
            Poeatry
          </li>
        </ul>
        <div class="relative mb-6 my-[12px]">
          <span class="inline-flex items-center  mb-3 my-[13px]gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">Price Range</span>

          <input
            type="range"
            class="block w-full bg-gradient-to-r from-blue-400 to-blue-600 appearance-none rounded h-3 focus:outline-none overflow-hidden"
            id="min-and-max-range-slider-usage"
            min="0"
            max="1000" />
          <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min (0)</span>

          <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max (1000)</span>
        </div>

        <div class="relative mb-6 my-[12px]">
          <span class="inline-flex items-center  mb-3 my-[13px]gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">Nearest Range</span>

          <input
            type="range"
            class="block w-full bg-gradient-to-r from-blue-400 to-blue-600 appearance-none rounded h-3 focus:outline-none overflow-hidden"
            id="min-and-max-range-slider-usage"
            min="0"
            max="1000" />
          <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min (0)</span>

          <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max (1000)</span>
        </div>

        <ul class="my-[59px] max-w-xs flex flex-col">
          <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
            Novel
          </li>
          <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
            Adventure
          </li>
          <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
            Romance
          </li>
          <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
            Study
          </li>
          <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
            Poeatry
          </li>
        </ul>
      </div>
      {/* Card Blog */}
      <div className="max-w-[67rem] px-4   mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {book ? book.map((ele) => {
            return <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
              <div class="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl p-[93px]">
                <img class="w-full h-64 object-cover object-center rounded-lg" src={ele.url} alt="Nature Image" />

              </div>
              <div class="p-4 md:p-6">
                <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                  {ele.bookname}
                </span>
                <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                  {ele.writer}
                </h3>
                <p class="mt-3 text-gray-500 dark:text-neutral-500">
                  {ele.description}
                </p>
              </div>
              <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
                  view peofile
                </a>
                <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="#">
                  Contact
                </a>
              </div>
            </div>
          }) : <h1>loader</h1>
          }


        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}


    </div>
  )
}

export default books