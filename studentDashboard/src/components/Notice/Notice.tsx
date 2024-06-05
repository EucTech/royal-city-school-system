import React, { useEffect } from 'react'
import classNames from "classnames";
import { GrAnnounce } from "react-icons/gr";
import { useSelector, useDispatch} from "react-redux";
import { RootState } from "../../store/store";
import { AppDispatch } from "../../store/store";
import { fetchAddNotice, fetchTotalNotice } from '../../store/actions/addDataActions';

const Notice: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const {isLoading, totalNotice } = useSelector((state: RootState) => state.addData);

  useEffect(() => {
    dispatch(fetchTotalNotice());
  }, [dispatch]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (e.title !== "" && e.description !== "") {
      const formData = new FormData(e.currentTarget);
      const payload = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
      };
      try {
        dispatch(fetchAddNotice(payload));
        
      } catch (error: any) {
        console.error("An error ocurred: ", error.message);
      }
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  const overviewClass = classNames(
    "flex flex-col items-center justify-center gap-3 w-[18em] h-[10em] sm:h-[12em] p-3 border-[3px] border-[#430A5D] bg-white border-solid rounded-[30px]"
  );

  return (
    <div className="flex flex-col gap-3 pt-10 p-6">
      <div className={` ${overviewClass}`}>
      <GrAnnounce className=" text-[50px] md:text-[80px] text-[#430A5D]" />
        <h1 className="text-[17px] sm:text-[20px] text-[#430A5D] font-semibold">
          Total Notices
        </h1>
        <p className="text-[15px] text-[#000] font-medium">{isLoading ? "Loadng..." : totalNotice}</p>
      </div>

      <form onSubmit={handleSubmit} className=" sm:w-[60%] w-full flex flex-col gap-7 mt-20">
        <h1 className=" text-center text-[17px] sm:text-[20px] font-semibold text-[#430A5D]">Add Announcement</h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 ">
            <label className="text-[rgb(67,10,93)] text-[15px] font-medium" htmlFor="title">Heading</label>
            <input placeholder="Enter your heading" className=" border-2 border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent py-2 pl-3 rounded-lg" type="text" name="title" id="title" />
          </div>
          <div className="flex flex-col gap-3 ">
            <label className="text-[#430A5D] text-[15px] font-medium" htmlFor="description">Notice</label>
            <textarea className=" h-[10em] border-2 border-solid border-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#430A5D] focus:border-transparent py-2 pl-3 rounded-lg" name="description" id="description" placeholder="Write your notice"></textarea>
          </div>
        </div>
        <button type='submit' className="bg-[#430A5D] text-white py-2 rounded-lg active:scale-95">Submit</button>
      </form>
    </div>
  )
}

export default Notice
