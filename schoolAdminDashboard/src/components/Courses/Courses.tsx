// import React from 'react'
import classNames from "classnames";
import { FaBook } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { AppDispatch } from "../../store/store";
import { fetchAddSubject, fetchTotalSubject } from "../../store/actions/addDataActions";
import { useEffect } from "react";


const Courses: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, totalSubject } = useSelector((state: RootState) => state.addData);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (e.subject_name !== "" && e.teacher !== "") {
      const formData = new FormData(e.currentTarget);
      const payload = {
        subject_name: formData.get("subject_name") as string,
        teacher: formData.get("teacher") as string,
      };
      try {
        dispatch(fetchAddSubject(payload));
      } catch (error: any) {
        console.error("An error ocurred: ", error.message);
      }
    }
  }

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

      <form onSubmit={handleSubmit} className=" sm:w-[60%] w-full flex flex-col gap-7 mt-20">
        <h1 className=" text-center text-[17px] sm:text-[20px] font-semibold text-[#430A5D]">Add Subject</h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 ">
            <label className="text-[rgb(67,10,93)] text-[15px] font-medium" htmlFor="subject">Subject</label>
            <input placeholder="Enter the Subject" className=" border-2 border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent py-2 pl-3 rounded-lg" type="text" name="subject_name" id="subject" />
          </div>
          <div className="flex flex-col gap-3 ">
            <label className="text-[#430A5D] text-[15px] font-medium" htmlFor="class">Teacher</label>
            <input placeholder="Enter the teacher" className="  border-2 border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent py-2 pl-3 rounded-lg" type="text" name="teacher" id="teacher" />
          </div>
        </div>
        <button type="submit" className="bg-[#430A5D] text-white py-2 rounded-lg active:scale-95">Add Subject</button>
      </form>
    </div>
  );
};

export default Courses;
