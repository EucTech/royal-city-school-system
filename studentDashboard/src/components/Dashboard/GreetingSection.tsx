// import React from "react";
import { useEffect, useState } from "react";
import moment from 'moment';
import { Student } from "../../ultils/students";


const GreetingSection = () => {
    const [currentDate, setCurrentDate] = useState("");
    const [greeting, setGreeting] = useState("")
    
    useEffect(() => {
        setCurrentDate(moment().format('LL'));
        // setGreeting(Number(moment().format('HH')).toString())

        if (Number(moment().format('HH')) < 12) {
            setGreeting("Good Morning")
        } else if (Number(moment().format('HH')) < 18) {
            setGreeting("Good Afternoon")
        } else {
            setGreeting("Good Evening")
        }
    })


  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between bg-gradient-to-r from-[#6b1892] to-[#a345cc] py-10 px-10 rounded-[30px]">
      <div className="flex gap-10 sm:gap-3 flex-col justify-between">
        <p className="text-white text-[12px] font-medium">{currentDate}</p>
        <span className="flex flex-col gap-2 lg:gap-4">
          <h1 className="text-white text-[15px] sm:text-[20px] lg:text-[24px] font-bold">{greeting}, {Student.firstName}</h1>
          <p className="text-white text-[12px] lg:text-[14px] font-normal">Always stay updated to the school portal</p>
        </span>
      </div>
      <img className="sm:w-[90px] h-[100%] lg:w-[140px] w-[100px] rounded-[30px]" src="/student_avatar.jpg" alt="" />
    </div>
  );
};

export default GreetingSection;
