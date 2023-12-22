import {React ,useState}  from 'react'
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { get_qus_list } from '../../database';
import Qus_list from './qus_list';

function Quastins_sumery() {

     const [filter,setfilter]= useState("");
     
     let arr_filter=["binary-tree","dynamic-programming-and-greedy","generic-tree","hashmap-and-heap","graphs","function-and-arrays","introduction-to-recursion","recursion-backtracking","getting-started","recursion-in-arrays","linked-lists","recursion-on-the-way-up","recursion-with-arraylists","string,-string-builder-and-arraylist","patterns","stacks-and-queues"]
         
     const add=(e)=>{

        let filter_val= e.target.textContent;
        setfilter(filter_val);
     }


    return (
        <div className='flex justify-around w-full'>
            {/* Table Section */}
            <div className="max-w-xs flex flex-col rounded-lg shadow-sm mt-[53px]">

 {arr_filter.map((ele)=>{
return  filter!= ele ? <button
onClick={add}

  type="button"
  className="py-3 px-4 inline-flex items-center gap-x-2 rounded-t-md text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
>
 {ele}     
  
</button>: <button
onClick={add}
  
  type="button"
  className="py-3 px-4 bg-yellow-500 inline-flex items-center gap-x-2 rounded-t-md text-sm font-medium focus:z-10 border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white   dark:hover:bg-gray-800  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
>
 {ele}     
  
</button>
 })} 
 
</div>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                
                {/* Card */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                                {/* Header */}
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">

                                    <div>
                                        <div className="inline-flex gap-x-2">

                                        </div>
                                    </div>
                                </div>
                                {/* End Header */}
                                {/* Table */}
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-slate-800">
                                        <tr>



                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Problems
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Creater
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Status
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Rating
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Date and time
                                                    </span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                       
                                            <Qus_list  fil_val={filter} />
                                        
                                    
                                    
                                </table>
                                {/* End Table */}
                                {/* Footer */}

                                {/* End Footer */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Card */}
            </div>
            {/* End Table Section */}
        </div>
    )
}

export default Quastins_sumery