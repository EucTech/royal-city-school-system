// import React from 'react'
import classNames from "classnames";
import { FaBook } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { AppDispatch } from "../../store/store";
import { fetchTotalSubject } from "../../store/actions/addDataActions";
import { useEffect } from "react";


const Courses: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, totalSubject } = useSelector((state: RootState) => state.addData);

  useEffect(() => {
    dispatch(fetchTotalSubject());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  const overviewClass = classNames(
    "flex flex-col items-center justify-center gap-3 w-[18em] h-[10em] sm:h-[12em] p-3 border-[3px] border-[#430A5D] bg-white border-solid rounded-[30px]"
  );

  return (
    <div className="flex flex-col gap-3 pt-10 p-6">
      <div className={` ${overviewClass}`}>
        <FaBook className="text-[50px] sm:text-[80px] text-[#430A5D]" />
        <h1 className="text-[17px] sm:text-[20px] text-[#430A5D] font-semibold">
          Total Subjects
        </h1>
        <p className="text-[15px] text-[#000] font-medium">{isLoading ? "Loading..": totalSubject}</p>
      </div>

      
    </div>
  );
};

export default Courses;
