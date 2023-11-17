import React from 'react';
import Month from './Month';

const YearStreak = ({ contributions }) => {

  const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const month=[31,28,31,30,31,30,31,31,30,31,30,31];
  const month_name= ['jan','feb','march','apr','may','jun','july','aug','sep','oct','nov','dec'];


  return (
     <div className="flex gap-1 w-10/12 pl-32 flex-wrap h-[8.5rem]">

        {month.map((ele,idx)=>{
          return      <Month  className="ff" month_nam = {month_name[idx]} month_length = {ele}/>
          
        })}

     </div>
  );
};

export default YearStreak;
