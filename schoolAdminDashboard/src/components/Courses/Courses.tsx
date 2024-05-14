// import React from 'react'
import classNames from "classnames";
import { FaBook } from "react-icons/fa6";

const Courses = () => {
  const overviewClass = classNames(
    "flex flex-col items-center justify-center gap-3 w-[18em] h-[12em] p-3 border-[3px] border-[#430A5D] bg-white border-solid rounded-[30px]"
  );

  return (
    <div className="flex flex-col gap-3 pt-10 p-6">
      <div className={` ${overviewClass}`}>
        <FaBook className="text-[80px] text-[#430A5D]" />
        <h1 className="text-[17px] sm:text-[20px] text-[#430A5D] font-semibold">
          Total Subjects
        </h1>
        <p className="text-[15px] text-[#000] font-medium">100</p>
      </div>

      <div className=" sm:w-[60%] w-full flex flex-col gap-7 mt-20">
        <h1 className=" text-center text-[17px] sm:text-[20px] font-semibold text-[#430A5D]">Add Subject</h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 ">
            <label className="text-[#430A5D] text-[15px] font-medium" htmlFor="subject">Subject</label>
            <input className=" border-2 border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent py-2 pl-3 rounded-lg" type="text" name="subject" id="subject" />
          </div>
          <div className="flex flex-col gap-3 ">
            <label className="text-[#430A5D] text-[15px] font-medium" htmlFor="class">Class</label>
            <input className="  border-2 border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent py-2 pl-3 rounded-lg" type="text" name="class" id="class" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
