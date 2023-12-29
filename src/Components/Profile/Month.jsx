import React from 'react'

function Month({month_nam,month_length}) {

    console.log(month_nam)


  return (
    <div className='flex-wrap flex w-36 h-40 border-[solid]'>
     {Array.from(Array(month_length)).map((ele,idx)=>{

         return <div   className='w-8 h-[18px] bg-current ml-[3px]'>  </div>

     })}
    </div>
  )
}

export default Month