import React from 'react';

const YearStreak = ({ contributions }) => {
  const numDays = 366; // Leap year
  const numRows = numDays / 7;
  const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDayDetails = (dayIndex) => {
    const date = new Date(new Date().getFullYear(), 0, dayIndex + 1);
    const formattedDate = `${daysInWeek[date.getDay()]} - ${date.toLocaleDateString()}`;
    const contributionsCount = contributions[dayIndex] || 0;

    return { formattedDate, contributionsCount };
  };

  return (
    <div className="flex gap-1 w-10/12 pl-32 flex-wrap h-[8.5rem]">
      {Array.from({ length: numDays }, (_, dayIndex) => {
        const { formattedDate, contributionsCount } = getDayDetails(dayIndex);

        return (
          <div
            key={dayIndex}
            className={`w-4 h-4 border rounded-sm border-gray-300 ${
              contributionsCount > 0 ? 'bg-green-500' : 'bg-gray-100'
            }`}
            title={`${formattedDate}\nContributions: ${contributionsCount}`}
          ></div>
        );
      })}
    </div>
  );
};

export default YearStreak;
