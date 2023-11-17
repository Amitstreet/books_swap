import React from 'react'
import {Link} from  'react-router-dom'
import Sub_cats from './sub_cats.jsx'
import { get_qus_info,get_qus_list} from '../../database'
import { main_data } from '../../database'

function Quastions() {

    console.log(main_data);
    return (


       <>
        { main_data.map((ele)=>{

            return  (<div class="hs-accordion-group">
            <div class="hs-accordion active" id="hs-basic-with-arrow-heading-one">
                <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-arrow-collapse-one">
                    <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    {ele.cat}

                </button>

                 <Sub_cats  qus_list={ele.sub_cat_list}/>


            </div>

        </div>)

        })}
        </>
    )
}

export default Quastions