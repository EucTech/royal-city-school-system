// import React from 'react'
import classNames from "classnames";
import { PiChalkboardTeacherFill, PiStudentFill } from "react-icons/pi";
import { AppDispatch } from "../../store/store";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTotalStudents } from "../../store/actions/analyticesActions";

const Overview = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {totalStudents, isLoading} = useSelector((state: RootState) => state.analytices);

    useEffect(() => {
      dispatch(fetchTotalStudents());
    },[dispatch])

    const overviewClass = classNames(
        "flex flex-col items-center justify-center gap-3 w-[18em] h-[10em] sm:h-[12em] p-3 border-[3px] border-[#430A5D] bg-white border-solid rounded-[30px]"
    )

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className={` ${overviewClass}`}>
        <PiStudentFill className="text-[50px] sm:text-[80px] text-[#430A5D]" />
        <h1 className="text-[17px] sm:text-[20px] text-[#322C2B] font-semibold">Total Students</h1>
        <p className="text-[15px] text-[#000] font-medium">{isLoading ? "Loading.." : totalStudents.data || "0"}</p>
      </div>
      <div className={` ${overviewClass}`}>
      <PiChalkboardTeacherFill className="text-[50px] sm:text-[80px] text-[#430A5D]" />
        <h1 className="text-[17px] sm:text-[20px] text-[#322C2B] font-semibold">Total Teachers</h1>
        <p className="text-[15px] text-[#000] font-medium">100</p>
      </div>
    </div>
  );
};

export default Overview;
