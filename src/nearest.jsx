import React from 'react'
import {useState,useEffect} from 'react'
import {getNearestLocation} from './api/location.js'
import { useSelector } from "react-redux";

function nearest() {


  let [user1,setuser]= useState(null);

  const user = useSelector(state => state);

  console.log(user.user.location)
   useEffect(()=>{
          const nearest_user= async ()=>{
        let data=  await getNearestLocation({lng:user.user.location.longitude,lat:user.user.location.latitude})
        setuser(data)
      }
    nearest_user();
   },[])

   if(user1 !=null)
    {
   console.log(user1.users)
    }




  return (
    <div>
         <div className="w-34 py-8 w-[calc(100%_-_265px)] ml-auto mr-2">
         <>
 
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-auto mr-auto pl-[86px] pr-10">
    {/* Profile Card 1 */}
    {
        user1?.users.map((ele)=>{
        return   < div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center transform hover:scale-105 transition-transform">
        <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-900 shadow-inner flex items-center justify-center">
          <img
            className="w-20 h-20 rounded-full border-2 border-gray-300 dark:border-gray-700"
            src="https://via.placeholder.com/150"
            alt="Profile Image"
          />
        </div>
        <h2 className="mt-4 text-xl font-semibold">{ele.username}</h2>
        <p className="text-gray-600 dark:text-gray-400">{ele.email}</p>
        <div className="mt-4 flex space-x-2">
          <button className="bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
            Contact Me
          </button>
          <button  id={ele._id} className="bg-green-400 hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
            Profile
          </button>
        </div>
      </div>
      })
    }
  
  </div>
</>

</div>
    </div>
  )
}


export default nearest