import React, { useState } from "react";

const DatePicker = ({selectedDay, setSelectedDay, selectedMonth, setSelectedMonth}) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  return (
    <div className="flex rounded-3xl px-6 pt-1 text-nig-50 hover:cursor-pointer transition-colors duration-300 ease-in-out">
        <select id="payday" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)} className="w-[50%] border-nig-50/30 border-[1px] border-r-0 rounded-r-none rounded-2xl h-[48px] px-2 focus:outline-none focus:ring-0 focus:ring-indigo-500">
          <option value="text-nig-30 bg-nig-80" disabled>
            Day
          </option>
          {days.map((day) => (
            <option className="text-nig-30 bg-nig-80" key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select id="month" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="w-full border-nig-50/30 border-[1px] border-l-0 rounded-l-none rounded-2xl h-[48px] px-2 focus:outline-none focus:ring-0 focus:ring-indigo-500">
          <option value="text-nig-30 bg-nig-80" disabled>
            Month
          </option>
          {months.map((month, index) => (
            <option className="text-nig-30 bg-nig-80" key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
    </div>
  );
};

export default DatePicker;
