import React from 'react'
import { useEffect ,useState,useReducer} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Loader from './loader';

function Qus_list({fil_val}) {

    const [questions, setQuestions] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [originalQuestions, setOriginalQuestions] = useState([{}]);
    
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://apiforcode.dailywith.me/questionlist/level/1');          
          setQuestions(response.data.data);
          setOriginalQuestions(response.data.data)
          setLoading(false);
        }
         catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
      fetchData();
    }, []);

    useEffect(() => {
        const filteredQuestions = filter_data(originalQuestions);
        setQuestions(filteredQuestions);
      }, [fil_val, questions]); // Update when fil_val or questions change
    
      const filter_data = (qus) => {
        if (fil_val !== '') {
          return qus.filter((ele) => ele.topic === fil_val);
        } else {
          return qus;
        }
      };


    return (
            
         <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

            {
                Array.isArray(questions) && questions.map((ele,idx) => {

                return ( loading  ? <Loader/>:  <tr>

                        <td className="h-px w-px whitespace-nowrap">
                            <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                <div className="flex items-center gap-x-3">
                                    <Link to ={`${ele.id}`} >
                                        <div className="grow items-center flex ml-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="code"><path fill="#444" d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"></path></svg>
                                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                {ele.question_name}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </td>
                        <td className="h-px w-72 whitespace-nowrap">
                            <div className="px-6 py-3">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    {ele.topic}
                                </span>

                            </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                    <svg
                                        className="w-2.5 h-2.5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                    {"bdbf"}
                                </span>
                            </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                                <div className="flex items-center gap-x-3">
                                    <span className="text-xs text-gray-500">1/5</span>
                                    <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                        <div
                                            className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                            role="progressbar"
                                            style={{ width: "25%" }}
                                            aria-valuenow={25}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                                <span className="text-sm text-gray-500">
                                    {ele.level_id}
                                </span>
                            </div>
                        </td>

                    </tr>)
                })
            }


        </tbody>
        

    )
}

export default Qus_list