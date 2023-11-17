import React from 'react'
import { Link } from 'react-router-dom'

function sub_cats({ qus_list }) {

    return (

        <div id="hs-basic-with-arrow-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-arrow-heading-one">

            {qus_list.map((ele) => {

                return (
                    <ul class="max-w-xs flex flex-col">
                        <li class="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                            </svg>
                            <Link class="inline-flex items-center gap-x-3.5  text-sm font-medium bg-white border text-gray-800 -mt-px -b-lg hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-blue-600" to={ele.id}>

                                {ele.name}
                            </Link>
                        </li>
                    </ul>
                )
            })}
        </div>



    )
}

export default sub_cats