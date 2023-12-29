import { useParams } from "react-router-dom";
import axios from 'axios';
function Content({data}) {


    console.log(data);
      


    
  return (
    <>
      {/* Blog Article */}
      <div className="mx-auto ">
        <div className="">
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
              </h2>
              <p className="text-lg text-slate-900 dark:text-gray-200">
                {data.question_text}
              </p>
            </div>
            <p className="text-lg text-slate-900 dark:text-gray-200">
            Input Format
            </p>
            
            <p className="text-lg text-slate-900 dark:text-gray-200 text-[white] p-1.5 bg-black">
              {data.demo_input}
            </p>

            <p className="text-lg text-slate-900 dark:text-gray-200">
            output Format
            </p>
            
            <div className="aspect-w-16 aspect-h-9 w-fit">
            <p className="text-lg text-slate-900 dark:text-gray-200">
            {data.demo_output}

            </p>
</div> 

<p className="text-lg text-slate-900 dark:text-gray-200">
            Input Format
            </p>

             
            <p className="text-lg text-slate-900 dark:text-gray-200 text-[white] p-1.5 bg-black">
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
          {/* End Content */}
        </div>
      </div>
      {/* End Blog Article */}
      
    </>
  );
}

export default Content;
